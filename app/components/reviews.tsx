import Script from "next/script";

export default function Reviews() {
  return (
    <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-medium text-[#181818] mb-2">
          Every project is a chance to prove ourselves
        </h2>
        <div className="w-24 sm:w-48 md:w-120 lg:w-160 h-2 bg-[#E63946] mx-auto mb-12" />

        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="elfsight-app-623a8749-c7e2-468a-9961-cd0f4139e5c0"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}