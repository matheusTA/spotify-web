import React from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import {
  Container, MusicCurrent, MusicPlayer, Volume, Controls, Time, ProgressSlider,
} from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}

    <MusicCurrent>
      <img
        src="https://i1.sndcdn.com/artworks-000143369540-dm6hgq-t500x500.jpg"
        alt="Album"
      />
      <div>
        <span>Party all the time</span>
        <small>Vintage Culture</small>
      </div>
    </MusicCurrent>

    <MusicPlayer>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>

        <button type="button">
          <img src={BackwardIcon} alt="Backward" />
        </button>

        <button type="button">
          <img src={PlayIcon} alt="Play" />
        </button>

        <button type="button">
          <img src={ForwardIcon} alt="Forward" />
        </button>

        <button type="button">
          <img src={RepeatIcon} alt="Repeat" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: '10' }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>3:50</span>
      </Time>
    </MusicPlayer>

    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: '10' }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
