import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://i1.sndcdn.com/artworks-000143369540-dm6hgq-t500x500.jpg"
        alt="Album"
      />

      <div>
        <span>Rave do dale</span>
        <h1>Fritacao</h1>
        <p>13 musicas</p>

        <button type="button">PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Album</th>
          <th><img src={ClockIcon} alt="Duration" /></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Party all the time</td>
          <td>Vintage Culture</td>
          <td>Never stop dancing</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Party all the time</td>
          <td>Vintage Culture</td>
          <td>Never stop dancing</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Party all the time</td>
          <td>Vintage Culture</td>
          <td>Never stop dancing</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Party all the time</td>
          <td>Vintage Culture</td>
          <td>Never stop dancing</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Party all the time</td>
          <td>Vintage Culture</td>
          <td>Never stop dancing</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Party all the time</td>
          <td>Vintage Culture</td>
          <td>Never stop dancing</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Party all the time</td>
          <td>Vintage Culture</td>
          <td>Never stop dancing</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
