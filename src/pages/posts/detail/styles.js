import styled from "styled-components";
import {Link} from "react-router-dom";

export const Image = styled.img`
    max-width: 200px;
    float: left;
    margin-right: 15px;
`;

export const Text = styled.div`
    font-size: 15px;
`;

export const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    text-align: center;
    margin: 15px 0 0 0;
`;

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

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    z-index: 1;
`;

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: black;
    border: 1px solid white;
    padding: 15px;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 15px;
`;

export const ModalText = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
