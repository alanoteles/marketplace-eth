import {Curriculum, CourseHero, Keypoints} from "@components/course";
import { Modal } from "@components/common"


export default function Page() {

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <CourseHero />
      <Keypoints />
      <Curriculum />
      <Modal />
    </div>
  )
}