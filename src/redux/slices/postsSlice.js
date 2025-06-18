import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
    list: [
        {
            id: 5,
            title: "Post 5",
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
            id: 3,
            title: "Post 3",
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
            id: 1,
            title: "Post 1",
            image: "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo esse, blanditiis eligendi, corporis sed libero quibusdam totam eveniet provident omnis, sapiente debitis facere consectetur tenetur officia aperiam quis delectus fuga.",
        },
    ],
    postForView: null,
    freshPosts: null,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.list = action.payload;
        },
        editPost: (state, action) => {
            // edit post
        },
        getPost: (state, action) => {
            state.postForView = state.list.find(
                (item) => item.id === action.payload
            );
        },
        getFreshPosts: (state) => {
            state.freshPosts = state.list.slice(0, 3);
        },
        addPost: (state, action) => {
            // add new post by data
        },
    },
});

export const {setPosts, editPost, getPost, getFreshPosts, addPost} =
    postsSlice.actions;

export default postsSlice.reducer;
