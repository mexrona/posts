import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Posts} from "../../components/Posts";
import {Modal} from "../../components/ui/Modal";
import {Loader} from "../../components/ui/Loader";
import {getFreshPosts} from "../../redux/slices/postsSlice";

export const MainPage = () => {
    const dispatch = useDispatch();

    const {posts, loading} = useSelector((state) => state.posts.freshPosts);
    const {post} = useSelector((state) => state.posts.postForView);

    useEffect(() => {
        if (!posts) {
            dispatch(getFreshPosts());
        }
    }, [dispatch]);

    return (
        <>
            <Container>
                {loading && (
                    <Modal>
                        <Loader />
                    </Modal>
                )}
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
