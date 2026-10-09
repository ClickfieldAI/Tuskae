import type { GalleryItem } from "@/types/content";
import { galleryPeoplePhotos, facilityGalleryPhotos } from "@/lib/images";

// galleryPeoplePhotos order: [0] WA0130 mom+girl, [1-5] WA0146/0147/0148/0150/0151 happy faces,
// [6] WA0133, [7] IMG_1439 young woman, [8] IMG_2113 toddler garden, [9] IMG_2125 toddler sitting,
// [10] IMG_2151 toddler running, [11] IMG_2594 woman, [12-13] IMG_3475/3478 man,
// [14] WA0047 3 kids in CSK jerseys, [15] WA0027 mom+2boys, [16] WA0028 mom+2boys,
// [17] WA0030 mom+girl, [18-20] WA0000/0001/0002, [21] toddler myofunctional therapy session.
// Dr. Malavika's photo is deliberately excluded from the gallery.
// No stock/placeholder clinic photos are used here — only real client-provided photos.

const peopleAlts = [
  "A family moment at Tuskaè",
  "A cheerful young visitor at Tuskaè",
  "A warm moment at Tuskaè",
  "A bright smile at Tuskaè",
  "All smiles at Tuskaè",
  "A happy young visitor at Tuskaè",
  "A joyful moment at Tuskaè",
  "Siblings all smiles at Tuskaè",
  "All smiles in the garden at Tuskaè",
  "A happy toddler at Tuskaè",
  "A happy young visitor at Tuskaè",
  "A warm smile at Tuskaè",
  "A joyful visitor at Tuskaè",
  "A young visitor all smiles at Tuskaè",
  "Siblings cheering in their CSK jerseys at Tuskaè",
  "A warm family moment at Tuskaè",
  "A bright family moment at Tuskaè",
  "A family moment at Tuskaè",
  "A happy visitor at Tuskaè",
  "A joyful moment at Tuskaè",
  "A bright smile at Tuskaè",
  "A toddler during a myofunctional therapy session at Tuskaè",
];

const peopleCategories = [
  "Happy Faces", "Kids Area", "Happy Faces", "Happy Faces", "Kids Area",
  "Kids Area", "Happy Faces", "Happy Faces", "Kids Area", "Kids Area",
  "Kids Area", "Happy Faces", "Happy Faces", "Kids Area", "Kids Area",
  "Happy Faces", "Happy Faces", "Happy Faces", "Happy Faces", "Happy Faces",
  "Happy Faces", "Treatment Room",
] as const;

export const galleryItems: GalleryItem[] = galleryPeoplePhotos.map((photo, i) => ({
  ...photo,
  alt: peopleAlts[i] ?? "A happy moment at Tuskaè",
  category: peopleCategories[i] ?? "Happy Faces",
}));

// Real photos of the Tuskaè facility — reception, treatment rooms, equipment, and
// Dr. Malavika's private consultation room (used for myofunctional therapy and
// infant feeding guidance sessions) — shown as their own section on the Gallery page.
export const facilityGalleryItems: GalleryItem[] = [
  { ...facilityGalleryPhotos.receptionDesk, alt: "The reception desk at Tuskaè", category: "Reception" },
  { ...facilityGalleryPhotos.treatmentRoom, alt: "A treatment room at Tuskaè", category: "Treatment Room" },
  {
    ...facilityGalleryPhotos.consciousSedationEquipment,
    alt: "Conscious sedation equipment used for anxious or fearful patients",
    category: "Equipment",
  },
  {
    ...facilityGalleryPhotos.uvSterilizationCabinet,
    alt: "UV sterilization cabinet maintaining strict hygiene standards",
    category: "Equipment",
  },
  {
    ...facilityGalleryPhotos.sterilizationUtilityRoom,
    alt: "The sterilization and utility room at Tuskaè",
    category: "Equipment",
  },
  {
    ...facilityGalleryPhotos.consultationRoom1,
    alt: "Dr. Malavika's private consultation room, used for myofunctional therapy and infant feeding guidance",
    category: "Consultation Room",
  },
  {
    ...facilityGalleryPhotos.consultationRoom2,
    alt: "The warm, cozy seating area in the private consultation room",
    category: "Consultation Room",
  },
  {
    ...facilityGalleryPhotos.consultationRoom3,
    alt: "The private consultation room where families discuss their child's care",
    category: "Consultation Room",
  },
];
