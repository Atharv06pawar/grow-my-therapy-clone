"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function SubscribeSection() {

  const sectionAnim = useInViewAnimation<HTMLDivElement>();
  const titleAnim = useInViewAnimation<HTMLDivElement>();
  const textAnim = useInViewAnimation<HTMLDivElement>();
  const formAnim = useInViewAnimation<HTMLDivElement>();
  const privacyAnim = useInViewAnimation<HTMLDivElement>();

  return (
    <section
      ref={sectionAnim.ref}
      className="py-24 bg-[#FAF7F2]"
    >
      <div className="max-w-xl mx-auto px-6 text-[#3A4D39]">

        <div
          className={`rounded-2xl p-10 text-center space-y-6 bg-white shadow-sm ${
            sectionAnim.isVisible ? "slide-up" : "animate-hidden"
          }`}
        >

          <h2
            ref={titleAnim.ref}
            className={`text-3xl font-medium ${
              titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
            }`}
          >
            Subscribe
          </h2>

          <p
            ref={textAnim.ref}
            className={`text-sm ${
              textAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
            }`}
          >
            Sign up with your email address to receive news and updates.
          </p>

          <div
            ref={formAnim.ref}
            className={`flex flex-col sm:flex-row gap-4 justify-center ${
              formAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
            }`}
          >

            <input
              className="border border-[#D6E0D8] rounded-full px-5 py-3 flex-1 bg-white"
              placeholder="Email address"
            />

            <button className="border border-[#3A4D39] text-[#3A4D39] rounded-full px-6 py-3 hover:bg-[#3A4D39] hover:text-white transition">
              Sign Up
            </button>

          </div>

          <p
            ref={privacyAnim.ref}
            className={`text-xs opacity-60 ${
              privacyAnim.isVisible ? "slide-up delay-4" : "animate-hidden"
            }`}
          >
            We respect your privacy.
          </p>

        </div>

      </div>
    </section>
  );
}
