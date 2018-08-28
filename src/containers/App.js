import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

const dataElements =
	[{
	id: 1,
	    text: 'clean room'
	}, {
	id: 2,
	    text: 'wash the dishes'
	}, {
	id: 3,
	    text: 'feed my dog'
	}, {
	id: 4,
	    text: 'feed my cat'
	}
	]

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: dataElements
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
            <Title title='ToDo App' number={this.state.data.length} />
            <TodoList  data={this.state.data} remove={(id) => this.removeTodo(id)} />

            </div>
        );
    }
}

export default App;