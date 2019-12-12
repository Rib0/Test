import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import TaskList from 'components/TaskList';
import Info from 'components/Info';
import { changeCurrent } from 'store/actions';
import { getTasks } from 'store/selectors';

import close from 'Images/close.png';
import styles from './styles.css';

/* eslint-disable */

class Main extends Component {
    render() {
        return (
            <Container>
                <Sidebar />
                <div className={styles.main}>
                    <div className={styles.header}>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.preview}>
                        <TaskList {...this.props} />
                        <div className={styles.content}>
                            <div className={styles.content__header}>
                                <span className={styles.content__headerNumber}>№ 67405</span>
                                <p className={styles.content__headerText}>
                                    Просьба оценить разработку рекламного баннера на новорижском
                                    шоссе. Форматы 500x500x30. Материал - полиестирол хорошего
                                    качества.
                                </p>
                                <img className={styles.close} src={close} alt="close" />
                            </div>
                            <div className={styles.content__info}>
                                <div className={styles.content__main}>
                                    <div className={styles.content__description}>
                                        <p className={styles.label}>Описание</p>
                                        <p>qweklqejqlkwejqweklqjeklqjelkjelkwqjekqwklejlk</p>
                                    </div>
                                    <div className={styles.comments}>
                                        <p className={styles.label}>Добавление комментариев</p>
                                        <textarea className={styles.comments__textarea} />
                                        <Button text="Сохранить" />
                                        <div className={styles.comments__list}>
                                            <div className={styles.comments__item}>
                                                <div className={styles.comments__header}>
                                                    <div className={styles.comments__photo} />
                                                    <div>
                                                        <div className={styles.comments__name}>
                                                            Иванов Александр
                                                        </div>
                                                        <div className={styles.comments__date}>
                                                            12 августа, 10:00 прокомментировал
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.comments__text}>
                                                    some text some text some text some text some
                                                    text some text\ some text some text some text
                                                    some text some text some text
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Info />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    currentStatementId: PropTypes.number,
    changeCurrent: PropTypes.func,
};

const mapStateToProps = state => {
    const {
        statements: { currentStatementId },
    } = state;

    return {
        tasks: getTasks(state),
        currentStatementId,
    };
};

const mapDispatchToProps = {
    changeCurrent,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
