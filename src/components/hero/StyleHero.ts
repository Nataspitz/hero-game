import styled from "styled-components";
import hero from "../../Assets/HERO.png";

export const StyleHero = styled.div`

@keyframes hero-animation {
        from {
                background-position-x: 0;
        }
        to{
                background-position-x: -192px;
        }
}

   background-image: url(${hero});
   background-repeat: no-repeat;
   width: var(--tile-size);
   height: 100px;
   animation: hero-animation 1s  infinite steps(4);
   position: absolute;
   bottom: 0;
   left: 0;
`
