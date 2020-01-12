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
        const { activeToolTip } = this.state;
        const { currentStatementId } = this.props;

        if (!currentStatementId) return null;

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
                <Centerpannel />
            </div>
        );
    }
}

Main.defaultProps = {
    tasks: [],
    fetchingStatements: false,
    currentStatementId: null,
};

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    fetchingStatements: PropTypes.bool,
    currentStatementId: PropTypes.number,
};

const mapStateToProps = ({ statements: { currentStatementId } }) => ({
    currentStatementId,
});

export default connect(mapStateToProps)(Main);
