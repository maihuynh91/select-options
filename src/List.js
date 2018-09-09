import React,{Component} from 'react';
export default class List extends Component{
    constructor(){
        super();
        var animalList = ["Nhu Mai","Minh","Pig","Cat","Dog"]
        this.state = {selectedAnimal:"Pig",animalList:animalList,newAnimal:''};
    }
    handleClick(){
        alert(this.state.selectedAnimal)
    }
    getSelectedItem = (event) =>{
        //alert(event.target.value)
        this.setState({selectedAnimal:event.target.value})
    }

    addValue(){
        this.setState({animalList:[...this.state.animalList,this.state.newAnimal]})
    }
    updateNewAnimal(event){
        this.setState({newAnimal:event.target.value})
    }
    render(){
        var animalLi = []
        for(let i = 0 ; i< this.state.animalList.length;i++){
            animalLi[i] = <option value={this.state.animalList[i]}>{this.state.animalList[i]} </option> 
        }
        console.log(animalLi)
        return (
            <div>
                <select value={this.state.selectedAnimal} onChange={this.getSelectedItem}>

                    {animalLi}
        
                 </select>

                 <button onClick={() => this.handleClick()}>Click me to show</button>
                 <br/>
                 <button onClick={() =>this.addValue()}>Add New Animal</button>
                 <input type ="text" value={this.state.newAnimal} onChange = {(event) => {this.updateNewAnimal(event)}}/>
            </div>
        )
    }
}