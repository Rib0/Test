import React from 'react';
import Loader from 'components/Loader';

import propTypes from 'prop-types';

const hocLoader = Component => props => {
    const { requiredOpts = [], ...otherProps } = props;
    const isLoading = requiredOpts.length && requiredOpts.some(arg => !arg || (Array.isArray(arg) && !arg.length));

    return isLoading ? <Loader /> : <Component {...otherProps} />;
};

hocLoader.defaultProps = {
    Component: <div />,
};

hocLoader.propTypes = {
    Component: propTypes.Component,
};

export default hocLoader;
