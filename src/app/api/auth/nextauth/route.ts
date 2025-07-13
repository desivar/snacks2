// src/app/api/auth/[...nextauth]/route.ts
export { GET, POST } from "@/auth";
export const runtime = 'edge'; // Optional for Vercel deployments