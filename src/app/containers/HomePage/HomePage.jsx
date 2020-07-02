import React from 'react';
import { Container } from 'reactstrap';
import { Footer, Header, List } from '../../components';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <Container className="home-page-container" fluid>
                <Header/>
                <List/>
                <Footer/>
            </Container>
        )
    }
}

export default HomePage;