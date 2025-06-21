import React from "react";

export const Sort = ({setSortValue}) => {
    return (
        <select onChange={(e) => setSortValue(e.target.value)}>
            <option value="">По умолчанию</option>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
        </select>
    );
};
