import { log } from "console";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
          console.log(`Credentials Received: ${credentials}`)
          return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login', 
  },
});

export { handler as GET, handler as POST };
