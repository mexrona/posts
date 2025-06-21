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

    const leftDisabled = activePostPage === 1;
    const rightDisabled = activePostPage === postsPageCount;

    return (
        <SC.Pagination>
            <Arrow
                isLeft={true}
                onClick={() => handleLeftArrowClick(activePostPage)}
                disabled={leftDisabled}
            />
            {pagesNumbers.length < 4 &&
                pagesNumbers.map((pageNumber) =>
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
            {Number(activePostPage) === 1 &&
                pagesNumbers.length > 4 &&
                postsPageCount - Number(activePostPage) !== 4 && (
                    <>
                        <SC.PaginationNumberActive>
                            {activePostPage}
                        </SC.PaginationNumberActive>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(Number(activePostPage) + 1)
                            }>
                            {Number(activePostPage) + 1}
                        </SC.PaginationNumber>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(Number(activePostPage) + 2)
                            }>
                            {Number(activePostPage) + 2}
                        </SC.PaginationNumber>
                        <SC.PaginationNumber>...</SC.PaginationNumber>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(
                                    pagesNumbers[pagesNumbers.length - 2]
                                )
                            }>
                            {pagesNumbers[pagesNumbers.length - 2]}
                        </SC.PaginationNumber>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(
                                    pagesNumbers[pagesNumbers.length - 1]
                                )
                            }>
                            {pagesNumbers[pagesNumbers.length - 1]}
                        </SC.PaginationNumber>
                    </>
                )}
            {Number(activePostPage) === 2 &&
                pagesNumbers.length > 4 &&
                postsPageCount - Number(activePostPage) !== 4 && (
                    <>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(Number(activePostPage) - 1)
                            }>
                            {Number(activePostPage) - 1}
                        </SC.PaginationNumber>
                        <SC.PaginationNumberActive>
                            {activePostPage}
                        </SC.PaginationNumberActive>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(Number(activePostPage) + 1)
                            }>
                            {Number(activePostPage) + 1}
                        </SC.PaginationNumber>
                        <SC.PaginationNumber>...</SC.PaginationNumber>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(
                                    pagesNumbers[pagesNumbers.length - 2]
                                )
                            }>
                            {pagesNumbers[pagesNumbers.length - 2]}
                        </SC.PaginationNumber>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(
                                    pagesNumbers[pagesNumbers.length - 1]
                                )
                            }>
                            {pagesNumbers[pagesNumbers.length - 1]}
                        </SC.PaginationNumber>
                    </>
                )}
            {Number(activePostPage) >= 3 &&
                Number(activePostPage) <= pagesNumbers.length - 3 &&
                pagesNumbers.length > 4 &&
                postsPageCount - Number(activePostPage) !== 3 && (
                    <>
                        <SC.PaginationNumber
                            onClick={() => handleNumberClick(1)}>
                            1
                        </SC.PaginationNumber>
                        <SC.PaginationNumber>...</SC.PaginationNumber>
                        <SC.PaginationNumberActive>
                            {activePostPage}
                        </SC.PaginationNumberActive>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(Number(activePostPage) + 1)
                            }>
                            {Number(activePostPage) + 1}
                        </SC.PaginationNumber>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(Number(activePostPage) + 2)
                            }>
                            {Number(activePostPage) + 2}
                        </SC.PaginationNumber>
                        <SC.PaginationNumber>...</SC.PaginationNumber>
                        <SC.PaginationNumber
                            onClick={() =>
                                handleNumberClick(
                                    pagesNumbers[pagesNumbers.length - 1]
                                )
                            }>
                            {pagesNumbers[pagesNumbers.length - 1]}
                        </SC.PaginationNumber>
                    </>
                )}

            {postsPageCount - Number(activePostPage) === 3 && (
                <>
                    <SC.PaginationNumber onClick={() => handleNumberClick(1)}>
                        1
                    </SC.PaginationNumber>
                    <SC.PaginationNumber>...</SC.PaginationNumber>
                    <SC.PaginationNumberActive>
                        {activePostPage}
                    </SC.PaginationNumberActive>
                    <SC.PaginationNumber
                        onClick={() =>
                            handleNumberClick(Number(activePostPage) + 1)
                        }>
                        {Number(activePostPage) + 1}
                    </SC.PaginationNumber>
                    <SC.PaginationNumber
                        onClick={() =>
                            handleNumberClick(Number(activePostPage) + 2)
                        }>
                        {Number(activePostPage) + 2}
                    </SC.PaginationNumber>
                    <SC.PaginationNumber
                        onClick={() =>
                            handleNumberClick(
                                pagesNumbers[pagesNumbers.length - 1]
                            )
                        }>
                        {pagesNumbers[pagesNumbers.length - 1]}
                    </SC.PaginationNumber>
                </>
            )}
            {postsPageCount - Number(activePostPage) === 2 && (
                <>
                    <SC.PaginationNumber onClick={() => handleNumberClick(1)}>
                        1
                    </SC.PaginationNumber>
                    <SC.PaginationNumber onClick={() => handleNumberClick(2)}>
                        2
                    </SC.PaginationNumber>
                    <SC.PaginationNumber>...</SC.PaginationNumber>
                    <SC.PaginationNumberActive>
                        {activePostPage}
                    </SC.PaginationNumberActive>
                    <SC.PaginationNumber
                        onClick={() =>
                            handleNumberClick(Number(activePostPage) + 1)
                        }>
                        {Number(activePostPage) + 1}
                    </SC.PaginationNumber>
                    <SC.PaginationNumber
                        onClick={() =>
                            handleNumberClick(
                                pagesNumbers[pagesNumbers.length - 1]
                            )
                        }>
                        {pagesNumbers[pagesNumbers.length - 1]}
                    </SC.PaginationNumber>
                </>
            )}
            {postsPageCount - Number(activePostPage) === 1 && (
                <>
                    <SC.PaginationNumber onClick={() => handleNumberClick(1)}>
                        1
                    </SC.PaginationNumber>
                    <SC.PaginationNumber onClick={() => handleNumberClick(2)}>
                        2
                    </SC.PaginationNumber>
                    <SC.PaginationNumber onClick={() => handleNumberClick(3)}>
                        3
                    </SC.PaginationNumber>
                    <SC.PaginationNumber>...</SC.PaginationNumber>
                    <SC.PaginationNumberActive>
                        {activePostPage}
                    </SC.PaginationNumberActive>
                    <SC.PaginationNumber
                        onClick={() =>
                            handleNumberClick(
                                pagesNumbers[pagesNumbers.length - 1]
                            )
                        }>
                        {pagesNumbers[pagesNumbers.length - 1]}
                    </SC.PaginationNumber>
                </>
            )}
            {postsPageCount - Number(activePostPage) === 0 && (
                <>
                    <SC.PaginationNumber onClick={() => handleNumberClick(1)}>
                        1
                    </SC.PaginationNumber>
                    <SC.PaginationNumber onClick={() => handleNumberClick(2)}>
                        2
                    </SC.PaginationNumber>
                    <SC.PaginationNumber onClick={() => handleNumberClick(3)}>
                        3
                    </SC.PaginationNumber>
                    <SC.PaginationNumber>...</SC.PaginationNumber>
                    <SC.PaginationNumber
                        onClick={() =>
                            handleNumberClick(Number(activePostPage) - 1)
                        }>
                        {Number(activePostPage) - 1}
                    </SC.PaginationNumber>
                    <SC.PaginationNumberActive>
                        {activePostPage}
                    </SC.PaginationNumberActive>
                </>
            )}
            <Arrow
                onClick={() => handleRightArrowClick(activePostPage)}
                disabled={rightDisabled}
            />
        </SC.Pagination>
    );
};
