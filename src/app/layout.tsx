import { Navbar } from "@/components";
import Providers from "@/components/utils/providers";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import "@mantine/core/styles.css";

import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SparklesCore } from "@/components/ui/sparkles";
// import CustomCursor from "@/components/CustomCursor"; // Enable later if needed

export const metadata: Metadata = {
  title: "Ibrahim Zia Khan",
  description:
    "This is my personal portfolio. I'm Ibrahim Zia, a Data Scientist building intelligent, AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optional theme setup if needed later */}
        {/* <ColorSchemeScript /> */}
        {/* Remove preload if image is not required for critical path */}
        {/* <link rel="preload" href="/images/ibrahim.jpeg" as="image" /> */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-heading relative select-none",
          heading.variable,
          base.variable
        )}
      >
        <Providers>
          <TracingBeam className="px-6">
            <div className="w-full absolute inset-0 min-h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={0.8}
                particleDensity={15}
                speed={1}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            <Navbar />
            {children}
          </TracingBeam>
        </Providers>
        {/* Optional custom cursor */}
        {/* <CustomCursor /> */}
        <Analytics />
      </body>
    </html>
  );
}
