// components/layout/Logo.tsx - SIMPLE & OPTIMAL SIZE
"use client";

import Image from "next/image";
import Link from "next/link";

const LOGO_BASE64_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDMwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxMjAiIGZpbGw9IiNmMGY5ZmYiLz48L3N2Zz4=";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-block"
      aria-label="Affordable Home Services"
    >
      {/* OPTIMAL LOGO SIZES - Easy to adjust */}
      <Image
        src="/logo/logo.webp"
        alt="Affordable Home Services"
        width={256}
        height={98}
        className="h-[50px] w-auto
sm:h-[60px] sm:w-auto 
md:h-[70px] md:w-auto 
lg:h-[80px] lg:w-auto 
xl:h-[90px] xl:w-auto"
        priority={true}
        quality={100}
        sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 260px, (max-width: 1280px) 300px, 340px"
        placeholder="blur"
        blurDataURL={LOGO_BASE64_PLACEHOLDER}
        style={{
          objectFit: "contain",
          objectPosition: "left center",
        }}
      />
    </Link>
  );
}
