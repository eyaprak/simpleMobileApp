import React from 'react'

class HelloWorld extends React.Component {
    render(){
        return(
            <h1>Hello <span style={{color:'red'}}>{this.props.name}</span></h1>
        );
    }
}

export default HelloWorld