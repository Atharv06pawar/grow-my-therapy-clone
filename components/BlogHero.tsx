"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function BlogHero() {

  const imageAnim = useInViewAnimation<HTMLDivElement>();
  const titleAnim = useInViewAnimation<HTMLDivElement>();
  const textAnim = useInViewAnimation<HTMLDivElement>();
  const subTextAnim = useInViewAnimation<HTMLDivElement>();

  return (
    <section className="py-24 bg-[#EEF5F1]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-[#1F2933]">

        {/* LEFT IMAGE */}
        {/* LEFT IMAGE */}
<div
  ref={imageAnim.ref}
  className={`reveal-container relative flex justify-center ${
    imageAnim.isVisible ? "" : "animate-hidden"
  }`}
>

  {/* IMAGE */}
  <img
    src="/images/bhero.png"
    alt="Blog hero visual"
    className="flash-reveal h-[480px] md:h-[520px] w-auto max-w-full object-contain relative z-10"
  />

  {/* EDGE BLUR MERGE OVERLAY */}
  <div
    className="pointer-events-none absolute inset-0 rounded-xl z-20"
    style={{
      background: `
        radial-gradient(
          ellipse at center,
          rgba(238,245,241,0) 55%,
          rgba(238,245,241,0.6) 75%,
          rgba(238,245,241,1) 100%
        )
      `
    }}
  />

</div>


        {/* RIGHT TEXT */}
        <div>

          <h1
            ref={titleAnim.ref}
            className={`text-5xl font-medium mb-6 ${
              titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
            }`}
          >
            The Dr. Maya Reynold's Blog
          </h1>

          <p
            ref={textAnim.ref}
            className={`text-lg mb-4 ${
              textAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
            }`}
          >
            A quiet space to explore healing, self-understanding, and emotional well-being.
          </p>

          <p
            ref={subTextAnim.ref}
            className={`font-semibold text-lg ${
              subTextAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
            }`}
          >
            Glad you’re here.
          </p>

        </div>

      </div>
    </section>
  );
}
