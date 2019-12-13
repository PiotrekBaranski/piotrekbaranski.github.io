import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(90deg, teal, coral);
  text-shadow: 5px 5px 0px rgba(0, 0, 0, .2);
  color: white;
`

const StyledTypist = styled(Typist)`
  font-size: 60px;
  font-weight: bold;
`

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <StyledTypist cursor={{ show: false }} avgTypingDelay={100}>
          hey, i'm piotrek, and i'm the king.
        </StyledTypist>
      </Wrapper>
    )
  }
}

export default App;
