import React, { Component } from "react";
import Thumbnail from "../Thumbnail";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import Row from "../Row";
import Footer from "../Footer";
import data from "../../portraits.json";

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        stateMsg: "Click an image to begin!",
        thumbClass: "img-thumbnail zoom m-1 p-2 click-item",
        isCorrectClass: "col-4"
    };
    
    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    };

    handleCorrectGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore,
            stateMsg: "You got it... Keep going!",
            thumbClass: "img-thumbnail zoom m-1 p-2 click-item",
            isCorrectClass: "col-4 correct"
        });
        setTimeout(() => this.setState({isCorrectClass: "col-4"}), 500);
        if(newScore === 12) {
            alert("You won!");
            this.setState({isCorrectClass: "col-4 correct"});
        }
    };

    handleIncorrectGuess = data => {
        this.setState({
            data: this.resetData(data),
            score: 0,
            stateMsg: "You already picked that; start over!",
            thumbClass: "shake img-thumbnail zoom m-1 p-2 click-item",
            isCorrectClass: "col-4 incorrect"            
        });
        // alert("Try again!");
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false}));
        return this.shuffleData(resetData);
    };

    shuffleData = data => {
        let i=data.length - 1;
        while (i > 0) {
            const j=Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            // eslint-disable-next-line
            data[i] = data [j];
            data[j] = temp;
            i--;
        };
        return data;
    };

    handleItemClick = id => {
        let guessedCorrectly = false;
        const newData= this.state.data.map(item => {
            const newItem= { ...item };
            // console.log("new id: " + newItem.id)
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                };
            };
            return newItem;
        });
        guessedCorrectly ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
    };

    render() {
        return (
            <div>
                <Nav score={this.state.score} topScore={this.state.topScore} stateMsg={this.state.stateMsg} class={this.state.isCorrectClass}/>
                <Header />
                <Container>
                    <Row>
                        {this.state.data.map(item => (
                            <Thumbnail 
                                key={item.id}
                                id={item.id}
                                shake={!this.state.score && this.state.topScore}
                                handleItemClick={this.handleItemClick}
                                image={item.image}
                                name={item.name}
                                class={this.state.thumbClass}
                            />
                        ))}
                    </Row>
                </Container>
                <Footer />
            </div>
        );
    };
};

export default Game;

