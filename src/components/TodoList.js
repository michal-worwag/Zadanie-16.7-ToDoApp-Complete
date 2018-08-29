import React from 'react';
import Todo from '../components/Todo';
import style from './TodoList.css';


class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className={style.TodoList}>

                {this.props.data.map((todo) => <Todo key={todo.id} todo={todo} remove={this.props.remove}/>)}

            </ul>
        )
    }
}


export default TodoList;