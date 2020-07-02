import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <Container className={'footer-container'} fluid>
                <Row noGutters>
                    <Col>
                        <p><a target="_blank" rel={'noopener noreferrer'} href={'https://www.heb.com/terms'}>Terms and Conditions</a> | <a target='_blank' rel={'noopener noreferrer'} href={'https://www.heb.com/privacy'}>Privacy Policy</a></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Footer;