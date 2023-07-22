import { Arena } from "./components/arena/Arena"
import { ContainerMain } from "./styles/ContainerMain"
import { GlobalStyles } from "./styles/GlobalStyles"


function App() {

  return (
    <ContainerMain>
      <GlobalStyles />
      <main>
        <Arena />
      </main>
    </ContainerMain>
  )
}

export default App
