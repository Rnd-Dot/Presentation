import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostApi from '../../API/PostAPI';
import PostList from '../../components/PostList';
import useFetching from '../../hooks/useFetching';
import MyButton from '../../UI/button/MyBotton';
import Loader from '../../UI/loader/loader';

const SecondCase = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)
    const limit = 10
    const observer = useRef()
    const childRef = useRef()

    const navigation = useNavigate()

    const [ fetchPosts, isLoadingPost, errorPost] = useFetching(async() => {
        const response = await PostApi.getAll(limit, page)
        setPosts([...posts, ...response.data])
    })

    useEffect (() => {
        fetchPosts()
    }, [page])

    useEffect (() => {
        var callback = function(entries, observer) {
            if(entries[0].isIntersecting) {
                setPage(prev => prev + 1)
            }
            
        };
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(childRef.current)
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }
    

    return (
        <div className='wrapper__dinamic'>
            <MyButton onClick={() => navigation(-1)} >Назад</MyButton>
            {errorPost &&
                <h1>Произошла ошибка</h1>
            }
            {isLoadingPost &&
                 <Loader />
            }    
            <PostList remove={removePost} posts={posts} title='Посты с динамической загрукой'/>           
            <div ref={childRef}></div>
        </div>   
    )
}

export default SecondCase;