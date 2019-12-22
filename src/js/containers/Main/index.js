import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Centerpannel from 'components/Centerpannel';
import Tooltip from 'components/Tooltip';

import styles from './styles.css';

/* eslint-disable */

class Main extends Component {
    state = {
        activeToolTip: true,
    };

    onClick = () => this.setState({ activeToolTip: false });

    render() {
        const { currentStatement } = this.props;
        const { activeToolTip } = this.state;

        return (
            <div className={styles.content}>
                {activeToolTip && (
                    <Tooltip
                        text="Просьба оценить разработку рекламного баннера на новорижском
                                        шоссе. Форматы 500x500x30. Материал - полиестирол хорошего
                                        качества."
                        onClick={this.onClick}
                    />
                )}
                <Centerpannel currentStatement={currentStatement} />
            </div>
        );
    }
}

Main.defaultProps = {
    tasks: [],
    currentStatementId: null,
    currentStatement: {},
    fetchingStatements: false,
};

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    currentStatementId: PropTypes.number,
    currentStatement: PropTypes.object,
    fetchingStatements: PropTypes.bool,
};

const mapStateToProps = state => {
    const {
        statements: { currentStatementId, items },
    } = state;

    return {
        currentStatement: items.find(item => item.id === currentStatementId),
    };
};

export default connect(
    mapStateToProps,
)(Main);
