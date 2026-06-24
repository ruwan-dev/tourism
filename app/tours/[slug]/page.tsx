import { Metadata } from "next";
import { notFound } from "next/navigation";
import toursData from "@/data/tours.json";
import ClientTourDetail from "./ClientTourDetail";

// Fallback URL Slug function
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

// ------------------------------------------------------------------
// DYNAMIC SEO GENERATION
// ------------------------------------------------------------------
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  // Next.js අලුත් සංස්කරණ සඳහා params අනිවාර්යයෙන්ම await කළ යුතුයි
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug); // URL එක නිවැරදිව කියවීම

  const data = toursData as any;
  const allTours = [
    ...(data.multidayTours || []),
    ...(data.experiences || []),
    ...(data.uniqueExperiences || [])
  ];

  // URL එකේ තියෙන slug එකයි, JSON එකේ තියෙන slug එකයි match කරනවා
  const tour = allTours.find((t: any) => (t.slug || slugify(t.title)) === decodedSlug);

  if (!tour) {
    return {
      title: "Tour Not Found - Sri Lanka Tours",
      description: "The tour you are looking for does not exist."
    };
  }

  return {
    title: tour.seo?.metaTitle || `${tour.title} | Sri Lanka Tours`,
    description: tour.seo?.metaDescription || tour.description,
  };
}

// ------------------------------------------------------------------
// MAIN PAGE COMPONENT
// ------------------------------------------------------------------
export default async function TourPage(
  props: { params: Promise<{ slug: string }> }
) {
  // Next.js අලුත් සංස්කරණ සඳහා params අනිවාර්යයෙන්ම await කළ යුතුයි
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);

  const data = toursData as any;
  
  const allTours = [
    ...(data.multidayTours || []).map((t: any) => ({ ...t, category: "Multi-day Tour" })),
    ...(data.experiences || []).map((t: any) => ({ ...t, category: "Day Experience" })),
    ...(data.uniqueExperiences || []).map((t: any) => ({ ...t, category: "Unique Experience" }))
  ];

  // URL එකේ තියෙන slug එකයි, JSON එකේ තියෙන slug එකයි match කරනවා
  const tour = allTours.find((t: any) => (t.slug || slugify(t.title)) === decodedSlug);

  // Tour එක හොයාගන්න බැරි වුණොත් 404 Error එකට යවනවා
  if (!tour) {
    notFound();
  }

  // හොයාගත්ත Tour එක Client Component එකට යවනවා
  return <ClientTourDetail tour={tour} />;
}