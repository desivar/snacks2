// src/auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "@/lib/db/connect";
import { User } from "@/lib/models/User";
import bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await connectToDB();
        
        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        return passwordsMatch ? user : null;
      },
    }),
  ],
});