import React from "react";
import * as SC from "./styles";

export const Modal = ({children}) => (
    <SC.ModalWrapper>
        <SC.Modal>
            <SC.ModalText>{children}</SC.ModalText>
        </SC.Modal>
    </SC.ModalWrapper>
);
