// jest.setup.js
require("@testing-library/jest-dom");

// Dummy Supabase environment variables for tests
process.env.NEXT_PUBLIC_SUPABASE_URL = "http://localhost:54321";
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "test_key";
