import { Input } from "../../components/Input";
import { Navigation } from "../../components/Navigaton";
import { Submit } from "../../components/Submit";
import TextArea from "../../components/TextArea";
import styles from './CreatePost.module.scss'

export const CreatePost = () => {
  return (
    <div>
      <Navigation text={"Add post"} backToHome={""} />
      <form className={styles.formwrapper}>
        <Input type={"text"} label={"Title"} placeholder={"Title"} name={"Title"} />
        <div>
          <Input type={"text"} label={"Lesson number"} placeholder={"20"} name={"Lesson number"} />
          <Input type={"file"} label={"Image"} placeholder={""} name={"Image"} />
        </div>
        <TextArea label={"Description"} placeholder={"Description"} />
        <TextArea label={"Text"} placeholder={"Add your text"} />
        <div>
          <Submit value="delete post" />
          <div>
            <Submit value="Cancel" />
            <Submit className={styles.submit1} value={"Add post"} />
          </div>
        </div>
      </form>
    </div>
  )
};