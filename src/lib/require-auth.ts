import { IncomingMessage } from "http";

export async function requireAuth({request}: { request: IncomingMessage }) {
  // you pass the request from each and every func that uses requireAuth then you receive it here
    const pathname = request?.url ? new URL(request.url).pathname : "/"
    const isLoggedIn = localStorage.getItem("loggedin");
  
    if (!isLoggedIn) {
      window.location.href = `/signin?message=You must log in first.&redirectTo=${pathname}`;
      // redirect to login page
    }
  }
  