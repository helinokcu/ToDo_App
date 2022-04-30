import React from 'react'
import Form from './Form'
import TodoList from './TodoList';
import ContentFooter from './ContentFooter'

function Content() {
  return (
    <>
        <section className="main">
            <Form/>
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
        
            <TodoList/>
        </section>

        <ContentFooter/>
    </>
  )
}

export default Content