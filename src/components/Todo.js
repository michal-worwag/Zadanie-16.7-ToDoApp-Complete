import React from 'react';
import style from './Todo.css';

const Todo = (props) => {
	return (
		<li className={style.Todo}>
			<a href={'#'}>
				<p>{props.todo.text}</p>
				<button onClick={() => props.remove(props.todo.id)}>X</button>

			</a>
		</li>
	);
}

export default Todo;