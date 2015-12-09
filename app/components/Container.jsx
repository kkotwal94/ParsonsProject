import React, { Component } from 'react';
import update from 'react/lib/update';
import Card from './Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ParsonsStore from 'stores/ParsonsStore';
import ParsonsActions from 'actions/ParsonsActions';
const style = {
  width: 400
};

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    //this.data = {this.props.array};
    this.state = {cards: [], array: this.props.array};
    console.log(this.props.array);
  }


   static propTypes = {
    array: React.PropTypes.array
   };


  moveCard(dragIndex, hoverIndex) {
    const { array } = this.props;
    const dragCard = array[dragIndex];

    array[dragIndex] = array[hoverIndex];
    array[hoverIndex] = dragCard;
   /*let collection = update(array, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
    });*/
    //console.log(array);
    ParsonsActions.updateRandomArray(array);
  }

  render() {
    const { cards } = this.state;
    const { array } = this.props;
    //console.log(array);
    return (
      <div style={style}>
        {array.map((card, i) => {
          return (
            <Card key={card.id}
                  index={i}
                  id={card.id}
                  text={card.text}
                  moveCard={this.moveCard} />
          );
        })}
      </div>
    );
  }
}