import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    margin: 15px auto 0;
`;

export const MenuItem = styled(NavLink)`
    font-size: 16px;
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }

    &.active {
        color: darkred;
    }
`;
