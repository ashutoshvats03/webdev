import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.rewrite(new URL('/', request.url))
  //here with NextResponse we have many functions to manipulate the data coming from server
  //here we are directing it to / page
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}