import React from "react";
import * as SC from "./styles";

export const Button = ({
    children,
    isRed = false,
    isPostFormBtn = false,
    ...rest
}) =>
    (isRed && <SC.DeleteButton {...rest}>{children}</SC.DeleteButton>) ||
    (isPostFormBtn && (
        <SC.PostFormButton {...rest}>{children}</SC.PostFormButton>
    )) || <button {...rest}>{children}</button>;
