"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function GetInTouch() {

  const titleAnim = useInViewAnimation();
  const textAnim = useInViewAnimation();
  const linkAnim = useInViewAnimation();
  const imageAnim = useInViewAnimation();

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>

          <h2
            ref={titleAnim.ref}
            className={`text-4xl font-medium mb-6 ${
              titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
            }`}
          >
            Anxiety, Trauma & Burnout Therapy — Santa Monica
          </h2>

          <p
            ref={textAnim.ref}
            className={`text-lg mb-8 leading-relaxed ${
              textAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
            }`}
          >
            Therapy for thoughtful, high-achieving adults feeling overwhelmed by anxiety, stress, or past experiences.
            <br /><br />
            In-person in Santa Monica and telehealth across California.
          </p>

          <a
            ref={linkAnim.ref}
            className={`inline-flex items-center gap-2 text-sm underline underline-offset-4 cursor-pointer ${
              linkAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
            }`}
          >
            Get in touch →
          </a>

        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageAnim.ref}
          className={`reveal-container delay-4 ${
            imageAnim.isVisible ? " " : "animate-hidden"
          }`}
        >
          <img
            src="/images/getin.png"
            alt="Therapy session visual"
            className="flash-reveal delay-4 h-[420px] w-full object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
