
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/auth"; // <-- Change this line

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export const runtime = "nodejs";