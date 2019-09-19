import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import ErrorBox from './components/ErrorBox';


import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>

        <Container>
          <Sidebar />

          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>

        </Container>

        <Player />
      </Wrapper>
      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);

export default App;
