// src/hooks/useAdminGuard.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type UseAdminGuardResult = {
  loading: boolean;
  authorized: boolean;
};

export function useAdminGuard(): UseAdminGuardResult {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    async function checkAccess() {
      setLoading(true);

      const { data: authData } = await supabase.auth.getUser();
      const user = authData?.user;

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();

      if (error) {
        console.error("Profile loading error:", error);
        router.push("/login");
        return;
      }

      if (!profile) {
        await supabase
          .from("profiles")
          .insert([{ id: user.id, email: user.email, role: "user" }]);

        router.push("/request_access");
        return;
      }

      if (profile.role !== "admin") {
        router.push("/request_access");
        return;
      }

      setAuthorized(true);
      setLoading(false);
    }

    checkAccess();
  }, [router]);

  return { loading, authorized };
}
