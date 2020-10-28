import React from 'react';
import { FiMapPin } from 'react-icons/fi';

import iconRock from '../../assets/icons/rock_roll.svg';
import iconBlackMetal from '../../assets/icons/black_metal.svg';
import iconSinger from '../../assets/icons/microphone.svg';

import './styles.scss';

const MusicianList = () => {
  return (
    <article className="musician">
      <img src="https://avatars3.githubusercontent.com/u/25904332?s=460&u=b210f192a6746062359414749c01c740a5e39fff&v=4" alt="Mateus Vidal"/>
      
      <div className="musician-data">
        <span className="name">Mateus Vidal</span>
        <span className="location"><FiMapPin /> Belo Horizonte, MG</span>
        <div className="genres">
          <img src={ iconRock } alt="Rock n Roll"/>
          <img src={ iconBlackMetal } alt="Black Metal"/>
        </div>
      </div>

      <div className="buttons">
        <button type="button">
          Ver Perfil
        </button>
      </div>
    </article>
  );
}

export default MusicianList;