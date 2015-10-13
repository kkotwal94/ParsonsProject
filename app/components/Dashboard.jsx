import React from 'react';
import {Link} from 'react-router';
import UserActions from 'actions/UserActions';
import UserStore from 'stores/UserStore';
import Immutable from 'immutable';

import styles from 'scss/components/_adminLTE';

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
    return (
      <div>
      <div>

      <body className={styles["hold-transition skin-blue sidebar-mini"]}>
    <div className={styles["wrapper"]}>

 
      <header className={styles["main-header"]}>

       
        <a href="index2.html" className={styles["logo"]}>
         
          <span className={styles["logo-main"]}><b>A</b>LT</span>
         
          <span className={styles["logo-lg"]}><b>Admin</b>LTE</span>
        </a>

        
        <nav className={styles["navbar navbar-static-top"]} role="navigation">
          
          <a href="#" className={styles["sidebar-toggle"]} data-toggle="offcanvas" role="button">
            <span className={styles["sr-only"]}>Toggle navigation</span>
          </a>
          
          <div className={styles["navbar-custom-menu"]}>
            <ul className={styles["nav navbar-nav"]}>
             
              <li className={styles["dropdown messages-menu"]}>
                
                <a href="#" className={styles["dropdown-toggle"]} data-toggle="dropdown">
                  <i className="fa fa-envelope-o"></i>
                  <span className={styles["label label-success"]}>4</span>
                </a>
                <ul className={styles["dropdown-menu"]}>
                  <li className={styles["header"]}>You have 4 messages</li>
                  <li>
                   
                    <ul className={styles["menu"]}>
                      <li>
                        <a href="#">
                          <div className={styles["pull-left"]}>
     
                            
                          </div>
                    
                          <h4>
                            Support Team
                            <small><i className="fa fa-clock-o"></i> 5 mins</small>
                          </h4>
                         
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles["footer"]}><a href="#">See All Messages</a></li>
                </ul>
              </li>

             
              <li className={styles["dropdown notifications-menu"]}>
                
                <a href="#" className={styles["dropdown-toggle"]} data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
                <ul className={styles["dropdown-toggle"]}>
                  <li className={styles["header"]}>You have 10 notifications</li>
                  <li>
                    
                    <ul className={styles["menu"]}>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"></i> 5 new members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles["footer"]}><a href="#">View all</a></li>
                </ul>
              </li>
             
              <li className={styles["dropdown tasks-menu"]}>
                
                <a href="#" className={styles["dropdown-toggle"]} data-toggle="dropdown">
                  <i className="fa fa-flag-o"></i>
                  <span className="label label-danger">9</span>
                </a>
                <ul className={styles["dropdown-menu"]}>
                  <li className={styles["header"]}>You have 9 tasks</li>
                  <li>
                    
                    <ul className={styles["menu"]}>
                      <li>
                        <a href="#">
                         
                          <h3>
                            Design some buttons
                            <small className={styles["pull-right"]}>20%</small>
                          </h3>
                          
                          <div className={styles["progress xs"]}>
                            
                            <div className={styles["progress-bar progress-bar-aqua"]} style={{width: '20%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                              <span className={styles["sr-only"]}>20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles["footer"]}>
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>
          
              <li className={styles["dropdown user user-menu"]}>
               
                <a href="#" className={styles["dropdown-menu"]} data-toggle="dropdown">
                
                  
                  
                  <span className={styles["hidden-xs"]}>Alexander Pierce</span>
                </a>
                <ul className={styles["dropdown-menu"]}>
                  
                  <li className={styles["user-header"]}>
                    
                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  
                  <li className={styles["user-body"]}>
                    <div className="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div className="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div>
                  </li>
                  
                  <li className={styles["user-footer"]}>
                    <div className={styles["pull-left"]}>
                      <a href="#" className="btn btn-default btn-flat">Profile</a>
                    </div>
                    <div className={styles["pull-right"]}>
                      <a href="/logout" className="btn btn-default btn-flat">Sign out</a>
                    </div>
                  </li>
                </ul>
              </li>
           
              <li>
                <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </div>
      </body>
      </div>

    </div>
    );
  }
}
