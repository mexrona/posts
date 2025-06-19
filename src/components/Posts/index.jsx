import React from "react";
import {Post} from "./components/Post";
import * as SC from "./styles";

export const Posts = ({posts}) => (
    <>
        <SC.Posts>
            {posts.length > 0 &&
                posts.map((post) => <Post post={post} key={post.id} />)}
        </SC.Posts>
    </>
);
