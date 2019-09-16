import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, NewPlaylist, Nav } from './styles';
import addPlaylist from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
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
            {this.props.playlists.data.map((playlist) => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={addPlaylist} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

Sidebar.propTypes = {
  getPlaylistsRequest: PropTypes.func.isRequired,
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
