import React, { Component } from 'react';

import Container from 'components/Container';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Sidebar />
                <Main />
            </Container>
        );
    }
}
