import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const metadata: Metadata = {
  title: "SWARA",
  description: "SWARA",
};

const clientId = '1050935085571-19fqb7jgdgfh16ne190o1jko8dtnuljj.apps.googleusercontent.com';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins leading-loose">
        <GoogleOAuthProvider clientId={clientId}>
          {children}
          <Toaster />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
