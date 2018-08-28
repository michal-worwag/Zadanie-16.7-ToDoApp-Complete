import React from 'react';
import style from './TodoList.css';


class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className={style.TodoList}>
                {this.props.data.map((todo) => <li key={todo.id}> {todo.text} <a href='#' onClick= {() => this.props.remove(todo.id)}> X </a> </li>)}
            </ul>
        )
    }
}


export default TodoList;