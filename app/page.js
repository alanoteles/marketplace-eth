import { Hero } from "@components/common";
import { CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { getAllCourses } from "@content/courses/fetcher";
// import type { GetStaticProps } from "next"

export default function Home({courses}) {
  const staticData = getAllCourses().data

  return (
      <BaseLayout>
        <Hero />
        { JSON.stringify(staticData) }
        <CourseList />
      </BaseLayout>
  )
}