import styled from "styled-components";

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: fit-content;
    margin: 15px auto;
`;

export const PaginationNumberActive = styled.a`
    cursor: default;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 3px;
`;

export const PaginationNumber = styled.a`
    cursor: pointer;
`;
