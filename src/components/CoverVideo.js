import React from 'react';
import styled from 'styled-components';
import GIF from '../assets/Home Video.mp4';
import GIF2 from '../assets/hollywoodham.mp4';
import img1 from '../assets/Nfts/HHProfile.png';

const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto;
}
img{
    width: 100%;
    height: auto;
}

@media (max-width: 64em) {
    min-width: 40vh;
}
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <img src={img1} alt="The Hollywood Hams" />
        </VideoContainer>
    );
};

export default CoverVideo;