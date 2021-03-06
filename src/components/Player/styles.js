import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
`;

export const MusicCurrent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 220px;

  img {
    width: 48px;
    height: 48px;
  }

  div {
   margin-left: 12px;
   display: flex;
   flex-direction: column;

   span {
     font-size: 13px;
     color: #FFF;
   }

   small {
     font-size: 11px;
     color: #B3B3B3;
     margin-top: 5px;
   }
  }
`;

export const MusicPlayer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
    cursor: pointer;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0 15px;

  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;
