import ImageUploading, { ImageListType } from "react-images-uploading";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Navigation } from "../../components/Navigaton";
import { Submit } from "../../components/Submit";
import TextArea from "../../components/TextArea";
import { createNewPostAsyncAction } from "../../store/reducers/myPostsReducer/actions";
import styles from './CreatePost.module.scss'
import Validator, { ValidationError } from "fastest-validator";



const CreatePostValidationSchema = {
  titleText: { type: 'string' },
  description: { type: 'string' },
  text: { type: 'string' }
}


export const check = (schema: Object, data: Object) => {
  const validator = new Validator()
  const compiledValidator = validator.compile(schema)

  return compiledValidator(data)
}





export const CreatePost = () => {
  const [formError, setFormError] = useState<ValidationError[]>([])
  const getThemeSelector = (state: any) => state.theme
  const theme = useSelector(getThemeSelector)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [images, setImages] = useState<ImageListType>([])
  const [published, setPublished] = useState('')

  const onChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const result = check(CreatePostValidationSchema, {
      titleText: e.currentTarget.titleText.value,
      descriotion: e.currentTarget.description.value,
      text: e.currentTarget.text.value
    })

    if (result === true) {
      const formData = new FormData(e.currentTarget)
      formData.append('title', e.currentTarget.titleText.value)
      formData.append('image', images[0].file || 'testFileName')
      dispatch(createNewPostAsyncAction(formData))
      setPublished('Post published')
    } else { setFormError(result as ValidationError[]) }
  }

  const goHome = () => navigate('/')
  const handleDelete = (e: any) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className={styles.nav}>
        <a href="#!" style={theme} className={styles.link} onClick={goHome}>Home</a>
        <p className={styles.post_name}>Add post</p>
      </div>
      <Navigation className={styles.navigation} text={"Add post"} backToHome={""} />

      <form className={styles.formwrapper} onSubmit={handleSubmit}>
        <Input type={"text"} label={"Title"} placeholder={"Title"} name={"titleText"} />
        {formError.map(err => (
          <span key={err.field} className={styles.errors}>{err.field === 'titleText' ? err.message : ''}</span>
        ))}
        <div className={styles.input_container}>
          <Input className={styles.lesson_input} type={"text"} label={"Lesson number"} placeholder={"20"} name={"lesson_num"} />
          <ImageUploading value={images} onChange={onChange}>
            {({ imageList, onImageUpload, onImageRemove }) => (
              <div className={styles.container}>
                <span className={styles.text}>Image</span>
                <input className={styles.image_input} type="button" onClick={onImageUpload} value="Upload Image" />
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img className={styles.image} src={image.dataURL} alt="" />
                    <div className={styles.imageRemoveWrapper}>
                      <button className={styles.imageRemove} onClick={() => onImageRemove(index)}>remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <TextArea label={"Description"} placeholder={"Description"} name={"description"} />
        {formError.map(err => (
          <span key={err.field} className={styles.errors}>{err.field === 'description' ? err.message : ''}</span>
        ))}
        <TextArea className={styles.textarea} label={"Text"} name={'text'} placeholder={"Add your text"} />
        {formError.map(err => (
          <span key={err.field} className={styles.errors}>{err.field === 'text' ? err.message : ''}</span>
        ))}
        <span>{published}</span>
        <div className={styles.buttons_container}>
          <input onClick={handleDelete} className={styles.delete_button} type="button" value="Delete post" />
          <div className={styles.container}>
            <input className={styles.reset_button} type="reset" value="Cancel" />

            <Submit value={"Add post"} />
          </div>
        </div>
      </form>
    </div>
  )
}