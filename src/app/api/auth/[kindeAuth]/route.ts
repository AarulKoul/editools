import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: any): Promise<any> {
  const endpoint = params.kindeAuth;
  const authHandler = handleAuth(request, endpoint); // Assuming handleAuth returns a function
  const response = await authHandler(request, new NextResponse());

  // Assuming response is a Next.js response object
  return response;
}
