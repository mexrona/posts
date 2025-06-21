import React from "react";
import {Search} from "../Search";
import {Sort} from "../Sort";
import * as SC from "./styles";

export const Filter = ({
    activePostPage,
    setActivePostPage,
    setSearchValue,
    setSortValue,
}) => (
    <SC.Filter>
        <Search
            activePostPage={activePostPage}
            setActivePostPage={setActivePostPage}
            setSearchValue={setSearchValue}
        />
        <Sort setSortValue={setSortValue} />
    </SC.Filter>
);
