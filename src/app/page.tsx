import CourseInfo from "@/components/course-info";
import CourseInstructor from "@/components/course-instructor";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="">
      <CourseInfo />
      <main className="max-w-[1200px] mx-auto flex flex-col gap-4 md:flex-row md:gap-12 ">
        <section className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <CourseInstructor />
          <Features/>
        </section>
        <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white"></section>
      </main>
    </div>
  );
}
