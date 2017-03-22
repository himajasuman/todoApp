import { h, Component } from 'preact';
import style from './style';

export default class Todo extends Component {

    constructor() {
        super();
        // set initial time:
        this.items = [];
        this.currentTodo = '';
    }

	// update the current time
	addTodoTolist() {
		this.items += '<li>'+ this.currentTodo +'</li>';
	}

    setCurrentTodo = e => {
        this.currentTodo = e.target.value;
        this.items += '<li>'+ this.currentTodo +'</li>';
    };
	// Note: `user` comes from the URL, courtesy of our router
	render() {
		return (
            <div>
                <span>
                    <input type="text" onInput={ this.setCurrentTodo } placeholder="todo" />
                    <button onClick={ this.addTodoTolist }>Add</button>
                </span>
                <h1>Todo List</h1>
                <ul>
                    { this.items }
                </ul>
            </div>
		);
	}
}
