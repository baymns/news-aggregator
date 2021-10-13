import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import './Search.scss';
import classNames from 'classnames';

const Search = () => {
  const [isFocused, setFocuse] = useState(false);
  const searchInputClassname = classNames('search__input-container', {
    'search__input-container_focused': isFocused,
  });
  const toggleInputFocus = () => setFocuse(!isFocused);
  return (
    <div className='search header__item_v-center'>
      <div className={searchInputClassname}>
        <label className='search__input-label'>
          <input
            type='text'
            className='search__input'
            onFocus={toggleInputFocus}
            onBlur={toggleInputFocus}
            placeholder='Поиск'
          />
        </label>
        <div className='search__icon-container'>
          <SearchIcon className='search__icon' />
        </div>
      </div>
    </div>
  );
};

export default Search;
