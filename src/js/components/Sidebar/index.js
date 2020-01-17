import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from 'Images/logo.png';
import Book from 'Images/book.png';
import File from 'Images/file.png';
import People from 'Images/people.png';
import City from 'Images/city.png';
import Analytics from 'Images/analytics.png';
import Settings from 'Images/Settings.png';
import styles from './styles.css';

const items = [
    {
        to: '/foundation',
        name: 'База знаний',
        img: Book,
    },
    {
        to: '/requests',
        name: 'Заявки',
        img: File,
    },
    {
        to: '/workers',
        name: 'Сотрудники',
        img: People,
    },
    {
        to: '/clients',
        name: 'Клиенты',
        img: City,
    },
    {
        to: '/assets',
        name: 'Активы',
        img: Analytics,
    },
    {
        to: '/settings',
        name: 'Настройки',
        img: Settings,
    },
];

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Link to="/" className={styles.item}>
                <img className={styles.logo} src={Logo} />
            </Link>
            {items.map(item => (
                <NavLink to={item.to} exact={item.exact} activeClassName={styles['item--active']} className={styles.item} key={item.to}>
                    <img className={styles.item__img} src={item.img} />
                    <p>{item.name}</p>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;
