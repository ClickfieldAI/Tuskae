import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryGrid } from "@/components/shared/gallery-grid";
import { AppointmentCta } from "@/components/sections/appointment-cta";
import { galleryItems, facilityGalleryItems } from "@/lib/data/gallery";
import { clinicImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look inside Tuskaè — our reception, kids' area, treatment rooms, equipment, private consultation room, and the team behind every gentle smile.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinic Gallery"
        title="A space designed to feel nothing like a dental clinic"
        description="Bright interiors, a dedicated kids' corner, and modern equipment — take a look around."
        image={clinicImages.treatmentRoom}
      />

      <section className="py-24 sm:py-32">
        <div className="container-wide">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-wide">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[var(--turquoise-dark)]">
              Inside Our Clinic
            </span>
            <h2 className="text-balance font-heading text-4xl font-medium text-[var(--ink)] sm:text-5xl">
              A closer look at our facility
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--ink-muted)]">
              From reception to our treatment rooms and Dr. Malavika&rsquo;s private consultation room for myofunctional
              therapy and infant feeding guidance.
            </p>
          </div>
          <GalleryGrid items={facilityGalleryItems} />
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
