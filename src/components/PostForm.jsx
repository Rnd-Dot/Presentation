import MyButton from '../UI/button/MyBotton'
import MyInput from '../UI/input/MyInput'
import { useState } from 'react'

const PostForm = ({create}) => {
    const [dataPost, setDataPost] = useState({title: '', body: ''})
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...dataPost, id: Date.now()
        }
        create(newPost)
        setDataPost({title: '', body: ''})
    }

    return (
        <form className='form__modal'>
                <MyInput
                    style={{marginTop: '20px'}}
                    value={dataPost.title}
                    onChange={e => setDataPost({...dataPost, title: e.target.value})}
                    type="text"
                    label={"Название поста"} 
                />
                <MyInput
                    style={{marginTop: '20px'}}
                    value={dataPost.body}
                    onChange={e => setDataPost({...dataPost, body: e.target.value})}
                    type="text"
                    label={"Описание"} 
                />
                <MyButton onClick={addNewPost} style={{marginTop: '20px'}}>Создать пост</MyButton>
            </form>
    )
}

export default PostForm;