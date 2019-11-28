import React from 'react';

import styles from './styles.css';

import Logo from 'Images/logo.png';
import Book from 'Images/book.png';
import File from 'Images/file.png';
import People from 'Images/people.png';
import City from 'Images/city.png';
import Analytics from 'Images/analytics.png';
import Settings from 'Images/Settings.png';

const items = [
    {
        name: 'База знаний',
        img: Book,
    },
    {
        name: 'Заявки',
        img: File,
    },
    {
        name: 'Сотрудники',
        img: People,
    },
    {
        name: 'Клиенты',
        img: City,
    },
    {
        name: 'Активы',
        img: Analytics,
    },
    {
        name: 'Настройки',
        img: Settings,
    },
];

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <img className={styles.logo} src={Logo} />
            {items.map(item => (
                <div className={styles.item}>
                    <img className={styles.item__img} src={item.img} />
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
