import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

//import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import HeaderCompo from '../components/HeaderCompo';
import SearchCompo from '../components/SearchCompo';
import { getAxios } from '../utils/axiosPlugin';

const Home = () => {
  return (
    <div>
      <HeaderCompo />
      <SearchCompo />
    </div>
  );
};

export default Home;
