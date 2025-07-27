import AboutCourseSection from "@/components/section/AboutCourseSection";
import CourseInfoSection from "@/components/section/CourseInfoSection";
import CourseInstructorSection from "@/components/section/CourseInstructorSection";
import FeatureExplanationsSection from "@/components/section/FeatureExplanationsSection";
import FeaturesSection from "@/components/section/FeaturesSection";
import PointersSection from "@/components/section/PointersSection";
import StickyChecklistSection from "@/components/section/StickyChecklistSection";
import {
  AboutValue,
  CourseData,
  CourseResponse,
  FeatureExplanationValue,
  FeatureValue,
  InstructorValue,
  PointerValue,
} from "@/types";
import { notFound } from "next/navigation";

const getCourseDetailsData = async (): Promise<CourseData> => {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  const json: CourseResponse = await res.json();
  return json.data;
};

export default async function Home() {
  const data: CourseData | void = await getCourseDetailsData().catch(
    (error) => {
      console.error("Error fetching course data:", error);
      notFound();
    }
  );
  if (!data) {
    return <div>Error loading course data</div>;
  }
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
          {data.sections.map((section) =>
            section.type === "instructors" ? (
              <CourseInstructorSection
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as InstructorValue[]}
              />
            ) : section.type === "features" ? (
              <FeaturesSection
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as FeatureValue[]}
              />
            ) : section.type === "pointers" ? (
              <PointersSection
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as PointerValue[]}
              />
            ) : section.type === "about" ? (
              <AboutCourseSection
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as AboutValue[]}
              />
            ) : section.type === "feature_explanations" ? (
              <FeatureExplanationsSection
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as FeatureExplanationValue[]}
              />
            ) : (
              <></>
            )
          )}
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
