import React, { useState } from 'react';
import { ReactComponent as BurgerIcon } from 'assets/icons/burger.svg';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as Bell } from 'assets/icons/bell.svg';
import { ReactComponent as User } from 'assets/icons/lk.svg';
import Search from 'components/Header/Search/Search';
import AddNewEntry from 'components/Header/AddNewEntry/AddNewEntry';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='burger'>
          <div className='burger__icon-container'>
            <BurgerIcon className='burger__icon' />
          </div>
        </div>

        <div className='logo header__item_v-center'>
          <Logo />
        </div>
        <Search />
        <AddNewEntry />
        <div className='notifications header__item_v-center'>
          <Bell />
        </div>
        <div className='user header__item_v-center'>
          <User className='user__icon' />
          <span>Войти</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
