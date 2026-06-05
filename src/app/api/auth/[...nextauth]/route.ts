import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const clients = JSON.parse(process.env.PORTAL_CLIENTS || '[{"id":"1","name":"Demo Client","email":"demo@nulbug.com","password":"demo123"}]');
        const user = clients.find(
          (c: any) => c.email === credentials?.email && c.password === credentials?.password
        );
        if (user) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/en/portal",
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET || "nulbug-secret-change-in-production-2026",
});

export { handler as GET, handler as POST };
