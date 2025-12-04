import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

supabase.auth.onAuthStateChange((event, session) => {
  console.log("[Auth Event]", event);
  console.log("[Session]", session);
});
