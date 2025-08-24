// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/auth"; // <-- This is what you had, and it is correct for a named export

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export const runtime = "nodejs"; // <-- This line fixes the 'crypto' error