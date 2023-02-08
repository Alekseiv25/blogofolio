import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Navigation } from "../../components/Navigaton";
import { Submit } from "../../components/Submit";
import TextArea from "../../components/TextArea";
import styles from './CreatePost.module.scss'

export const CreatePost = () => {
  const getThemeSelector = (state: any) => state.theme
  const theme = useSelector(getThemeSelector)
  const navigate = useNavigate()

  const goHome = () => navigate('/')
  return (

    <div>
      <div className={styles.nav}>
        <a href="#!" style={theme} className={styles.link} onClick={goHome}>Home</a>
        <p className={styles.post_name}>Add post</p>
      </div>
      <Navigation className={styles.navigation} text={"Add post"} backToHome={""} />
      <form className={styles.formwrapper}>
        <Input type={"text"} label={"Title"} placeholder={"Title"} name={"Title"} />
        <div className={styles.input_container}>
          <Input className={styles.lesson_input} type={"text"} label={"Lesson number"} placeholder={"20"} name={"Lesson number"} />
          <Input className={styles.image_input} type={"file"} label={"Image"} placeholder={""} name={"Image"} />
        </div>
        <TextArea label={"Description"} placeholder={"Description"} />
        <TextArea className={styles.textarea} label={"Text"} placeholder={"Add your text"} />
        <div className={styles.buttons_container}>
          <input className={styles.delete_button} type="button" value="Delete post" />
          <div className={styles.container}>
            <input className={styles.reset_button} type="reset" value="Cancel" />
            <Submit value={"Add post"} />
          </div>
        </div>
      </form>
    </div>
  )
};