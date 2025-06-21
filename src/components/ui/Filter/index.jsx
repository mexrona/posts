import React from "react";
import {Search} from "../Search";
import {Sort} from "../Sort";
import * as SC from "./styles";

export const Filter = ({setSearchValue}) => (
    <SC.Filter>
        <Search setSearchValue={setSearchValue} />
        <Sort />
    </SC.Filter>
);
