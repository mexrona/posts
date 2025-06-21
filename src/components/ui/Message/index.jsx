import React from "react";
import * as SC from "./styles";

export const Message = ({children, ...rest}) => (
    <SC.Message {...rest}>{children}</SC.Message>
);
