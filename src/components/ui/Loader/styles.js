import styled from "styled-components";

export const Loader = styled.div`
    height: 15px;
    aspect-ratio: 5;
    display: grid;

    &:before,
    &:after {
        content: "";
        grid-area: 1/1;
        height: inherit;
        --_g: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
        background: var(--_g) left, var(--_g) right;
        background-size: 15px 100%;
        background-repeat: no-repeat;
        animation: l35 1s infinite linear;
    }

    &:after {
        margin-left: auto;
        --s: -1;
    }

    @keyframes l35 {
        0% {
            transform: translateY(calc(var(--s, 1) * 0px));
            aspect-ratio: 2.3;
        }
        33% {
            transform: translateY(calc(var(--s, 1) * 8px));
            aspect-ratio: 2.3;
        }
        66% {
            transform: translateY(calc(var(--s, 1) * 8px));
            aspect-ratio: 3.7;
        }
        100% {
            transform: translateY(calc(var(--s, 1) * 0px));
            aspect-ratio: 3.7;
        }
    }
`;
