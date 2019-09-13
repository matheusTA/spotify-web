import React from 'react';
import { Container, NewPlaylist, Nav } from './styles';
import addPlaylist from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav bold>
        <li>
          <a href="/">Navegar</a>
        </li>
        <li>
          <a href="/">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Sua biblioteca</span>
        </li>
        <li>
          <a href="/">Seu Daily Mix</a>
        </li>
        <li>
          <a href="/">Tocadas recentemente</a>
        </li>
        <li>
          <a href="/">Músicas</a>
        </li>
        <li>
          <a href="/">Álbums</a>
        </li>
        <li>
          <a href="/">Artistas</a>
        </li>
        <li>
          <a href="/">Estações</a>
        </li>
        <li>
          <a href="/">Arquivos locais</a>
        </li>
        <li>
          <a href="/">Vídeos</a>
        </li>
        <li>
          <a href="/">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="/">Rap sujo</a>
        </li>
        <li>
          <a href="/">Rave do dale</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={addPlaylist} alt="Adicionar playlist" />
      Nova playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
