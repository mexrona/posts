import React from "react";
import * as SC from "./styles";
import {Link} from "../../../ui/Link";

export const Post = ({post}) => {
    const image =
        post.image ||
        "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg";

    return (
        <SC.Post>
            <SC.Image src={image} alt={post.title} />
            <SC.Title>{post.title}</SC.Title>
            <Link to={`/posts/${post.id}`}>Читать далее...</Link>
        </SC.Post>
    );
};
