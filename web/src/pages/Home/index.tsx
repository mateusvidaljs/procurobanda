import React from 'react';
import ReactPlayer from 'react-player';
import Sound from 'react-sound';
import { FiBell, FiMusic, FiMessageSquare, FiShare2 } from 'react-icons/fi';

import logoImage from '../../assets/images/logo1.png';
import pentakillImage from '../../assets/images/pentakill_album.jpg';

import './styles.scss';

const Home = () => {
  const audioFile = require('../../assets/audio/infinity_edge.mp3');

  return (
    <div id="page-home">
      <header>
        <img src={ logoImage } alt="Logotipo" className="logo" />
        
        <div className="user-div">
          <FiBell className="header-icon" />
          <img src="https://avatars2.githubusercontent.com/u/25904332?v=4" alt="Avatar" className="avatar"/>
        </div>
      </header>

      <main>
        <div className="feed">
          <article className="feed-item">
            <div className="poster-info">
              <div>
                <img className="poster-avatar" src="https://avatars2.githubusercontent.com/u/25904332?v=4" alt="Avatar"/>
                <span className="user-name">Mateus Vidal</span>
              </div>

              <div>
                <span className="posted-on">
                  1 Hora atrás
                </span>
              </div>
            </div>

            <div className="video-div">
              <ReactPlayer 
                className="post-video" 
                url="https://www.youtube.com/watch?v=btSlfXILTkU" 
                controls={ true }
              />
            </div>

            <div className="feed-interactions">
              <div className="like">
                <FiMusic className="icon" /> 220
              </div>
              
              <div className="comment">
                <FiMessageSquare className="icon" /> 10
              </div>

              <FiShare2 className="icon" />
            </div>
          </article>

          <article className="feed-item">
            <div className="poster-info">
              <div>
                <img className="poster-avatar" src="https://avatars2.githubusercontent.com/u/25904332?v=4" alt="Avatar"/>
                <span className="user-name">Mateus Vidal</span>
              </div>

              <div>
                <span className="posted-on">
                  1 Hora atrás
                </span>
              </div>
            </div>

            <div className="music-div">
              <div className="album-cover">
                <img src={ pentakillImage } alt="Album Cover"/>
              </div>

              <div className="album-info">
                <span>Música</span> Infinity Edge
                <span>Album</span> Grasp of Undying
                <span>Artista</span> Pentakill
                <span>Gênero</span> Heavy Metal
              </div>
            </div>

            <Sound url={ audioFile } playStatus={'PLAYING'} />

            <div className="feed-interactions">
              <div className="like">
                <FiMusic className="icon" /> 220
              </div>
              
              <div className="comment">
                <FiMessageSquare className="icon" /> 10
              </div>

              <FiShare2 className="icon" />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export default Home;