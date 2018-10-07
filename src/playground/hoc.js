// Higher Order Component (HOC) - a component (HOC) that renders another component

// Advantages
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    //HOC
    //spread operator ...props and pass by to the children
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please do not share</p> }
            <WrappedComponent {...props} />
        </div>
    ); 
};

const requireAuthentication = (WrappedComponent) => {
    //HOC
    //spread operator ...props and pass by to the children
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view the info</p>
            )}  
        </div>
    ); 
};

// requireAuthentication

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='These are the details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details' />, document.getElementById('app'));