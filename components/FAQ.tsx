"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function FAQ() {

  const imageAnim = useInViewAnimation();
  const titleAnim = useInViewAnimation();
  const faq1Anim = useInViewAnimation();
  const faq2Anim = useInViewAnimation();
  const faq3Anim = useInViewAnimation();

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
            src="/images/faq.png"
            alt="FAQ visual"
            className="flash-reveal h-full w-full object-cover rounded-xl"
          />
        </div>

        {/* RIGHT FAQ */}
        <div>

          <h2
            ref={titleAnim.ref}
            className={`text-4xl font-medium mb-8 ${
              titleAnim.isVisible ? "slide-up delay-1" : "animate-hidden"
            }`}
          >
            FAQ
          </h2>

          <div className="space-y-4">

            <details
              ref={faq1Anim.ref}
              className={`border rounded-lg p-5 cursor-pointer ${
                faq1Anim.isVisible ? "slide-up delay-2" : "animate-hidden"
              }`}
            >
              <summary className="font-medium">
                In-person or virtual?
              </summary>
              <p className="text-sm mt-3 leading-relaxed">
                Both. In-person in Santa Monica and telehealth across California.
              </p>
            </details>

            <details
              ref={faq2Anim.ref}
              className={`border rounded-lg p-5 cursor-pointer ${
                faq2Anim.isVisible ? "slide-up delay-3" : "animate-hidden"
              }`}
            >
              <summary className="font-medium">
                Who do you work with?
              </summary>
              <p className="text-sm mt-3 leading-relaxed">
                Adults experiencing anxiety, trauma, burnout, perfectionism, and stress.
              </p>
            </details>

            <details
              ref={faq3Anim.ref}
              className={`border rounded-lg p-5 cursor-pointer ${
                faq3Anim.isVisible ? "slide-up delay-4" : "animate-hidden"
              }`}
            >
              <summary className="font-medium">
                What is your therapy style?
              </summary>
              <p className="text-sm mt-3 leading-relaxed">
                Collaborative, structured, and insight-oriented.
              </p>
            </details>

          </div>

        </div>

      </div>
    </section>
  );
}
