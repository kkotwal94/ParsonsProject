import React from 'react';
import {Link} from 'react-router';


export default class RProblem extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.params.id);
    return (
      <div>
      <div className ="container-fluid">
          
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Random Problem Selected <small>Complete this problem!</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> <Link to ="/dashboard/main">Dashboard</Link>
                            </li>
                            <li>
                            
                            Problem: {this.props.params.id}
                            </li>
                        </ol>
                        <div>
                        Where random problem should be should be : {this.props.params.id}
                        </div>
                    </div>
                </div>
          </div>
            
        </div>

    );
  }
}
