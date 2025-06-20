import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {PostForm} from "../components/PostForm";
import {addPost} from "../../../redux/slices/postsSlice";
import {Modal} from "../../../components/ui/Modal";
import {Button} from "../../../components/ui/Button";
import {useNavigate} from "react-router-dom";

export const AddPostPage = () => {
    const [isAdd, setIsAdd] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitForm = (formValues) => {
        dispatch(addPost(formValues));
        setIsAdd(true);
    };

    const onClickOk = () => {
        setIsAdd(false);
        navigate("/posts");
    };

    return (
        <>
            <PostForm
                title="Добавление нового поста"
                onSubmitForm={onSubmitForm}
            />
            {isAdd && (
                <Modal>
                    Пост успешно добавлен
                    <br />
                    <Button onClick={() => onClickOk()}>Ок</Button>
                </Modal>
            )}
        </>
    );
};
