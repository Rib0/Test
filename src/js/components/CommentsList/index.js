import React from 'react';

import Button from 'components/Button';
import styles from './styles.css';

const CommentsList = () => (
    <div className={styles.comments}>
        <p className={styles.label}>Добавление комментариев</p>
        <textarea className={styles.comments__textarea} />
        <Button text="Сохранить" />
        <div className={styles.comments__list}>
            <div>
                <div className={styles.comments__header}>
                    <div className={styles.comments__photo} />
                    <div>
                        <div className={styles.comments__name}>Иванов Александр</div>
                        <div className={styles.comments__date}>12 августа, 10:00 прокомментировал</div>
                    </div>
                </div>
                <div className={styles.comments__text}>
                    some text some text some text some text some text some text\ some text some text some text some text some text some text
                </div>
            </div>
        </div>
    </div>
);

export default CommentsList;
