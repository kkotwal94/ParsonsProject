import React, {Component, PropTypes} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import CodeLine from './CodeLine';
import GridSpace from './GridSpace';

//@DragDropContext(HTML5Backend)
export default class Grid extends React.Component{
    
    static propTypes = {
        gridSize: PropTypes.number,
        correctArray: PropTypes.array,
        randomArray: PropTypes.array
    };

    renderGridSpace(y) {
        const {randomArray} = this.props;
        //console.log(randomArray);
        const gray = (y) % 2 === 1;
        const line = <CodeLine lineContents = {randomArray[y]} id = {y} />
        //const [spaceY] = this.props.arrayOfLines
        return(
            <div className = {y}>
            <GridSpace gray = {gray} id = {y} >
                {line}
            </GridSpace>
            </div>
            );
    };

    render() {
        //const { gray } = this.props;
        //const fill = gray ? 'gray' : 'white';
        //const stroke = gray ? 'white' : 'gray';
        const {gridSize} = this.props;
        const spaces = [];
        for(let i = 0; i < gridSize; i++) {
            spaces.push(this.renderGridSpace(i));
        }
        return (
            <div style={{ 
            backgroundColor: 'red',
            color: 'green',
            width: '100%',
            height: '100%'
             }} >
              
               {spaces}
            </div>
        );
    }

}



