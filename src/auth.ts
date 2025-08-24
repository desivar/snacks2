// src/auth.ts
import { NextAuthOptions } from "next-auth"; // <-- Updated import
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/db/connect";
import { User } from "@/lib/models/User";
import bcrypt from "bcryptjs";

// This is the core configuration object.
export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          await connectToDB();

          // Type guard for credentials
          if (!credentials?.email || !credentials?.password) return null;

          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(
            credentials.password.toString(),
            user.password
          );

          return passwordsMatch ? user : null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      // You can keep the `as any` for now, but it's better to fix the types as explained previously.
      session.user = token.user as any; 
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// This is where you export the options for the route handler to use.
export default authOptions;