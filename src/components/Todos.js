import React, { Component } from 'react'

export default class Todos extends Component {

    render() {
        const {handleSubmit, handleInput, item} = this.props
        console.log(this.props)
        return (
            <div>
             <div className="col-xs-1-12">
                 <form className="form-group" onSubmit={handleSubmit}>
                   <label htmlFor="">Message</label>
                   <input 
                   type="text"
                   item={item}
                   className="form-control"
                   placeholder="add todos"
                   onChange={handleInput}
                   />
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                 </form>
             </div>
            </div>
        )
    }
}
