import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Info from 'components/Info';
import Button from 'components/Button';

import styles from './styles.css';

class Centerpannel extends Component {
    render() {
        const { currentStatement } = this.props;
        const { description } = currentStatement;

        return (
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
                                    some text some text some text some text some text some text\
                                    some text some text some text some text some text some text
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Info currentStatement={currentStatement} />
            </div>
        );
    }
}

Centerpannel.defaultProps = {
    currentStatement: {},
};

Centerpannel.propTypes = {
    currentStatement: PropTypes.object,
};

export default Centerpannel;
