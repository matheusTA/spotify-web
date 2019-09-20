import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import Loading from '../../components/Loading';

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (prevProps.match.params.id !== match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { match, getPlaylistDetailsRequest } = this.props;

    getPlaylistDetailsRequest(match.params.id);
  }

  renderDetails = () => {
    const { playlistDetails, loadSong } = this.props;

    return (
      <Container>
        <Header>
          <img
            src={playlistDetails.data.thumbnail}
            alt={playlistDetails.data.title}
          />

          <div>
            <span>playlist</span>
            <h1>{playlistDetails.data.title}</h1>
            {!!playlistDetails.data.songs && (
              <p>
                {playlistDetails.data.songs.length}
                {' '}
                músicas
              </p>
            )}

            <button type="button">PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th> </th>
              <th>Título</th>
              <th>Artista</th>
              <th>Album</th>
              <th><img src={ClockIcon} alt="Duration" /></th>
            </tr>
          </thead>

          <tbody>
            {!playlistDetails.data.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (playlistDetails.data.songs.map((song) => (
              <tr key={song.id} onDoubleClick={() => loadSong(song)}>
                <td><img src={PlusIcon} alt="Adicionar" /></td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>3:26</td>
              </tr>
            ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  render() {
    const { playlistDetails } = this.props;

    return playlistDetails.loading ? (
      <Container loading="true">
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

Playlist.propTypes = {
  getPlaylistDetailsRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  playlistDetails: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        album: PropTypes.string,
      })),
    }),
  }).isRequired,
  loadSong: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  playlistDetails: state.playlistDetails,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = (dispatch) => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
