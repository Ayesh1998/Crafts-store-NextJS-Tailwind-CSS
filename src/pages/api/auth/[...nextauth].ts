import NextAuth, { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { authenticateUserApi } from "../../../api/user-fetch-wrapper";

//adding next auth
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // perform login logic
        try {
          const { _id, first_name, last_name, role } = await authenticateUserApi({ email, password });
          
          return {
            id: _id,
            name: first_name + " " + last_name,
            email: email,
            role: role,
          };
        } catch (error: any) {
          throw new Error("Login Unsuccessful");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
        params.token.id = params.user.id;
      }
      // return final_token
      return params.token;
    },
    session({ session, token }) {
      // updating the session.user based on the token object
      if (token && session.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
