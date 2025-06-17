import React from "react";
import * as SC from "./styles";
import {Container} from "../../components/Container";
import {Typo} from "../../components/Typo";
import {Posts} from "../../components/Posts";

const INITIAL_POSTS = [
    {
        id: 1,
        title: "Post 1",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
    },
    {
        id: 2,
        title: "Post 2",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
    },
    {
        id: 3,
        title: "Post 3",
        image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
    },
];

export const MainPage = () => (
    <>
        <Container>
            <Typo>Свежие публикации</Typo>
            <Posts posts={INITIAL_POSTS} />
        </Container>
    </>
);
