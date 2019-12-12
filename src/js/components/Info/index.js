import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCurrentStatement } from 'store/selectors';
import styles from './styles.css'

class Info extends Component {

    render() {
        console.log(this.props.currentStatement)

        return (
            <div className={styles.info}>
                <div className={styles.info__status}>В работе</div>
                <div className={styles.info__item}>
                    <div className={styles.info__header}>Заявитель</div>
                    <div className={styles.info__value}>
                                            Александр Вознесенский
                                        </div>
                                    </div>
                                    <div className={styles.info__item}>
                                        <div className={styles.info__header}>Создана</div>
                                        <div className={styles.info__value}>Маркова Анна</div>
                                    </div>
                                    <div className={styles.info__item}>
                                        <div className={styles.info__header}>Исполнитель</div>
                                        <div className={styles.info__value}>
                                            <a href="#">Кожин Игорь</a>
                                        </div>
                                    </div>
                                    <div className={styles.info__item}>
                                        <div className={styles.info__header}>Приоритет</div>
                                        <div className={styles.info__value}>Высокий</div>
                                    </div>
                                    <div className={styles.info__item}>
                                        <div className={styles.info__header}>Срок</div>
                                        <div className={styles.info__value}>12.11.2018 г.</div>
                                    </div>
                                    <div className={styles.info__item}>
                                        <div className={styles.info__header}>Теги</div>
                                        <div className={styles.info__tag}>Сервер 1</div>
                                        <br />
                                        <div className={styles.info__tag}>
                                            mb_support_mymercedec
                                        </div>
                                    </div>
                                </div>
        )
    }
}

const mapStateToProps = state => ({
    currentStatement: getCurrentStatement(state)
})

Info.propTypes = {
    currentStatement: PropTypes.object
}

export default connect(mapStateToProps)(Info);