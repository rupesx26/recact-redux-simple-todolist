import React from 'react'
//import {connect } from 'react-redux'

const AddTodo = () => {
    let input

    return(
        <div>
        <form onSubmit={
            e=>{
                e.preventDefault()
                if(!input.value.trim()) {
                    return
                }
                //Dispatch

            }}>
            <input ref={node => input = node} />
            <button type="submit">Add Todo</button>
            </form>
        </div>
    )
} 

export default AddTodo