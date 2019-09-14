import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { Wrapper, Container, Content } from './styles/components';

const App = () => (
  <Wrapper>
    <Container>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
    <GlobalStyle />
  </Wrapper>
);

export default App;
