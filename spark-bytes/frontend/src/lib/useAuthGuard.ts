// src/hooks/useAuthGuard.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

type UseAuthGuardResult = {
  loading: boolean;
  user: User | null;
};

export function useAuthGuard({ redirectToLogin = true } = {}): UseAuthGuardResult {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      const usr = data?.user || null;
      setUser(usr);
      setLoading(false);

      if (!usr && redirectToLogin) {
        router.push("/login");
      }
    }

    checkUser();
  }, [router, redirectToLogin]);

  return { loading, user };
}
