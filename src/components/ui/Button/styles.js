import styled from "styled-components";

export const DeleteButton = styled.button`
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    color: black;
    cursor: pointer;

    &:hover {
        background: red;
        color: white;
        border: 1px solid red;
    }
`;

export const PostFormButton = styled.button`
    border: none;
    background: #282c34;
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: #1e2d4b;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;
