import React, { Component } from "react";

class CardSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCards: [],
    };
  }

  saveCourse = (index) => {
    console.log(index);
    // BAD!!! this.state.chosenCards.push(this.props.cards[index])
    const copyOfCards = [...this.state.chosenCards];
    copyOfCards.push(this.props.cards[index]);
    // React manage the state mutation now
    this.setState({ chosenCards: copyOfCards });
  };

  render() {
    console.log(this.state.chosenCards);

    const saveCards = this.state.chosenCards.map((card, i) => {
      return <p key={i}>{card.course}</p>;
    });

    const cardList = this.props.cards.map((card, index) => {
      return (
        <div className="col s2" key={index}>
          <div className="card hoverable small">
            <div className="card-image">
              <img src={card.image} alt="" />
            </div>
            <div className="card-content">
              <p>{card.course}</p>
              <p>{card.instructor}</p>
            </div>
            <div className="card-action">
              <a href="www.udemy.com">$9.99</a>
            </div>
          </div>
          <button
            onClick={() => this.saveCourse(index)}
            className="btn waves-light waves-effect">
            Save
          </button>
        </div>
      );
    });

    return (
      <div>
        <h3>5. CardSet Component</h3>
        {cardList}
        {saveCards}
      </div>
    );
  }
}

export default CardSet;
