"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function ContactHero() {

  const titleAnim = useInViewAnimation<HTMLDivElement>();
  const textAnim = useInViewAnimation<HTMLDivElement>();
  const imageAnim = useInViewAnimation<HTMLDivElement>();
  const noteAnim = useInViewAnimation<HTMLDivElement>();

  return (
    <section className="py-24 bg-[#F8F6F2]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-[#2C2C2C]">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          <h1
            ref={titleAnim.ref}
            className={`text-5xl font-medium ${
              titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
            }`}
          >
            Let’s Connect
          </h1>

          <p
            ref={textAnim.ref}
            className={`text-lg leading-relaxed ${
              textAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
            }`}
          >
            Starting therapy takes courage.
            <br /><br />
            Reach out to ask questions or book a free 15-minute consultation.
          </p>

          {/* IMAGE TEMPLATE */}
          <div
            ref={imageAnim.ref}
            className={`reveal-container ${
              imageAnim.isVisible ? "slide-up delay-3" : "animate-hidden"
            }`}
          >
            <img
              src="/images/connect.jpg"
              alt="Therapy contact visual"
              className="flash-reveal h-full w-full object-cover rounded-xl"
            />
          </div>

        </div>

        {/* RIGHT NOTE BOX */}
        <div className="flex items-center">

          <div
            ref={noteAnim.ref}
            className={`bg-white rounded-2xl p-8 text-sm leading-relaxed shadow-sm ${
              noteAnim.isVisible ? "slide-up delay-4" : "animate-hidden"
            }`}
          >
            <strong>PLEASE NOTE:</strong> If you opt to use a form block on your contact page this is not HIPAA-compliant.
            Instead, you can embed a HIPAA-compliant form, link your client portal, or provide your email address.
          </div>

        </div>

      </div>
    </section>
  );
}
