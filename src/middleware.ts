//use to protect routes

export { default } from "next-auth/middleware";

//routes that should be protected
export const config = {
  matcher: ["/crafts/:path*", "/analytics"],
};

//
// import { NextRequest, NextResponse } from "next/server";

// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   function middleware(req: NextRequest) {
//     // return NextResponse
//     return NextResponse.rewrite(new URL("/login", req.url));
//   },
//   {
//     callbacks: {
//       authorized({ token }) {
//         return token?.role === "admin" || token?.role === "user";
//       },
//     },
//   }
// );

// export const config = { matcher: ["/crafts/:path*", "/analytics"] };
