"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function Intro() {

  const titleAnim = useInViewAnimation();
  const textAnim = useInViewAnimation();
  const buttonAnim = useInViewAnimation();
  const imageAnim = useInViewAnimation();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2
            ref={titleAnim.ref}
            className={`text-4xl font-medium mb-6 ${
              titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
            }`}
          >
            Hi, I’m Dr. Maya Reynolds.
          </h2>

          <p
            ref={textAnim.ref}
            className={`text-lg leading-snug mb-8 ${
              textAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
            }`}
          >
            I’m a licensed clinical psychologist in Santa Monica. I help adults navigate anxiety, trauma, burnout, and high internal pressure.
            <br /><br />
            My approach is warm, collaborative, and grounded, integrating CBT, EMDR, mindfulness, and body-based work.
          </p>

          <button
            ref={buttonAnim.ref}
            className={`border border-black px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition ${
              buttonAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
            }`}
          >
            Let’s chat →
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageAnim.ref}
          className={`reveal-container ${
            imageAnim.isVisible ? "" : "animate-hidden"
          }`}
        >
          <img
            src="/images/drbg.png"
            alt="Dr Maya Reynolds"
            className="flash-reveal h-[100%] w-full object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
