import React from 'react';

export default class Loginform extends React.Component {
    render() {
        return (
            <form className='login'>
                <h3>Log In</h3>
                <div>
                    <label>Username</label>
                    <input type='text' />
                </div>
                <br/>
                <div>
                    <label>Password</label>
                    <input type='text'/>
                </div>
                <br/>
                <button className='btn btn-primary'>Submit</button>
            </form>
        )
    }
}