import React from 'react';
import {Link, RouteHandler} from 'react-router';
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
  	//console.log(this.state.user);
    //console.log(this.state.user.get('email'));
    //console.log(this.state.user.get('id'));
    //console.log(this.state.user.get('profile').get('firstName'));
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
                <a className="navbar-brand">Parsons Problems</a>
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
                            <Link to="/dashboard/profile"><i className="fa fa-fw fa-user"></i> Profile</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/inbox"><i className="fa fa-fw fa-envelope"></i> Inbox</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/settings"><i className="fa fa-fw fa-gear"></i> Settings</Link>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="/logout"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
                </div>
            </ul>
             
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <div className={styles['side-nav']}>
                <ul className="nav navbar-nav side-nav">
                    <li>
                        <Link to="/dashboard/main" className={styles['items']}><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/profile" className={styles['items']}><i className="fa fa-user"></i> Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/randomproblem" className={styles['items']}><i className="fa fa-random"></i> Random Problems!</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/assignments" className={styles['items']}><i className="fa fa-pencil-square-o"></i> Assignments</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/createproblem" className={styles['items']}><i className="fa fa-pencil-square"></i> Generate Problems</Link>
                    </li>
                    <li>
                        <a className={styles['items']} href="https://sakai.udel.edu/"><i className="fa fa-retweet"></i> Sakai</a>
                    </li>
                    <li>
                        <Link to="/dashboard/statistics" className={styles['items']}><i className="fa fa-bar-chart"></i> Statistics</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/chat" href="javascript:;" data-toggle="collapse" data-target="#demo" className={styles['items']}><i className="fa fa-weixin"></i> Chatroom <i className="fa fa-fw fa-caret-down"></i></Link>
                        <ul id="demo" className="collapse">
                            <li>
                                <a className={styles['dropdownstuff']} href="#">Chat Room 1</a>
                            </li>
                            <li>
                                <a className={styles['dropdownstuff']} href="#">Chat Room 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/dashboard/about' className={styles['items']}><i className="fa fa-info"></i> About</Link>
                    </li>
                    <li>
                        <a className={styles['items']} href="https://github.com/kkotwal94/ParsonsProject"><i className="fa fa-github"></i> Github</a>
                    </li>
                </ul>
              </div>
            </div>
            
        </nav>

        <div className={styles['page-wrapper']}>
          {this.props.children}
         </div>
    
    
    </div>
    </div>
    
    );
  }
}
