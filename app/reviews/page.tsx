import Script from "next/script";

export default function ReviewsPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">

      {/* Header */}
      <section className="bg-[#181818] py-24 px-6 lg:px-16 text-center pt-40">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Reviews
        </h1>
        <div className="w-16 h-1 bg-[#E63946] mx-auto" />
      </section>

      {/* Elfsight Widget */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-24641734-c3de-42a2-bba6-a4a80cb188dd"
            data-elfsight-app-lazy
          />
        </div>
      </section>

    </main>
  );
}