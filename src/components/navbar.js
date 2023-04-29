import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='container navbar' display='flex'> 
                <h2 className='navbarattributes'>Website!</h2>
                <a className='navbarattributes' href="#">Link One</a>
                <br />
                <a className='navbarattributes' href="#">Link Two</a>
                <br />
                <br />
            </div>
           
        );
    }
}