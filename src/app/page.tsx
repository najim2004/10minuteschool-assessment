import AboutCourse, { AboutValue } from "@/components/about-course";
import CourseInfo from "@/components/course-info";
import CourseInstructor, {
  InstructorValue,
} from "@/components/course-instructor";
import FeatureExplanations, {
  FeatureExplanationValue,
} from "@/components/feature-explanations";
import Features, { FeatureValue } from "@/components/features";
import Pointers, { PointerValue } from "@/components/pointers";
import StickyChecklist from "@/components/sticky-checklist";

// ==========================
// Types
// ==========================
interface CourseResponse {
  code: number;
  data: CourseData;
  error: ErrorItem[]; // Define a specific type instead of any[]
  message: string;
  payload: PayloadItem[]; // Define a specific type instead of any[]
  status_code: number;
}

interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: {
    cat_id: number;
    course_id: number;
    platform: string;
    skills_cat_id: number;
    slug: string;
  };
  start_at: string;
  media: Media[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: {
    name: string;
    value: string;
  };
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: SecondaryCtaItem[]; // Define a specific type instead of any[]
  delivery_method: string;
}

interface ErrorItem {
  // Placeholder interface; update based on actual error structure if known
  code?: string;
  message?: string;
}

interface PayloadItem {
  // Placeholder interface; update based on actual payload structure if known
  id?: string;
  value?: string;
}

interface SecondaryCtaItem {
  // Placeholder interface; update based on actual secondary_cta_group structure if known
  name?: string;
  value?: string;
}

interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface Seo {
  defaultMeta: Meta[];
  description: string;
  keywords: string[];
  schema: Schema[];
  title: string;
}

interface Meta {
  content: string;
  type: string;
  value: string;
}

interface Schema {
  meta_name: string;
  meta_value: string;
  type: string;
}

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

interface SectionValue {
  id?: string;
  title?: string;
  description?: string;
  icon?: string;
  subtitle?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  text?: string;
  has_instructor_page?: boolean;
  image?: string;
  name?: string;
  short_description?: string;
  slug?: string;
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  checklist?: string[];
  background?: {
    image?: string;
    primary_color?: string;
    secondary_color?: string;
  };
  cta?: {
    clicked_url?: string;
    color?: string;
    text?: string;
  };
  description_color?: string;
  title_color?: string;
  top_left_icon_img?: string;
  thumbnail?: string;
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  answer?: string;
  question?: string;
}

// ==========================
// Fetch Function
// ==========================
const getCourseDetailsData = async (): Promise<CourseData> => {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: {
        revalidate: 60, // ISR every 60 seconds
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  const json: CourseResponse = await res.json();
  return json.data;
};

// ==========================
// Page Component
// ==========================
export default async function Home() {
  const data: CourseData | void = await getCourseDetailsData().catch(
    (error) => {
      console.error("Error fetching course data:", error);
    }
  );
  if (!data) {
    return <div>Error loading course data</div>;
  }
  return (
    <div>
      <CourseInfo
        title={data.title}
        description={data.description}
        checklistData={data.checklist}
        cta_text={data.cta_text}
      />
      <main className="max-w-[1200px] mx-auto p-4 flex flex-col gap-4 md:flex-row md:gap-12">
        <section className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          {data.sections.map((section) =>
            section.type === "instructors" ? (
              <CourseInstructor
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as InstructorValue[]}
              />
            ) : section.type === "features" ? (
              <Features
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as FeatureValue[]}
              />
            ) : section.type === "pointers" ? (
              <Pointers
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as PointerValue[]}
              />
            ) : section.type === "about" ? (
              <AboutCourse
                key={section.type}
                type={section.type}
                name={section.name}
                description={section.description}
                bg_color={section.bg_color}
                order_idx={section.order_idx}
                values={section.values as AboutValue[]}
              />
            ) : section.type === "feature_explanations" ? (
              <FeatureExplanations
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
          <StickyChecklist
            checklistData={data.checklist}
            cta_text={data.cta_text}
          />
        </section>
      </main>
    </div>
  );
}
