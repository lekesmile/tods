import React, { Component } from 'react'

export default class TodosArray extends Component {
    render() {
        const {items, deleteTodosArray} = this.props
        console.log(this.props)
        return (
            <div>

             
                <div className="list-group">
                  {items.map(item => {
                      return <ul key={item.id} className="list-group my-4">
                          <li className="list-group-item active">{item.item}</li>
                          <li className="list-group-item">{item.id}</li>
                          <a name="" id="" className="btn btn-info" href="#" role="button">Edit</a>
                          <a name="" id="" className="btn btn-danger" href="#" role="button">Delete</a>

                      </ul>
                  })}
                    
                    <input onClick={deleteTodosArray} name="clear" id="" className="btn btn-danger mt-5" type="button" value="Delete All todos"  />
                </div>
            </div>
        )
    }
}
