import React from 'react';
import style from './TodoForm.css'

const FormToDo = (props) => {
    return (
        <form onSubmit={props.onSubmit} className={style.TodoForm}>
            <label htmlFor= {'text'}>Add task</label>
            <input
                onChange={props.onChange}
                id={'text'}
                value={props.input}
            />
            <button type={'submit'} value='submit'>Add</button>
        </form>
    )
}


class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: ''
        }
    }

    handleChange(e) {
        let valueTodo = e.target.value;
        this.setState({input: valueTodo});
    }

    handleSubmit(e){
        e.preventDefault();
        let value = this.state.input;
        this.props.addTodo(value);
    }

    render(){
        return (
            <FormToDo onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} input={this.state.input}></FormToDo>
        )
    }
}

export default TodoForm;