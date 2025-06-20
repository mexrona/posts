import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {Typo} from "../../../components/ui/Typo";
import {Container} from "../../../components/ui/Container";
import {Link} from "../../../components/ui/Link";
import {Modal} from "../../../components/ui/Modal";
import {Button} from "../../../components/ui/Button";
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
                <Modal setPostForDelete={setPostForDelete}>
                    Вы точно уверены, что хотите удалить публикацию с ID -{" "}
                    {postForDelete.id}?
                    <SC.Wrapper>
                        <Button isRed={true} onClick={() => onDeletePost()}>
                            Да
                        </Button>
                        <Button onClick={() => setPostForDelete(null)}>
                            Нет
                        </Button>
                    </SC.Wrapper>
                </Modal>
            )}
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
            <div style={{clear: "both"}} />
            <SC.Wrapper>
                <Link to="/posts/">Обратно к публикациям</Link>
                {showEditAndDeleteBtn && (
                    <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>
                )}
                {showEditAndDeleteBtn && (
                    <Button isRed={true} onClick={() => setPostForDelete(post)}>
                        Удалить
                    </Button>
                )}
            </SC.Wrapper>
        </Container>
    );
};
