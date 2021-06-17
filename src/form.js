import React from 'react';


export class Form extends React.Component{


    constructor(props){
        super(props);
        this.state= {
            value: 'Başlangıç değeri'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
        //console.log(event.target.value);
    }
    
    handleSubmit(event){
        alert("göndedrilen değer:" + this.state.value)
        this.props.yeniListe(this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <input type="text" id="input" value={this.state.value} onChange={this.handleChange} />
                </form>
                <button onClick={this.handleSubmit.bind(this)}>Gönder</button>
            </div>
        );
    }
}