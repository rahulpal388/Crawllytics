import { cookies } from "next/headers";


export default async function getSessionCookies(cookieName: string) {

    const cookieStore = await cookies();

    return cookieStore.get(cookieName)?.value;
}