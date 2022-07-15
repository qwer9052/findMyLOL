import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/search.css';

const SearchCompo = () => {
  return (
    <div className='search_container'>
      <input className='search_input' type={'text'} />
      <button className='search_button'>검색</button>
    </div>
  );
};

export default SearchCompo;
