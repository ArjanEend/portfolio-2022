import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  
  // Detect if accessing via freelance domain or query parameter
  const isFreelanceHost = host.includes('arjancordia') || url.searchParams.get('mode') === 'freelance';
  
  // If requesting root page under the freelance host/mode, rewrite to /freelance
  if (isFreelanceHost && url.pathname === '/') {
    url.pathname = '/freelance';
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (api routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - assets (public assets)
     * - favicon.ico (favicon file)
     * - eendgames.png (brand icon)
     */
    '/((?!api|_next/static|_next/image|assets|favicon.ico|eendgames.png|.*\\..*).*)',
  ],
};
