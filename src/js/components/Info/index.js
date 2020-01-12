import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Info = props => {
    const { currentStatement } = props;
    const {
        statusName,
        statusRgb,
        initiatorName,
        createdAt,
        executorName,
        priorityName,
        resolutionDatePlan,
        tags,
    } = currentStatement;

    return (
        <div className={styles.info}>
            <div className={styles.info__status}>
                <div className={styles.info__statusLabel} style={{ backgroundColor: statusRgb }} />
                {statusName}
            </div>
            <div className={styles.info__item}>
                <div className={styles.info__header}>Заявитель</div>
                <div className={styles.info__value}>{initiatorName}</div>
            </div>
            <div className={styles.info__item}>
                <div className={styles.info__header}>Создана</div>
                <div className={styles.info__value}>{new Date(createdAt).toLocaleDateString()}</div>
            </div>
            <div className={styles.info__item}>
                <div className={styles.info__header}>Исполнитель</div>
                <div className={styles.info__value}>
                    <a href="#">{executorName}</a>
                </div>
            </div>
            <div className={styles.info__item}>
                <div className={styles.info__header}>Приоритет</div>
                <div className={styles.info__value}>{priorityName}</div>
            </div>
            <div className={styles.info__item}>
                <div className={styles.info__header}>Срок</div>
                <div className={styles.info__value}>
                    {new Date(resolutionDatePlan).toLocaleDateString()}
                </div>
            </div>
            {!!tags.length && (
                <div className={styles.info__item}>
                    <div className={styles.info__header}>Теги</div>
                    {tags.map((tag, index) => (
                        <Fragment key={index}>
                            <div className={styles.info__tag}>{tag.name}</div>
                            <br />
                        </Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

Info.defaultProps = {
    currentStatement: {},
};

Info.propTypes = {
    currentStatement: PropTypes.shape({
        statusName: PropTypes.string,
        statusRgb: PropTypes.string,
        initiatorName: PropTypes.string,
        createdAt: PropTypes.string,
        executorName: PropTypes.string,
        priorityName: PropTypes.string,
        resolutionDatePlan: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.object),
    }),
};

const mapStateToProps = ({ statements: { items, currentStatementId } }) => ({
    currentStatement: items.find(item => item.id === currentStatementId),
});

export default connect(mapStateToProps)(Info);
