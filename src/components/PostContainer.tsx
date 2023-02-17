import React from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {

    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();


    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }

    const handlRemove = async (post: IPost) => {
        deletePost(post);
    }

    const handleUpdate = async (post: IPost) => {
        updatePost(post);
    }

    return(
        <div>
            <div className='post__list'>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идёт загрузка</h1>}
                {error && <h1>Произошла ошибка при загрузке постов</h1>}
                {posts && posts.map(post => 
                    <PostItem remove={handlRemove} update={handleUpdate} key={post.id} post={post} />
                    )}
            </div>
        </div>
    );
}

export default PostContainer;