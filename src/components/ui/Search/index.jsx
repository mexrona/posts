import React from "react";
import {Input} from "../Input";
import * as SC from "./styles";

export const Search = ({activePostPage, setActivePostPage, setSearchValue}) => {
    const onKeyUp = (e) => {
        if (activePostPage !== "1") {
            setActivePostPage("1");
        }

        setSearchValue(e.target.value);
    };

    return (
        <SC.Search>
            <Input
                type="text"
                name="search"
                placeholder="Поиск..."
                onKeyUp={(e) => onKeyUp(e)}
            />
        </SC.Search>
    );
};
