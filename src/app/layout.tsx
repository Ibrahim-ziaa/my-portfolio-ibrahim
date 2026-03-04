import type { Metadata } from "next";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ibrahim Zia Khan — AI Automation Expert & Data Scientist",
  description:
    "Top Rated Plus Freelancer on Upwork. AI Automation Expert, Data Scientist, n8n & Make Specialist, and Director @ NebulaAi.",
  keywords: [
    "Ibrahim Zia Khan",
    "AI Automation",
    "Data Scientist",
    "n8n",
    "Make",
    "LangChain",
    "OpenAI",
    "Upwork Top Rated Plus",
    "NebulaAi",
  ],
  authors: [{ name: "Ibrahim Zia Khan" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#0a0a0a] text-white antialiased",
          heading.variable,
          base.variable
        )}
      >
        {children}
        <Toaster theme="dark" position="bottom-right" />
        <Analytics />
      </body>
    </html>
  );
}
