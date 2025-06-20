import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Container} from "../../components/ui/Container";
import {Typo} from "../../components/ui/Typo";
import {Form} from "../../components/ui/Form";
import {Field} from "../../components/ui/Field";
import {Input} from "../../components/ui/Input/styles";
import {Modal} from "../../components/ui/Modal";
import {Button} from "../../components/ui/Button";

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });
    const [modalText, setModalText] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        try {
            const users = JSON.parse(localStorage.getItem("users"));
            const userId = Date.now();
            const newUser = {id: userId, ...formValues};

            if (!users) {
                localStorage.setItem("users", JSON.stringify([newUser]));
                setModalText("Вы успешно зарегистрировались");
                return;
            }

            if (users.find((user) => user.email === formValues.email)) {
                setModalText("Пользователь с таким email уже существует");
                return;
            }

            users.push(newUser);

            localStorage.setItem("users", JSON.stringify(users));
            setModalText("Вы успешно зарегистрировались");
        } catch (e) {
            console.log(e);
        }
    };

    const onClickOk = (modalText) => {
        const currentText = modalText;

        setModalText("");

        if (currentText !== "Пользователь с таким email уже существует") {
            navigate("/auth");
        }
    };

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    };

    const disabled = !formValues.email || !formValues.password;

    return (
        <Container>
            {modalText && (
                <Modal>
                    {modalText}
                    <br />
                    <Button onClick={() => onClickOk(modalText)}>Ок</Button>
                </Modal>
            )}
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text"
                        name="name"
                        value={formValues.name}
                        placeholder="Имя"
                        onChange={(e) =>
                            onChange(e.target.name, e.target.value)
                        }
                    />
                </Field>
                <Field>
                    <Input
                        type="text"
                        name="surname"
                        value={formValues.surname}
                        placeholder="Фамилия"
                        onChange={(e) =>
                            onChange(e.target.name, e.target.value)
                        }
                    />
                </Field>
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
                    Регистрация
                </Button>
            </Form>
        </Container>
    );
};
