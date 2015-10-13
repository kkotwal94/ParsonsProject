import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

import styles from 'scss/components/_admin';
import 'scss/main'

export default class Dashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state = UserStore.getState();
  }

  componentDidMount() {
    UserStore.listen(this._onChange);
  }

  componentWillUnmount() {
    UserStore.unlisten(this._onChange);
  }

  _onChange = () => {
    this.setState({
      user: UserStore.getState().user
    });
  }


  render() {
  	console.log(this.state.user);
    console.log(this.state.user.get('email'));
    console.log(this.state.user.get('id'));
    console.log(this.state.user.get('profile').get('firstName'));
    let firstName = this.state.user.get('profile').get('firstName');
    let lastName = this.state.user.get('profile').get('lastName');
    return (
      <div>
     

    <div className={styles['wrapper']}>
      <p className = "helloworld">Hello test</p>
        
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
           
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Parsons Problems</a>
            </div>
           
            <ul className="nav navbar-right top-nav">
             <div className = {styles['top-nav']}>
                <li className="dropdown">
                    <a href="#" className={styles['top-nava']}data-toggle="dropdown"><i className="fa fa-envelope"></i> <b className="caret"></b></a>
                    <ul className="dropdown-menu message-dropdown">
                        <li className="message-preview">
                            <a href="#">
                                <div className="media">
                                    <span className="pull-left">
                                        
                                    </span>
                                    <div className="media-body">
                                        <h5 className="media-heading"><strong>{firstName + " " + lastName}</strong>
                                        </h5>
                                        <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="message-preview">
                            <a href="#">
                                <div className="media">
                                    <span className="pull-left">
                                       
                                    </span>
                                    <div className="media-body">
                                        <h5 className="media-heading"><strong>{firstName + " " + lastName}</strong>
                                        </h5>
                                        <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="message-preview">
                            <a href="#">
                                <div className="media">
                                    <span className="pull-left">
                                        
                                    </span>
                                    <div className="media-body">
                                        <h5 className="media-heading"><strong>{firstName + " " + lastName}</strong>
                                        </h5>
                                        <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="message-footer">
                            <a href="#">Read All New Messages</a>
                        </li>
                    
                    </ul>

                </li>
                <li className="dropdown">
                    <a href="#" className={styles['top-nava']} data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></a>
                    <ul className="dropdown-menu alert-dropdown">
                        <li>
                            <a href="#">Alert Name <span className="label label-default">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-primary">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-success">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-info">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-warning">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span className="label label-danger">Alert Badge</span></a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">View All</a>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className={styles['top-nava']} data-toggle="dropdown"><i className="fa fa-user"></i>{firstName + " " + lastName} <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li>
                            <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
                </div>
            </ul>
             
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <div className={styles['side-nav']}>
                <ul className="nav navbar-nav side-nav">
                    <li className="active">
                        <a className={styles['items']} href="index.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
                    </li>
                    <li>
                        <a className={styles['items']} href="charts.html"><i className="fa fa-fw fa-bar-chart-o"></i> Profile</a>
                    </li>
                    <li>
                        <a className={styles['items']} href="tables.html"><i className="fa fa-fw fa-table"></i> Random Problems!</a>
                    </li>
                    <li>
                        <a className={styles['items']} href="forms.html"><i className="fa fa-fw fa-edit"></i> Assignments</a>
                    </li>
                    <li>
                        <a className={styles['items']} href="bootstrap-elements.html"><i className="fa fa-fw fa-desktop"></i> Sakai</a>
                    </li>
                    <li>
                        <a className={styles['items']} href="bootstrap-grid.html"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
                    </li>
                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo" className={styles['items']}><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></a>
                        <ul id="demo" className="collapse">
                            <li>
                                <a className={styles['dropdownstuff']} href="#">Dropdown Item</a>
                            </li>
                            <li>
                                <a className={styles['dropdownstuff']} href="#">Dropdown Item</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="about" className={styles['items']} href="blank-page.html"><i className="fa fa-fw fa-file"></i> About</Link>
                    </li>
                    <li>
                        <a className={styles['items']} href="index-rtl.html"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
                    </li>
                </ul>
              </div>
            </div>
            
        </nav>

        <div className={styles['page-wrapper']}>
          <div className ="container-fluid">
            <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li className="active">
                                <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                            <li>
                            
                            <Link to="about">About</Link>
                            </li>
                        </ol>
                    </div>
                </div>
          </div>
            
        </div>
        

    </div>
    
    
    </div>
    
    );
  }
}
