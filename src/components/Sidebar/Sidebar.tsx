import React from 'react';
import { ReactComponent as Popular } from 'assets/icons/popular.svg';
import { ReactComponent as Clock } from 'assets/icons/clock.svg';
import { ReactComponent as Rating } from 'assets/icons/rating.svg';
import { ReactComponent as Sub } from 'assets/icons/subscription.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram.svg';
import { ReactComponent as Twitch } from 'assets/icons/twitch.svg';
import { ReactComponent as Facebook } from 'assets/icons/youtube.svg';

import cat from 'assets/icons/cat-news.webp';
import factory from 'assets/icons/factory.webp';
import technology from 'assets/icons/technology.webp';
import iron from 'assets/icons/culer.webp';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebar__inner'>
        <div className='sidebar-items sidebar__sidebar-items'>
          <section className='sidebar__item sidebar__item_active'>
            <Popular className='sidebar__item-icon sidebar__item-icon_active' />
            <p className='sidebar__item-title'>Популярное</p>
            <p className='sidebar__item-quantity'>58</p>
          </section>
          <section className='sidebar__item'>
            <Clock className='sidebar__item-icon' />
            <p className='sidebar__item-title'>Новое</p>
            <p className='sidebar__item-quantity'>1</p>
          </section>
          <section className='sidebar__item'>
            <Rating className='sidebar__item-icon' />
            <p className='sidebar__item-title'>Рейтинг</p>
            <p className='sidebar__item-quantity'>21</p>
          </section>
          <section className='sidebar__item'>
            <Sub className='sidebar__item-icon' />
            <p className='sidebar__item-title'>Подписки</p>
          </section>
        </div>

        <div className='sidebar-items sidebar__sidebar-items'>
          <section className='sidebar__item'>
            <img src={cat} className='sidebar__item-img' />
            <p className='sidebar__item-title'>Новости</p>
          </section>
          <section className='sidebar__item'>
            <img src={iron} className='sidebar__item-img' />
            <p className='sidebar__item-title'>Железо</p>
          </section>
          <section className='sidebar__item'>
            <img src={technology} className='sidebar__item-img' />
            <p className='sidebar__item-title'>Технологии</p>
          </section>
          <section className='sidebar__item'>
            <img src={factory} className='sidebar__item-img' />
            <p className='sidebar__item-title'>Индустрия</p>
          </section>
        </div>
        <footer className='footer footer_end'>
          <div className='footer__inner'>
            <p className='footer__item one_line'>Заказать рекламу</p>
            <p className='footer__item'>Помощь</p>
            <p className='footer__item'>О проекте</p>
            <p className='footer__item one_line'>Спонсоры WTF</p>
            <div className='footer__social-media one_line'>
              <Telegram />
              <Facebook />
              <Twitch />
            </div>
          </div>
        </footer>
      </div>
    </aside>
  );
};

export default Sidebar;
