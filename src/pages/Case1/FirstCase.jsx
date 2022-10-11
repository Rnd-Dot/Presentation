import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostApi from '../../API/PostAPI';
import PostFilter from '../../components/PostFilter';
import PostForm from '../../components/PostForm';
import PostList from '../../components/PostList';
import useFetching from '../../hooks/useFetching';
import { usePosts } from '../../hooks/usePosts';
import MyButton from '../../UI/button/MyBotton';
import Loader from '../../UI/loader/loader';
import MyModal from '../../UI/modal/MyModal';
import MyPagination from '../../UI/pagination/MyPagination';
import { pages } from '../../utils/pages';
import style from './FirstCase.module.css'

const FirstCase = () => {
    const [posts, setPost] = useState([])
    const [totalPage, setTotalPage] = useState(0)

    const [page, setPage] = useState(1)
    const [limit] = useState(10)
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    
    const [ fetchPosts, isLoadingPost, errorPost] = useFetching(async() => {
        const response = await PostApi.getAll(limit, page)
        setPost(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPage(pages(totalCount, limit))
    })

    //Мемоизация с фильтром и поиском
    const searchAndSortedPost = usePosts(posts, filter.sort, filter.query)

    useEffect (() => {
        fetchPosts()
    }, [page])
    
    //Добавление поста
    const createPost = (newPost) => {
        setPost([...posts, newPost])
        setModal(false)
    }

    //Удаление поста
    const removePost = (post) => {
        setPost(posts.filter(p=> p.id !== post.id))
    }

   
    return (
        <div className={style.wrapper_case1}>
            <div >
                <div style={{marginTop: '20px'}}>
                    <Link to='/home'>Вернуться на главную</Link>
                </div>
                <div style={{marginTop: '20px'}}>
                    <MyButton onClick={()=> setModal(true)}>Создать пост</MyButton>
                </div>
                <div style={{marginTop: '20px'}}>
                    <PostFilter filter={filter} setFilter={setFilter}/>
                </div>
                <div style={{marginTop: '20px'}}>
                    <MyPagination count={totalPage}
                        page={page}
                        setPage={setPage}
                    />
                </div>
                
                
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                
                
            </div>
            {errorPost &&
                <h1>Произошла ошибка</h1>
            }
            {isLoadingPost
                ? <Loader/>
                : <PostList remove={removePost} posts={searchAndSortedPost} title="Посты"/>
            }
        </div>
    )
}

export default FirstCase;