import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Posts} from "../../components/Posts";
import {Modal} from "../../components/ui/Modal";
import {Loader} from "../../components/ui/Loader";
import {getPosts} from "../../redux/slices/postsSlice";

export const PostsPage = () => {
    const {list, loading} = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!list) {
            dispatch(getPosts());
        }
    }, [list, dispatch]);

    if (!list && loading) {
        return (
            <Container>
                <Modal>
                    <Loader />
                </Modal>
            </Container>
        );
    }

    if (!list) {
        return <>404</>;
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={list} />
        </Container>
    );
};
