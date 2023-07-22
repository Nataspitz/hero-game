import { styled } from "styled-components";

export const StyleArenaContainer = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .containerIMG{
        height: 200px;

        img{
            height: var(--game-size);
            width: var(--game-size);
        }
    }
`