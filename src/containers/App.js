import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'Clean your room',
                    remove: this.removeTodo.bind(this),
                },
                {
                    id: 2,
                    text: 'Wash the dishes',
                    remove: this.removeTodo.bind(this),
                },
                {
                    id: 3,
                    text: 'Feed my cat',
                    remove: this.removeTodo.bind(this),
                },
                {
                    id: 4,
                    text: 'Cook the dinner',
                    remove: this.removeTodo.bind(this),
                }
            ]
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
                <Title title="TODO APP!!!" />
                <p className={style.number}>Number of tasks on my list: {this.state.data.length}</p>
                <TodoList list={this.state.data} />
            </div>
        );
    }
}

export default App;