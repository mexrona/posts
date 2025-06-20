import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {Typo} from "../../../components/ui/Typo";
import {Container} from "../../../components/ui/Container";
import {Link} from "../../../components/ui/Link";
import {
    showPost,
    deletePost,
    getPostById,
} from "../../../redux/slices/postsSlice";
import * as SC from "./styles";

export const DetailPostPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {list} = useSelector((state) => state.posts.posts);
    const postForView = useSelector((state) => state.posts.postForView);
    const {user} = useSelector((state) => state.auth);

    const [postForDelete, setPostForDelete] = useState(null);

    const showEditAndDeleteBtn = list && user;

    const onDeletePost = () => {
        setPostForDelete(null);
        dispatch(deletePost(postForDelete));
        navigate("/posts");
    };

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
            {postForDelete && (
                <SC.ModalWrapper>
                    <SC.Modal>
                        <SC.ModalText>
                            Вы точно уверены, что хотите удалить публикацию с ID
                            - {postForDelete.id}?
                        </SC.ModalText>
                        <SC.ModalContent>
                            <SC.DeleteButton onClick={() => onDeletePost()}>
                                Да
                            </SC.DeleteButton>
                            <button onClick={() => setPostForDelete(null)}>
                                Нет
                            </button>
                        </SC.ModalContent>
                    </SC.Modal>
                </SC.ModalWrapper>
            )}
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{clear: "both"}} />
            <SC.LinkWrapper>
                <Link to="/posts/">Обратно к публикациям</Link>
                {showEditAndDeleteBtn && (
                    <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
                )}
                {showEditAndDeleteBtn && (
                    <SC.DeleteButton onClick={() => setPostForDelete(post)}>
                        Удалить
                    </SC.DeleteButton>
                )}
            </SC.LinkWrapper>
        </Container>
    );
};
