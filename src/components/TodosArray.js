import React, { Component } from 'react'

export default class TodosArray extends Component {
    render() {
        const {items} = this.props
        console.log(this.props)
        return (
            <div>

             
                <div className="list-group">
                  {items.map(item => {
                      return <ul key={item.id} className="list-group">
                          <li className="list-group-item active">{item.item}</li>
                          <li className="list-group-item">{item.id}</li>
                      </ul>
                  })}
                    
                    <input name="clear" id="" className="btn btn-danger" type="button" value="Delete"  />
                </div>
            </div>
        )
    }
}
