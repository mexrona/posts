import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";
import {Posts} from "../../components/Posts";
import {getFreshPosts} from "../../redux/slices/postsSlice";

export const MainPage = () => {
    const dispatch = useDispatch();

    const {posts, loading} = useSelector((state) => state.posts.freshPosts);
    const {post} = useSelector((state) => state.posts.postForView);

    useEffect(() => {
        dispatch(getFreshPosts());
    }, []);

    return (
        <>
            <Container>
                {loading && <>Loading...</>}
                {posts && (
                    <>
                        <Typo>Свежие публикации</Typo>
                        <Posts posts={posts} />
                    </>
                )}
                {post && (
                    <>
                        <Typo>Последний просмотренный пост</Typo>
                        <Posts posts={[post]} />
                    </>
                )}
            </Container>
        </>
    );
};
