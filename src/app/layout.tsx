import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "GitHub Search",
  description: "App para buscar usuários do GitHub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,400;0,600;1,100;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="github.svg" type="image/svg" />
      </head>
      <body style={{ fontFamily: "Victor Mono" }}>{children}</body>
    </html>
  );
}
