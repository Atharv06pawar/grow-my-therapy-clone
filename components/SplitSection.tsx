"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function SplitSection() {

  const imageAnim = useInViewAnimation();
  const titleAnim = useInViewAnimation();
  const textAnim = useInViewAnimation();
  const buttonAnim = useInViewAnimation();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div
          ref={imageAnim.ref}
          className={`reveal-container ${
            imageAnim.isVisible ? "" : "animate-hidden"
          }`}
        >
          <img
            src="/images/dont.png"
            alt="Therapy related visual"
            className="flash-reveal h-[500px] w-full object-cover rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2
            ref={titleAnim.ref}
            className={`text-4xl font-medium mb-6 ${
              titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
            }`}
          >
            You don’t have to carry this alone.
          </h2>

          <p
            ref={textAnim.ref}
            className={`text-lg leading-relaxed mb-8 ${
              textAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
            }`}
          >
            If you’re experiencing:
            <br /><br />
            <ul className="space-y-2 text-lg">
                <li>Constant worry or overthinking</li>
                <li>Feeling functional but exhausted</li>
                <li>Sleep or relaxation struggles</li>
                <li>Feeling disconnected from yourself</li>
                <li>Always expecting something to go wrong</li>
            </ul>
            Therapy can help you feel more grounded and safe.
          </p>

          <button
            ref={buttonAnim.ref}
            className={`border border-black px-6 py-3 rounded-full text-sm hover:bg-black hover:text-white transition ${
              buttonAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
            }`}
          >
            Work with me →
          </button>

        </div>

      </div>
    </section>
  );
}
