import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const Header = styled.div`
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: black;

    @media screen and (max-width: 768px) {
      .header__right {
        display: ${(props) => (userToggled ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background-color: black;
      }

      .header__menulist {
        display: ${(props) => (isToggled ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background-color: black;
      }
    }

    .logo {
      margin: 0 1rem;
      font-size: 2rem;
    }

    .header__menulist {
      list-style: none;
      display: flex;
    }

    .header__left {
      display: flex;
    }

    .header__right {
      list-style: none;
      display: flex;
    }

    .header__right div {
      margin: 0 1rem;
    }

    li {
      padding: 0 1rem;
    }

    .toggle {
      display: none;
      font-size: 1.5rem;
      padding: 1rem 1rem;
    }

    .user {
      display: none;
      font-size: 1.5rem;
      padding: 1rem 1rem;
    }

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;

      .header__right {
        display: ${(props) => (userToggled ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background-color: black;
      }

      .header__menulist {
        display: ${(props) => (isToggled ? 'flex' : 'none')};
        flex-direction: column;
        width: 100%;
        background-color: black;
      }

      .header__menulist li,
      .header__right li {
        margin: 1rem 0;
        padding: 0;
      }

      .toggle {
        display: block;
      }

      .user {
        display: block;
      }
    }
  `;

  return (
    <Header>
      {/* 햄버거 버튼(bar) */}
      <div
        className='toggle'
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      >
        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes} />
      </div>

      {/* Apple 로고 */}
      <div className='logo'>
        <FontAwesomeIcon icon={faSearchengin} />
      </div>

      {/* User 버튼 */}
      <div
        className='user'
        onClick={() => {
          setUserToggled(!userToggled);
        }}
      >
        <FontAwesomeIcon icon={!userToggled ? faUser : faTimes} />
      </div>

      {/* 메뉴 리스트 */}
      <ul className='header__menulist'>
        {/* <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>Music</li> */}
        <li>고객지원</li>
      </ul>

      {/* User 메뉴 리스트 */}
      <ul className='header__right'>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </Header>
  );
};

export default HeaderComponent;
