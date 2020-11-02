import styled from 'styled-components'
import {RoundContextProvider} from './components/context/ContextsRoundDetails'
import {TriviaContextProvider} from './components/context/ContextTrivia'
import Navigation from './components/styled/Navigation';
import ScoreDisplay from './components/styled/ScoreDisplay'
import PlayArea from './components/styled/PlayArea'


const StyledApp = styled.div`
  background-color: #33aced;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`

function App() {
  return (
    <StyledApp data-testid="App" >
      <RoundContextProvider >
        <TriviaContextProvider >
          <Navigation />
          <ScoreDisplay />
          <PlayArea />
        </TriviaContextProvider >
      </RoundContextProvider >
    </StyledApp>
  );
}

export default App;
