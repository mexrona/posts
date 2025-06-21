import React from "react";
import * as SC from "./styles";
import {Arrow} from "../Arrow";

export const Pagination = ({
    setActivePostPage,
    postsPageCount,
    activePostPage,
}) => {
    const pagesNumbers = [];

    for (let i = 1; i <= postsPageCount; i++) {
        pagesNumbers.push(i);
    }

    const handleNumberClick = (number) => {
        setActivePostPage(number);
    };

    const handleLeftArrowClick = (number) => {
        setActivePostPage(Number(number) - 1);
    };

    const handleRightArrowClick = (number) => {
        setActivePostPage(Number(number) + 1);
    };

    const leftDisabled = Number(activePostPage) === 1;
    const rightDisabled = Number(activePostPage) === postsPageCount;

    return (
        <SC.Pagination>
            <Arrow
                isLeft={true}
                onClick={() => handleLeftArrowClick(activePostPage)}
                disabled={leftDisabled}
            />
            {pagesNumbers.map((pageNumber) =>
                pageNumber === Number(activePostPage) ? (
                    <SC.PaginationNumberActive key={pageNumber}>
                        {pageNumber}
                    </SC.PaginationNumberActive>
                ) : (
                    <SC.PaginationNumber
                        onClick={() => handleNumberClick(pageNumber)}
                        key={pageNumber}>
                        {pageNumber}
                    </SC.PaginationNumber>
                )
            )}
            <Arrow
                onClick={() => handleRightArrowClick(activePostPage)}
                disabled={rightDisabled}
            />
        </SC.Pagination>
    );
};
