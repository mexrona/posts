import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {login} from "../../redux/slices/authSlice";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Form} from "../../components/ui/Form";
import {Input} from "../../components/ui/Input";
import {Field} from "../../components/ui/Field";
import {Button} from "../../components/ui/Button";
import {Modal} from "../../components/ui/Modal";

export const AuthPage = () => {
    const [formValues, setFormValues] = useState({email: "", password: ""});
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        try {
            const users = JSON.parse(localStorage.getItem("users"));

            if (!users) {
                setShowModal(true);
                return;
            }

            const currentUser = users.find(
                (user) =>
                    user.email === formValues.email &&
                    user.password === formValues.password
            );

            if (!currentUser) {
                setShowModal(true);
                return;
            }

            dispatch(login(currentUser));

            navigate("/posts");
        } catch (e) {
            console.log(e);
        }
    };

    const disabled = !formValues.email || !formValues.password;

    return (
        <Container>
            {showModal && (
                <Modal>
                    Данный пользователь не найден в системе
                    <br />
                    <Button onClick={() => setShowModal(false)}>Ок</Button>
                </Modal>
            )}
            <Typo>Страница авторизации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="email"
                        name="email"
                        value={formValues.email}
                        placeholder="Почта"
                        onChange={(e) =>
                            onChange(e.target.name, e.target.value)
                        }
                    />
                </Field>
                <Field>
                    <Input
                        type="password"
                        name="password"
                        value={formValues.password}
                        placeholder="Пароль"
                        onChange={(e) =>
                            onChange(e.target.name, e.target.value)
                        }
                    />
                </Field>
                <Button type="submit" disabled={disabled}>
                    Авторизация
                </Button>
            </Form>
        </Container>
    );
};
