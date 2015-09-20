import React from 'react';
import {Link,State, Route} from 'react-router';
import Router from 'react-router';

export default class NotFound extends React.Component {
constructor(props) {
  super(props);
}

componentDidMount() {
  
	}

componentWillUnmount() {
  
	}


render() {
  return(
    <div>
    <main>
    <div className = "readME">
    <h1>This is a 404 NOT FOUND Page</h1>
    <h1>So why were you directed here?</h1>
    <p>You tried to go somewhere that doesnt exist!</p>
    <p>Return back to dashboard and check it out or view the database and inspect it. <Link to = "dashboard"><a style={{color: "Black"}}>See ya</a></Link></p>
    </div>
    </main>
    </div>
    )
}
}