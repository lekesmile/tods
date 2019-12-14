
import 'bootstrap/dist/css/bootstrap.min.css'
import Todos from './components/Todos';
import TodosArray from './components/TodosArray';
import './App.css';
import uuid from 'uuid'


import React, { Component } from 'react'

export default class App extends Component {
state={
  items:[],
  id: 0,
  item: ''
}
  
  handleInput =(e)=>{
    this.setState({
      item : e.target.value
    })
  }


  handleSubmit = e => {
     e.preventDefault();

    const newTodo = {
        id:uuid(),
        item: this.state.item
     }
    
     const updatedItem = [...this.state.items, newTodo]
     this.setState({
      items: updatedItem ,
      item: ' '
     })
     
     
  }

  deleteTodosArray =() =>{
    this.setState({
      items: []
    })
  }

  
  render() {
    return (
      <div className="container mt-5">
      <h1>Add your todos</h1>
      <Todos
       item={this.state.item}
       handleSubmit={this.handleSubmit}
       handleInput={this.handleInput}
      />
      <TodosArray items={this.state.items} deleteTodosArray={this.deleteTodosArray} />
     </div>
    )
  }
}
