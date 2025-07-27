import {
  AboutValue,
  CourseData,
  FeatureExplanationValue,
  FeatureValue,
  InstructorValue,
  PointerValue,
} from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import AboutCourseSection from "@/components/section/AboutCourseSection";
import CourseInfoSection from "@/components/section/CourseInfoSection";
import CourseInstructorSection from "@/components/section/CourseInstructorSection";
import FeatureExplanationsSection from "@/components/section/FeatureExplanationsSection";
import FeaturesSection from "@/components/section/FeaturesSection";
import PointersSection from "@/components/section/PointersSection";
import StickyChecklistSection from "@/components/section/StickyChecklistSection";

async function getCourseDetailsData(): Promise<CourseData> {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch course data");

  const json = await res.json();
  return json.data;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await getCourseDetailsData();

    return {
      title: data.seo?.title || data.title,
      description: data.seo?.description || data.description,
      keywords: data.seo?.keywords || [],
      alternates: {
        canonical: `https://10minuteschool.com/${data?.slug || "ielts-course"}`,
      },
      openGraph: {
        title: data.seo?.title,
        description: data.seo?.description,
        url: `https://10minuteschool.com/${data?.slug || "ielts-course"}`,
        images: [
          {
            url:
              data.media[0].thumbnail_url ??
              data.media[0].resource_value ??
              "https://10minuteschool.com/default-og.jpg",
          },
        ],
      },
    };
  } catch {
    return {
      title: "IELTS Course - 10 Minute School",
      description:
        "Join the best IELTS course in Bangladesh by 10 Minute School.",
    };
  }
}

export default async function CoursePage() {
  const data = await getCourseDetailsData().catch((err) => {
    console.error("Course fetch failed:", err);
    notFound();
  });

  if (!data) return null;

  return (
    <div>
      <CourseInfoSection
        title={data.title}
        description={data.description}
        checklistData={data.checklist}
        cta_text={data.cta_text}
        media={data.media}
      />

      <main className="max-w-[1200px] mx-auto p-4 flex flex-col gap-4 md:flex-row md:gap-12">
        <section className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          {data.sections.map((section) => {
            switch (section.type) {
              case "instructors":
                return (
                  <CourseInstructorSection
                    key={section.type}
                    {...section}
                    values={section.values as InstructorValue[]}
                  />
                );
              case "features":
                return (
                  <FeaturesSection
                    key={section.type}
                    {...section}
                    values={section.values as FeatureValue[]}
                  />
                );
              case "pointers":
                return (
                  <PointersSection
                    key={section.type}
                    {...section}
                    values={section.values as PointerValue[]}
                  />
                );
              case "about":
                return (
                  <AboutCourseSection
                    key={section.type}
                    {...section}
                    values={section.values as AboutValue[]}
                  />
                );
              case "feature_explanations":
                return (
                  <FeatureExplanationsSection
                    key={section.type}
                    {...section}
                    values={section.values as FeatureExplanationValue[]}
                  />
                );
              default:
                return null;
            }
          })}
        </section>

        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-1 bg-white">
          <StickyChecklistSection
            checklistData={data.checklist}
            cta_text={data.cta_text}
          />
        </section>
      </main>
    </div>
  );
}
