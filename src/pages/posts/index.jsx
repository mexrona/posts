import React from "react";
import {useSelector} from "react-redux";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";
import {Posts} from "../../components/Posts";

export const PostsPage = () => {
    const posts = useSelector((state) => state.posts.list);

    return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={posts} />
        </Container>
    );
};
