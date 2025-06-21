import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Posts} from "../../components/Posts";
import {Modal} from "../../components/ui/Modal";
import {Loader} from "../../components/ui/Loader";
import {Pagination} from "../../components/ui/Pagination";
import {getPosts} from "../../redux/slices/postsSlice";

export const PostsPage = () => {
    const {list, loading} = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    const [activePostPage, setActivePostPage] = useState("");

    useEffect(() => {
        if (!list) {
            dispatch(getPosts());
        }

        setActivePostPage("1");
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

    const postsPageCount = Math.ceil(list.length / 10);
    const pagesPosts = [];

    for (let i = 0; i < postsPageCount; i++) {
        let page = [];
        for (let j = i * postsPageCount; j < (i + 1) * postsPageCount; j++) {
            page.push(list[j]);
        }
        pagesPosts.push(page);
    }

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={pagesPosts[Number(activePostPage) - 1]} />
            <Pagination
                setActivePostPage={setActivePostPage}
                postsPageCount={postsPageCount}
                activePostPage={activePostPage}
            />
        </Container>
    );
};
