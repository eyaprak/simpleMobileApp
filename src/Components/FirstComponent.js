import React from 'react'


const FirstComponent = props => {
    const veriler = props.liste.map((data,index)=>{
        return (
        <li key={index}>
            {data}
        </li>
        );
    })
    
    return(
            <div>
            {props.deneme}<br></br>
            deneme Fİrst Component
            <hr></hr><br/>
            <ul style={{color:'red'}}>
                {veriler}
            </ul>
            <button onClick={props.tiklamaEvent}>Bas baba</button>
            
        </div>
    );
}

export default FirstComponent;

/*
export class FirstComponent extends React.Component {
    render(){
        return(
            <div>
                {this.props.deneme}<br></br>
                deneme Fİrst Component
            </div>
        )
    }
}
*/