import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import TaskList from 'components/TaskList';
import Info from 'components/Info';
import { changeCurrent } from 'store/actions';
import { getTasks, getCurrentStatement } from 'store/selectors';

import close from 'Images/close.png';
import styles from './styles.css';

/* eslint-disable */

class Main extends Component {
    state = {
        activeToolTip: true,
    };

    onClick = () => this.setState({ activeToolTip: false });

    render() {
        const { currentStatement } = this.props;
        const { description } = currentStatement;
        const { activeToolTip } = this.state;

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
                            {activeToolTip && (
                                <div className={styles.content__header}>
                                    <span className={styles.content__headerNumber}>№ 67405</span>
                                    <p className={styles.content__headerText}>
                                        Просьба оценить разработку рекламного баннера на новорижском
                                        шоссе. Форматы 500x500x30. Материал - полиестирол хорошего
                                        качества.
                                    </p>
                                    <button onClick={this.onClick} className={styles.buttonClose}>
                                        <img src={close} alt="close" />
                                    </button>
                                </div>
                            )}
                            <div className={styles.content__info}>
                                <div className={styles.content__main}>
                                    <div className={styles.content__description}>
                                        <p className={styles.label}>Описание</p>
                                        <p dangerouslySetInnerHTML={{ __html: description }} />
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
                                <Info currentStatement={currentStatement} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

Main.defaultProps = {
    tasks: [],
    currentStatementId: null,
    currentStatement: {},
    changeCurrent: null,
};

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    currentStatementId: PropTypes.number,
    currentStatement: PropTypes.object,
    changeCurrent: PropTypes.func,
};

const mapStateToProps = state => {
    const {
        statements: { currentStatementId },
    } = state;

    return {
        tasks: getTasks(state),
        currentStatementId,
        currentStatement: getCurrentStatement(state),
    };
};

const mapDispatchToProps = {
    changeCurrent,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
