import React from 'react';
import { FiMenu } from 'react-icons/fi';

import iconMusician from '../../assets/icons/musician.svg';
import iconBand from '../../assets/icons/band.svg';

import MusicianList from '../../components/MusicianList';

import './styles.scss';

const BandMaker = () => {
  return (
    <div id="page-bandmaker">
      <header>
        <div className="top-bar-container">
          <span>BandMaker</span>

          <div className="top-bar-container-buttons">
            {/* <button type="button">
              <FiUser />
            </button> */}

            <button type="button">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="search-type">
          <div className="active">
            <img src={ iconMusician } alt="Músico"/>
            Músicos
          </div>

          <div>
            <img src={ iconBand } alt="Banda"/>
            Bandas
          </div>
        </div>

        <MusicianList />
        <MusicianList />
        <MusicianList />
        <MusicianList />
      </main>
    </div>
  );
}

export default BandMaker;