import React from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes} from './Constants';
import $ from 'jquery';
import Grid from './Grid';
import ParsonsStore from 'stores/ParsonsStore';
import ParsonsActions from 'actions/ParsonsActions';

let randomArray = ParsonsStore.getState().randomProblem;
let source = ParsonsStore.getState().source;

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}


    const lineTarget = {
        drop(props, monitor) {
            //console.log("DROPPED");
            console.log(props.id);
            swap(props.id);
        }
    }

    let swap = (id) => {
        console.log(randomArray);
        console.log(source);
        let temp = randomArray[source];
        randomArray[source] = randomArray[id];
        randomArray[id] = temp;

        ParsonsActions.updateRandomArray(randomArray);
    }

@DropTarget(ItemTypes.CODELINE, lineTarget, collect)
export default class GridSpace extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = ParsonsStore.getState();
        this.source = ParsonsStore.getState().source;
    }




    static propTypes : {
        gray: PropTypes.bool,
        id: PropTypes.number,
        answeringArray: PropTypes.array
    }
/*
    renderOverlay(color) {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }} />
    );
  }
*/
    render() {
        const { gray } = this.props;
        const fill = gray ? 'gray' : 'white';
        const stroke = gray ? 'white' : 'gray';

        const { connectDropTarget, isOver, children} = this.props;

        const isGreen = isOver ? 'green' : fill;
        return connectDropTarget (
            <div>
            <div style={{ 
            backgroundColor: isGreen,
            color: stroke,
            width: '100%',
            height: '100%'
             }} >
                {this.props.children}

            </div>
            
        
            </div>
            
        );
    }

}