import React, { Component } from 'react';

import Container from 'components/Container';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Sidebar />
                <Header />
            </Container>
        );
    }
}
