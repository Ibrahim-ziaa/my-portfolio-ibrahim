"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Head = () => {
  const pathname = usePathname();
  const title =
    pathname === "/" ? "Home" : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Ibrahim Zia Khan ${pathname === "/" ? "" : "• " + title.replace(/[-/]/g, " ")}`,
    description:
      "I'm Ibrahim Zia Khan, a Data Scientist passionate about building AI-powered and data-driven solutions. Specializing in NLP, computer vision, and business analytics.",
    keywords:
      "Ibrahim Zia Khan, Data Scientist, AI Developer, Machine Learning, Deep Learning, NLP, Computer Vision, Business Analytics, Full Stack Developer",
    type: "website",
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:url" content={`https://izk.vercel.app${pathname}`} />
      <link rel="canonical" href={`https://izk.vercel.app${pathname}`} />
      <link rel="me" href="mailto:ziaibrahim90@gmail.com" />
      <link
        rel="me"
        href="https://www.linkedin.com/in/ibrahim-zia-a79360203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHD88jYgPTgqDm0obvpc7VQ%3D%3D"
      />
      <link
        rel="me"
        href="https://www.upwork.com/freelancers/ibrahimzia?mp_source=share"
      />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Ibrahim Zia Khan" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta name="theme-color" content="#000000" />
    </>
  );
};

export default Head;
