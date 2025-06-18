import React from "react";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";
import {Posts} from "../../components/Posts";

export const INITIAL_POSTS = [
    {
        id: 1,
        title: "Post 1",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse, blanditiis eligendi, corporis sed libero quibusdam totam eveniet provident omnis, sapiente debitis facere consectetur tenetur officia aperiam quis delectus fuga.",
    },
    {
        id: 2,
        title: "Post 2",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse, blanditiis eligendi, corporis sed libero quibusdam totam eveniet provident omnis, sapiente debitis facere consectetur tenetur officia aperiam quis delectus fuga.",
    },
    {
        id: 3,
        title: "Post 3",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse, blanditiis eligendi, corporis sed libero quibusdam totam eveniet provident omnis, sapiente debitis facere consectetur tenetur officia aperiam quis delectus fuga.",
    },
    {
        id: 4,
        title: "Post 4",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse, blanditiis eligendi, corporis sed libero quibusdam totam eveniet provident omnis, sapiente debitis facere consectetur tenetur officia aperiam quis delectus fuga.",
    },
    {
        id: 5,
        title: "Post 5",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse, blanditiis eligendi, corporis sed libero quibusdam totam eveniet provident omnis, sapiente debitis facere consectetur tenetur officia aperiam quis delectus fuga.",
    },
];

export const PostsPage = () => (
    <>
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={INITIAL_POSTS} />
        </Container>
    </>
);
