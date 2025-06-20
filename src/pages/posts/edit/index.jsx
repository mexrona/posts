import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {PostForm} from "../components/PostForm";
import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../../../redux/slices/postsSlice";
import {Modal} from "../../../components/ui/Modal";
import {Button} from "../../../components/ui/Button";

export const EditPostPage = () => {
    const [isEdit, setIsEdit] = useState(false);
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {list} = useSelector((state) => state.posts.posts);

    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues));
        setIsEdit(true);
    };

    const onClickOk = () => {
        setIsEdit(false);
        navigate(`/posts/${id}`);
    };

    if (!list) {
        return <>Пост не найден</>;
    }

    const findedPost = list.find((item) => item.id === Number(id));

    return (
        <>
            <PostForm
                title={`Редактирование поста - ${id}`}
                onSubmitForm={onSubmitForm}
                defaultValues={findedPost}
            />
            {isEdit && (
                <Modal>
                    Пост успешно отредактирован
                    <br />
                    <Button onClick={() => onClickOk()}>Ок</Button>
                </Modal>
            )}
        </>
    );
};
