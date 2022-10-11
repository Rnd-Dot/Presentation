import { useMemo } from 'react'

//Хуки с фильтрами

const useSortedPost = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
          }
          return posts
    }, [sort, posts])

    return sortedPost
}

export const usePosts = (posts, sort, query) => {
    const sortedPost = useSortedPost(posts, sort)

    const searchAndSortedPost = useMemo(()=> {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPost])

    return searchAndSortedPost
}