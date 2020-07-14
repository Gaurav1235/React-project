import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleBtn from './GoogleBtn';
import {Component} from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo';
import Resource from "./Resource";
//   864814077514-1u2j1dqlvj1qev34os4med4uush4mnnm.apps.googleusercontent.com


class App extends Component{

    state ={
        todoList:[
            {id:0,item:"Project 1"},
            {id:1,item:"Project 2"},
        ],
        resources:[
            {id: 0,display:0, title: ["Gaurav"," Kunal"]},
            {id:1,display:0,title: ["Harsh", " Rahul"]}
        ],
        displayResources:false,

    }
    displayResource = (idx) => {


        const newResources=this.state.resources.map((resource, index) => {
            if(resource.id==idx) {
                resource.display= !resource.display
            }
        })
        this.setState({
            resources:newResources,
            displayResources:!this.state.displayResources
        })
    }
    addItem=(newTodo)=>{
        const newTodoList=[...this.state.todoList,{id:this.state.todoList.length,item:newTodo}];
        this.setState({
            todoList:newTodoList,
        })

    }

    render(){
        let resources=null;
        if(this.state.displayResources) {
            resources = (
                <div>
                    {this.state.resources.map((resource, index) => {
                        if (resource.display) {
                            return <Resource key={resource.id}
                                             title={resource.title}/>
                        }
                    })}
                </div>
            )
        }

        return (
            <div>
                <div>
                    <p> The 1st heading </p>
                    <h1> The 1st heading </h1>
                </div>
                <TodoList list={this.state.todoList } displayResource={this.displayResource}/>
                <AddTodo addItem={this.addItem}  />
                {resources}
            </div>

        );
    }

}

export default App;



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

