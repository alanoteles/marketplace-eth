import {Curriculum, CourseHero, Keypoints} from "@components/course";
import { Modal } from "@components/common"
import {BaseLayout} from "@components/layout";
import Home from "@app/page";


export default function Page() {

  return (
    <BaseLayout>
      <div className="py-4">
        <CourseHero />
      </div>
      <Keypoints />
      <Curriculum />
      <Modal />
    </BaseLayout>
  )
}