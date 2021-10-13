import React from 'react';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import './AddNewEntry.scss';

const AddNewEntry = () => {
  return (
    <div className='add-new-entry header__item_v-center'>
      <div className='add-new-entry__container'>
        <button className='add-new-entry__button'>Новая запись</button>
        <div className='add-new-entry__arrow-down'>
          <ArrowDown />
        </div>
      </div>
      <div className='add-new-entry__dropdown'></div>
    </div>
  );
};

export default AddNewEntry;
