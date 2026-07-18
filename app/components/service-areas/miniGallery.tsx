// app/components/service-areas/MiniGallery.tsx
import Image from "next/image";
import Link from "next/link";

interface GalleryPhoto {
  src: string;
  alt: string;
}

interface MiniGalleryProps {
  photos: GalleryPhoto[];
}

export default function MiniGallery({ photos }: MiniGalleryProps) {
  return (
    <section className="bg-[#FAFAFA] py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#181818] mb-2">
          Our Work in the Area
        </h2>
        <div className="w-16 h-1 bg-[#E63946] mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative h-48 overflow-hidden group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/gallery"
            className="text-[#181818] font-bold underline underline-offset-4 hover:text-[#E63946] transition-colors"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}