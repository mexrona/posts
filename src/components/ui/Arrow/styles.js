import styled from "styled-components";

export const Arrow = styled.button`
    display: block;
    width: 10px;
    height: 10px;
    padding: 0;
    border: none;
    border-top: 2px solid black;
    border-right: 2px solid black;
    cursor: pointer;
    transform: rotate(45deg);

    &:disabled {
        cursor: default;
        opacity: 0.5;
    }
`;
