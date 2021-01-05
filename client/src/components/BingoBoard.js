import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import data from "../bingoSquares.json";

const board = fillBoard();

function fillBoard() {
    let board = [];

    for (let i = 0; i < 24; i++) {
        let chosen = Math.floor(Math.random() * data.words.length);
        console.log("chosen", chosen);
        if (!data.words[chosen].used) {
            board.push(data.words[chosen].word);
            data.words[chosen].used = true;
        } else {
            i--;
        }
    }
    return board;
}

export class BingoBoard extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>{board[0]}</Col>
                        <Col>{board[1]}</Col>
                        <Col>{board[2]}</Col>
                        <Col>{board[3]}</Col>
                        <Col>{board[4]}</Col>
                    </Row>
                    <Row>
                        <Col>{board[5]}</Col>
                        <Col>{board[6]}</Col>
                        <Col>{board[7]}</Col>
                        <Col>{board[8]}</Col>
                        <Col>{board[9]}</Col>
                    </Row>
                    <Row>
                        <Col>{board[10]}</Col>
                        <Col>{board[11]}</Col>
                        <Col>FREE</Col>
                        <Col>{board[12]}</Col>
                        <Col>{board[13]}</Col>
                    </Row>
                    <Row>
                        <Col>{board[14]}</Col>
                        <Col>{board[15]}</Col>
                        <Col>{board[16]}</Col>
                        <Col>{board[17]}</Col>
                        <Col>{board[18]}</Col>
                    </Row>
                    <Row>
                        <Col>{board[19]}</Col>
                        <Col>{board[20]}</Col>
                        <Col>{board[21]}</Col>
                        <Col>{board[22]}</Col>
                        <Col>{board[23]}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
