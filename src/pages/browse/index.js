import React from 'react';
import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlist/1">
        <img
          src="https://i1.sndcdn.com/artworks-000143369540-dm6hgq-t500x500.jpg"
          alt="Album"
        />
        <strong>Rave do dale</strong>
        <p>Relaxe enquato voce programa ouvindo apenas as melhores fritacoes mundial!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://i1.sndcdn.com/artworks-000143369540-dm6hgq-t500x500.jpg"
          alt="Album"
        />
        <strong>Rave do dale</strong>
        <p>Relaxe enquato voce programa ouvindo apenas as melhores fritacoes mundial!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://i1.sndcdn.com/artworks-000143369540-dm6hgq-t500x500.jpg"
          alt="Album"
        />
        <strong>Rave do dale</strong>
        <p>Relaxe enquato voce programa ouvindo apenas as melhores fritacoes mundial!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://i1.sndcdn.com/artworks-000143369540-dm6hgq-t500x500.jpg"
          alt="Album"
        />
        <strong>Rave do dale</strong>
        <p>Relaxe enquato voce programa ouvindo apenas as melhores fritacoes mundial!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
