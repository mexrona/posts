import React from "react";
import * as SC from "./styles";

export const Arrow = ({isLeft = false, ...rest}) =>
    isLeft ? (
        <SC.Arrow style={{transform: "rotate(-135deg)"}} {...rest} />
    ) : (
        <SC.Arrow {...rest} />
    );
