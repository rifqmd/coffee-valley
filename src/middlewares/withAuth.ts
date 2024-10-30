import { getToken } from 'next-auth/jwt';
import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  NextMiddleware,
} from 'next/server';

const onlyAdmin = ['admin'];
const authPage = ['auth'];

export default function WithAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async function (req: NextRequest, next: NextFetchEvent) {
    // pathname akan di split dengan '/'
    const pathname = req.nextUrl.pathname.split('/')[1];

    // jika ada requireAuth
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // jika tidak ada token
      if (!token && !authPage.includes(pathname)) {
        const url = new URL('/auth/login', req.url);
        url.searchParams.set('callbackUrl', encodeURI(req.url));

        return NextResponse.redirect(url);
      }

      // jika ada token
      if (token) {
        // jika role admin
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL('/', req.url));
        }

        // jika role bukan admin
        if (token.role !== 'admin' && onlyAdmin.includes(pathname)) {
          return NextResponse.redirect(new URL('/', req.url));
        }
      }
    }
    return middleware(req, next);
  };
}
