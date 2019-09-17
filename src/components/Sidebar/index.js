import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import { Container, NewPlaylist, Nav } from './styles';
import addPlaylist from '../../assets/images/add_playlist.svg';
import Loading from '../Loading';

class Sidebar extends Component {
  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <div>
          <Nav bold>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <Link to="/">Radio</Link>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Sua biblioteca</span>
            </li>
            <li>
              <Link to="/">Seu Daily Mix</Link>
            </li>
            <li>
              <Link to="/">Tocadas recentemente</Link>
            </li>
            <li>
              <Link to="/">Músicas</Link>
            </li>
            <li>
              <Link to="/">Álbums</Link>
            </li>
            <li>
              <Link to="/">Artistas</Link>
            </li>
            <li>
              <Link to="/">Estações</Link>
            </li>
            <li>
              <Link to="/">Arquivos locais</Link>
            </li>
            <li>
              <Link to="/">Vídeos</Link>
            </li>
            <li>
              <Link to="/">Podcasts</Link>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
              {playlists.loading && <Loading />}
            </li>
            {playlists.data.map((playlist) => (
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
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
