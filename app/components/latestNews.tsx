import Link from "next/link";

const posts = [
  {
    date: "7 / 3 / 26",
    title: "How a Single Pressure Wash Transformed This Maryland Home",
    href: "/blog/how-a-single-pressure-wash-transformed-this-maryland-home",
  },
  {
    date: "6 / 30 / 26",
    title: "Soft Wash vs. Pressure Wash: Which One Does Your Home Actually Need?",
    href: "/blog/soft-wash-vs-pressure-wash",
  },
  {
    date: "6 / 28 / 26",
    title: "How Often Should You Have Your Home Exterior Professionally Cleaned?",
    href: "/blog/how-often-should-you-have-your-home-exterior-cleaned",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-[#F7A8A8] py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-[#181818] mb-10">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.href} className="border-t border-[#181818] pt-6">
              <p className="text-sm text-[#181818] mb-2">{post.date}</p>
              <Link
                href={post.href}
                className="text-[#181818] font-semibold hover:underline"
              >
                {post.title} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-[#181818] font-bold border-b-2 border-[#181818] pb-1 hover:opacity-70 transition-opacity"
          >
            All News
          </Link>
        </div>
      </div>
    </section>
  );
}