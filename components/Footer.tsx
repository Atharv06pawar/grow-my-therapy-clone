"use client";

import Link from "next/link";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export default function Footer() {

  const topAnim = useInViewAnimation();
  const col1Anim = useInViewAnimation();
  const col2Anim = useInViewAnimation();
  const col3Anim = useInViewAnimation();

  const bottomAnim = useInViewAnimation();
  const bottomLinksAnim = useInViewAnimation();
  const creditAnim = useInViewAnimation();
  const copyAnim = useInViewAnimation();

  return (
    <footer>

      {/* TOP FOOTER */}
      <div
        ref={topAnim.ref}
        className="py-20 bg-black text-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-sm">

          {/* COLUMN 1 */}
          <div
            ref={col1Anim.ref}
            className={col1Anim.isVisible ? "slide-up delay-1" : "animate-hidden"}
          >
            <h3 className="font-medium mb-4">Lilac Template</h3>
            <p className="leading-relaxed text-white/80">
              123th Street 45 W<br />
              Santa Monica, CA<br /><br />
              email@example.com<br />
              (555) 555-5555
            </p>
          </div>

          {/* COLUMN 2 */}
          <div
            ref={col2Anim.ref}
            className={col2Anim.isVisible ? "slide-up delay-2" : "animate-hidden"}
          >
            <h3 className="font-medium mb-4">Hours</h3>
            <p className="leading-relaxed text-white/80">
              Monday – Friday<br />
              10am – 6pm
            </p>
          </div>

          {/* COLUMN 3 */}
          <ul
            ref={col3Anim.ref}
            className={`space-y-2 ${
              col3Anim.isVisible ? "slide-up delay-3" : "animate-hidden"
            }`}
          >
            <li>
              <Link href="/" className="text-white hover:text-white/70 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/contact" className="text-white hover:text-white/70 transition">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/blog" className="text-white hover:text-white/70 transition">
                Blog
              </Link>
            </li>
          </ul>

        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div
        ref={bottomAnim.ref}
        className="border-t border-black/10 py-10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center text-xs space-y-4">

          <div
            ref={bottomLinksAnim.ref}
            className={`flex flex-wrap justify-center gap-6 ${
              bottomLinksAnim.isVisible ? "slide-up delay-2" : "animate-hidden"
            }`}
          >
            <span className="underline underline-offset-4">Privacy & Cookies Policy</span>
            <span className="underline underline-offset-4">Good Faith Estimate</span>
            <span className="underline underline-offset-4">Website Terms & Conditions</span>
            <span className="underline underline-offset-4">Disclaimer</span>
          </div>

          <p
            ref={creditAnim.ref}
            className={creditAnim.isVisible ? "slide-up delay-3" : "animate-hidden"}
          >
            Website Template Credits: SETH(lilac template)
          </p>

          <p
            ref={copyAnim.ref}
            className={copyAnim.isVisible ? "slide-up delay-4" : "animate-hidden"}
          >
            All Rights Reserved © 2024 Dr. Maya Reynolds
          </p>

        </div>
      </div>

    </footer>
  );
}
