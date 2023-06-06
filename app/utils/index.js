import {getAllCourses} from "@content/courses/fetcher";

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}