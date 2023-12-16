import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <div className="flex justify-between">
            <div className=""></div>
            <div className="basis-2/4">{children}</div>
            <div className=""></div>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
