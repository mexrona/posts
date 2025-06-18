import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";
import {Posts} from "../../components/Posts";
import {getFreshPosts} from "../../redux/slices/postsSlice";

export const MainPage = () => {
    const dispatch = useDispatch();

    const freshPosts = useSelector((state) => state.posts.freshPosts);
    const postForView = useSelector((state) => state.posts.postForView);

    useEffect(() => {
        dispatch(getFreshPosts());
    }, []);

    return (
        <>
            <Container>
                {freshPosts && (
                    <>
                        <Typo>Свежие публикации</Typo>
                        <Posts posts={freshPosts} />
                    </>
                )}
                {postForView && (
                    <>
                        <Typo>Последний просмотренный пост</Typo>
                        <Posts posts={[postForView]} />
                    </>
                )}
            </Container>
        </>
    );
};
