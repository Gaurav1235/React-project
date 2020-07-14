import React from 'react';
import {Component} from 'react';

class TodoList extends Component{
	constructor() {
		super();
	}

	render()
	{
		return (
			<div>
				<p>
					The time Jungle
				</p>
				<ul>
					{this.props.list.map((todo, i) => {
							return (
								<li>
									<button key={i} onClick={() => this.props.displayResource(todo.id)}>
										{todo.item}
									</button>

								</li>
							)
						}
					)}
				</ul>
			</div>

		);
	}

}

export default TodoList;
