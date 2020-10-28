import React, { useState, useEffect } from 'react';
import ReactTooltip from "react-tooltip";

import { FiUser, FiMenu } from 'react-icons/fi';

//Avatars

import imgAvatar from '../../assets/images/avatar2.jpg';
import imgAvatar2 from '../../assets/images/avataaars.png';
import imgAvatar3 from '../../assets/images/avatar1.jpg';

//Instruments

import iconGuitar from '../../assets/icons/042-electric-guitar.png';
import iconDrum from '../../assets/icons/drums.svg';

//Genres

import iconRockRoll from '../../assets/icons/rock_roll.svg';
import iconPunk from '../../assets/icons/punk.svg';
import iconFunk from '../../assets/icons/funk.svg';
import iconSertanejo from '../../assets/icons/sertanejo.svg';
import iconBlues from '../../assets/icons/blues.svg';
import iconJazz from '../../assets/icons/jazz.svg';

import './styles.scss';

const Home = () => {
  const [ states, setStates ] = useState([]);
  const [ city, setCities ] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/mateusvidaljs/bcf4f8166b452735600c1c34a85a204a/raw/2e43be5f86eef95b915c1c804ccc86dc9790a50a/estados-cidades.json')
    .then(response => response.json())
    .then((jsonData) => {
      setStates(jsonData.estados);
    })
    .catch((error) => {
      console.error(error)
    });
  }, []);

  const handleSearch = (event) => {
    const selectedState = event.target.value;
    const cityArray = states.filter((item) => {
      return item.sigla === selectedState
    });

    setCities(cityArray[0].cidades);
  }; 

  return (
    <div className="container">
      <div className="top-bar">
        <div className="top-bar-logo">
          <span>Band</span>Maker
        </div>

        <div className="selection-top-bar">
          {/* <div className="menu-item active">
            MUSICOS
          </div>

          <div className="menu-item">
            BANDA
          </div> */}
        </div>

        <div className="menu-user">
          <div className="menu-button">
            <FiMenu size={20} />
          </div>

          <div className="user-button">
            <FiUser size={20} />
          </div>
        </div>
      </div>

      <div className="filter-bar">
        <form>
          <select id="txtState" onChange={ handleSearch }>
            <option>Estado</option>
            {
              states.map(( { sigla, nome } ) => (
                <option key={ sigla } value={ sigla }>
                  { nome }
                </option>
              ))
            }
          </select>

          <select>
            <option>Cidade</option>
            {
              city.map(item => (
                <option key={item}>{item}</option>
              ))
            }
          </select>

          <select>
            <option>Instrumento</option>
          </select>

          <select>
            <option>Estilo</option>
          </select>
        </form>

        <button type="button">Filtrar</button>
      </div>

      <div className="musician-list">
        <div className="musician-item">
          <div className="div-avatar">
            <img src={imgAvatar} className="avatar" alt="Avatar" />
          </div>

          <div className="basic-data">
            <span className="name">Cicrano de Tal</span>
            <span className="age">São Paulo - SP</span>
          </div>

          <div className="musician-data">
            <div className="role">
              <img src={iconGuitar} className="instrument-icon" alt="Guitar" />
              Guitarrista
            </div>

            <div className="genres">
              <img data-tip="Blues" src={iconBlues} alt="Genre" />
              <img data-tip="Jazz" src={iconJazz} alt="Genre" />
            </div>
          </div>

          <div className="buttons">
            <button type="button" className="see-profile">Ver Perfil</button>
          </div>
        </div>

        <div className="musician-item">
          <div className="div-avatar">
            <img src={imgAvatar2} className="avatar" alt="Avatar" />
          </div>

          <div className="basic-data">
            <span className="name">Sei Lá</span>
            <span className="age">Belo Horizonte - MG</span>
          </div>

          <div className="musician-data">
            <div className="role">
              <img src={iconDrum} className="instrument-icon" alt="Drums" />
              Baterista
            </div>

            <div className="genres">
              <img data-tip="Funk" src={iconFunk} alt="Genre" />
              <img data-tip="Sertanejo" src={iconSertanejo} alt="Genre" />
            </div>
          </div>

          <div className="buttons">
            <button type="button" className="see-profile">Ver Perfil</button>
          </div>
        </div>

        <div className="musician-item">
          <div className="div-avatar">
            <img src={imgAvatar3} className="avatar" alt="Avatar" />
          </div>

          <div className="basic-data">
            <span className="name">Fulano de Tal</span>
            <span className="age">Rio de Janeiro - RJ</span>
          </div>

          <div className="musician-data">
            <div className="role">
              <img src={iconGuitar} className="instrument-icon" alt="Guitar" />
              Baixista
            </div>

            <div className="genres">
              <img data-tip="Rock n' Roll" src={iconRockRoll} alt="Genre" />
              <img data-tip="Punk" src={iconPunk} alt="Genre" />
            </div>
          </div>

          <div className="buttons">
            <button type="button" className="see-profile">Ver Perfil</button>
          </div>
        </div>
      </div>

      <ReactTooltip />
    </div>
  );
}

export default Home;