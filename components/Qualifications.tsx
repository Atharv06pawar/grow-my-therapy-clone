export default function Qualifications() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-medium mb-10 text-center">
          My Professional Background
        </h2>

        {/* DROPDOWNS */}
        <div className="space-y-4">

          <details className="border rounded-lg p-5 cursor-pointer">
            <summary className="font-medium">
              Education
            </summary>
            <p className="text-sm mt-3 leading-relaxed">
              Doctor of Psychology (PsyD)
            </p>
          </details>

          <details className="border rounded-lg p-5 cursor-pointer">
            <summary className="font-medium">
              Licensure
            </summary>
            <p className="text-sm mt-3 leading-relaxed">
              Licensed Clinical Psychologist — California
            </p>
          </details>

          <details className="border rounded-lg p-5 cursor-pointer">
            <summary className="font-medium">
              Certifications
            </summary>
            <p className="text-sm mt-3 leading-relaxed">
              Trained in CBT, EMDR, Mindfulness, and Body-Based Therapy
            </p>
          </details>

        </div>

      </div>
    </section>
  );
}
