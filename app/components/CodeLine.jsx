import React from 'react';
import ParsonsStore from 'stores/ParsonsStore';
import ParsonsActions from 'actions/ParsonsActions';
import {ItemTypes} from './Constants';
import {DragSource} from 'react-dnd';

const codelineSource = {
	beginDrag(props) {
		console.log(props.id);
		ParsonsActions.sendSourceData(props.id);
		return {
			id: props.id
		};
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		connectDragPreview: connect.dragPreview(),
		isDragging: monitor.isDragging()
	};
}

@DragSource(ItemTypes.CODELINE, codelineSource, collect)
export default class CodeLine extends React.Component{

  constructor(props) {
    super(props);
    this.state = ParsonsStore.getState();
  }


  componentDidMount() {
    ParsonsStore.listen(this._onChange);
    }
  

  componentWillUnmount() {
    ParsonsStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
    	source: ParsonsStore.getState().source
    });
  }

    static propTypes: {
        lineContents: PropTypes.string,
        id: PropTypes.number,
        connectDragSource: PropTypes.func.isRequired,
        connectDragPreview: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired
    };

    render() {
    	const { connectDragSource, isDragging} = this.props;
        const { lineContents } = this.props;
        let source = this.state.source;
        return connectDragSource(
        	<div>{lineContents}</div>
        	);
    }

}

