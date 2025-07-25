import AboutCourse from "@/components/about-course";
import CourseInfo from "@/components/course-info";
import CourseInstructor from "@/components/course-instructor";
import FeatureExplanations from "@/components/feature-explanations";
import Features from "@/components/features";
import Pointers from "@/components/pointers";

export default function Home() {
  return (
    <div className="">
      <CourseInfo />
      <main className="max-w-[1200px] mx-auto p-4 flex flex-col gap-4 md:flex-row md:gap-12 ">
        <section className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <CourseInstructor />
          <Features/>
          <Pointers/>
          <AboutCourse/>
          <FeatureExplanations/>
        </section>
        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white">
          {/* <Checklist/> */}
        </section>
      </main>
    </div>
  );
}
