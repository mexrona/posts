import React, {useState} from "react";
import * as SC from "./styles";
import {Container} from "../../../../components/ui/Container";
import {Typo} from "../../../../components/ui/Typo";
import {Form} from "../../../../components/ui/Form";
import {Field} from "../../../../components/ui/Field";
import {Input} from "../../../../components/ui/Input/styles";

const DEFAULT_VALUES = {title: "", body: ""};

export const PostForm = ({title, onSubmitForm, defaultValues}) => {
    const [formValues, setFormValues] = useState(
        defaultValues || DEFAULT_VALUES
    );

    const onChange = (name, value) => {
        setFormValues({...formValues, [name]: value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formValues);
        !defaultValues && setFormValues(DEFAULT_VALUES);
    };

    const disabled = !formValues.title || !formValues.body;

    return (
        <Container>
            <Typo>{title}</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text"
                        name="title"
                        value={formValues.title}
                        placeholder="Заголовок"
                        onChange={(e) =>
                            onChange(e.target.name, e.target.value)
                        }
                    />
                </Field>
                <Field>
                    <SC.Textarea
                        name="body"
                        value={formValues.body}
                        placeholder="Текст"
                        rows={10}
                        cols={30}
                        onChange={(e) =>
                            onChange(e.target.name, e.target.value)
                        }
                    />
                </Field>
                <SC.Button type="submit" disabled={disabled}>
                    Сохранить
                </SC.Button>
            </Form>
        </Container>
    );
};
