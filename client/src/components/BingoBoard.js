import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class BingoBoard extends Component {
    render() {
        return (
            <div>
                <Container className="App-dark">
                    <Row>
                        <Col>1 of 1</Col>
                        <Col>1 of 2</Col>
                        <Col>1 of 3</Col>
                        <Col>1 of 4</Col>
                        <Col>1 of 5</Col>
                    </Row>
                    <Row>
                        <Col>2 of 1</Col>
                        <Col>2 of 2</Col>
                        <Col>2 of 3</Col>
                        <Col>2 of 4</Col>
                        <Col>2 of 5</Col>
                    </Row>
                    <Row>
                        <Col>3 of 1</Col>
                        <Col>3 of 2</Col>
                        <Col>3 of 3</Col>
                        <Col>3 of 4</Col>
                        <Col>3 of 5</Col>
                    </Row>
                    <Row>
                        <Col>4 of 1</Col>
                        <Col>4 of 2</Col>
                        <Col>4 of 3</Col>
                        <Col>4 of 4</Col>
                        <Col>4 of 5</Col>
                    </Row>
                    <Row>
                        <Col>5 of 1</Col>
                        <Col>5 of 2</Col>
                        <Col>5 of 3</Col>
                        <Col>5 of 4</Col>
                        <Col>5 of 5</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
