import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect all requests to a specific URL
  return NextResponse.redirect(new URL("https://vim.dad"));
}
