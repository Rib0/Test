import React, { Component } from 'react';

import Button from 'components/Button';
import styles from './styles.css';

import { items } from 'components/data/list.json';
import Sidebar from 'components/Sidebar';
import Container from 'components/Container';

import close from 'Images/close.png';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Sidebar />
                <div className={styles.main}>
                    <div className={styles.header}>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.preview}>
                        <ul className={styles.list}>
                            <li className={styles.list__header}>
                                <Button className={styles.button} text="Создать заявку" />
                                <div className={styles.names}>
                                    <span className={styles.id}>ID</span>
                                    <span className={styles.name}>Название</span>
                                </div>
                            </li>
                            {items.map(item => (
                                <li className={styles.list__item} key={item.id}>
                                    <span className={styles.id}>{item.id}</span>
                                    <span className={styles.name}>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.content}>
                            <div className={styles.content__header}>
                                <span className={styles.content__number}>№ 67405</span>
                                <p className={styles.content__text}>
                                    Просьба оценить разработку рекламного баннера на новорижском
                                    шоссе. Форматы 500x500x30. Материал - полиестирол хорошего
                                    качества.
                                </p>
                                <img className={styles.close} src={close} alt="close" />
                            </div>
                            <div className={styles.content__main}>qweqe</div>
                            <div className={styles.content__status}>qweqw</div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
