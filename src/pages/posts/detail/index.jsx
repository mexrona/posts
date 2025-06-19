import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Typo} from "../../../components/Typo";
import {Container} from "../../../components/Container";
import {Link} from "../../../components/Link";
import {showPost, getPostById} from "../../../redux/slices/postsSlice";
import * as SC from "./styles";

export const DetailPostPage = () => {
    const {id} = useParams();
    const {list} = useSelector((state) => state.posts.posts);
    const postForView = useSelector((state) => state.posts.postForView);
    const dispatch = useDispatch();

    useEffect(() => {
        const intId = Number(id);
        const findedPosts = list
            ? list.find((item) => item.id === intId)
            : undefined;

        if (findedPosts) {
            dispatch(showPost(findedPosts));
        } else {
            dispatch(getPostById(intId));
        }
    }, [id, list, dispatch]);

    if (postForView.loading) {
        return <Container>Loading...</Container>;
    }

    if (!postForView.post || !postForView.post.hasOwnProperty("id")) {
        return <>Пост не найден</>;
    }

    const {post} = postForView;

    const image =
        post.image ||
        "https://i.artfile.ru/1600x1200_353220_[www.ArtFile.ru].jpg";

    return (
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{clear: "both"}} />
            <SC.LinkWrapper>
                <Link to="/posts/">Обратно к публикациям</Link>
                <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
            </SC.LinkWrapper>
        </Container>
    );
};
