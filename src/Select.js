import React,{Component} from 'react';
export default class Select extends Component{
    constructor(){
        super();
        /* this.showFruit = this.showFruit.bind(this) */
        this.state = {fruits : ["Peach","Mango","Strawberry"],fruitValue:0,newFruit:''}
    }
    showFruit(){
        alert("You selected: "+this.state.fruits[this.state.fruitValue]);
    }
    handleValueChange(event){
        this.setState({fruitValue:event.target.value})
    }
    addFruit(event){
        event.preventDefault();
        this.setState({fruits:[...this.state.fruits,this.state.newFruit]})
    }
    updateNewFruitName(event){
        this.setState({newFruit:event.target.value})
    }
    render(){
        let options =[];
        for(let i=0;i<this.state.fruits.length;i++){
            options[i] = <option key={i} value={i}>{this.state.fruits[i]}</option>
        }
        return (
        <div>
            <select onChange={(event) => this.handleValueChange(event)}>
                {options}
            </select>
            <input type="button" value="Click me" onClick={() => this.showFruit()}/><br/>
            <input type="text" value={this.state.newFruit} onChange={(event) => {this.updateNewFruitName(event)}}/>
            <input type="submit" value="Add new fruit" onClick = {(event)=>{this.addFruit(event)}}/>
        </div>
    )
}
}