import React, {Component} from 'react';

// function Hello(props){
//     return <h1>{props.text}</h1>
// }

// export default Hello;

class Introduction extends Component {
    constructor (props) {
        super(props);
        this.state = {
            text: props.text,
            otherText:"",
            hasLoaded:false
        }
    }
    render(){
        if(this.state.hasLoaded === true){
            return (
                <React.Fragment>
                    <h1>{this.props.sentence}</h1>
                    <h1>{this.state.text}</h1>
                    <input 
                        placeholder={this.state.text} 
                        onChange={ (event) => this.handleChange(event.target.value)}
                    />
                    <button onClick={this.handleButton}>Click</button>
                </React.Fragment>
    
            );
        } else {
            return(
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleButton}>Click</button>
                </React.Fragment>
            )
        }
    }
    handleChange= (value)=>{
        this.setState({otherText:value})
    }
    handleButton=(e)=>{
        this.setState({hasLoaded:true})
    }
    componentDidMount=()=>{
        this.setState({hasLoaded:true})
    }
}

export default Introduction;