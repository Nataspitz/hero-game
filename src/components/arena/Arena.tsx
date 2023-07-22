import arena from"../../Assets/tileset.gif"
import { Hero } from "../hero/Hero"
import { StyleArenaContainer } from "./StyleArenaContainer"

export function Arena() {
    return(
        <StyleArenaContainer> 
           <Hero />
            <div className="containerIMG">
                <img src={arena} alt="Game map" />
            </div>
        </StyleArenaContainer>
    )
}