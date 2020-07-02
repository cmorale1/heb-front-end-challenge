import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Container className="header-container" fluid>
                <Row noGutters>
                    <Col xs={12}>
                        <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/H-E-B_logo.svg/1200px-H-E-B_logo.svg.png'} alt='logo'/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header;