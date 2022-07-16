import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/search.css';
import { getAxios } from '../utils/axiosPlugin';

const SearchCompo = () => {
  const [summoner, setSummoner] = useState('');

  useEffect(() => {}, []);

  const onChange = useCallback((e: any) => {
    const { value } = e.target;
    setSummoner(value);
  }, []);

  const _searchHandler = (e: any) => {
    const result = getAxios('/summoner/', summoner);
  };

  return (
    <div className='search_container'>
      <input onChange={onChange} className='search_input' type={'text'} />
      <button onClick={_searchHandler} className='search_button'>
        검색
      </button>
      <p>{summoner}</p>
    </div>
  );
};

export default SearchCompo;
