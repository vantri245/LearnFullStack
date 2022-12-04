import React from "react";
import './ListToDo.scss';
class ListToDo extends React.Component {
    state = {
        listToDo: [
            { id: 1, action: "Do homework" },
            { id: 2, action: "Reading Book" },
            { id: 3, action: "Cooking" }
        ],
        actionInput: '',
        editToDo: {}
    }

    inputAction = (event) => {
        this.setState({
            actionInput: event.target.value
        })
    }

    clickAddBtn = () => {
        if (this.state.actionInput === '') {
            alert('Please input action')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            action: this.state.actionInput
        }
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })
    }

    clickDeleteBtn = (todo) => {
        let currentArr = this.state.listToDo.filter(item => item.id !== todo.id)
        this.setState({
            listToDo: currentArr
        })
        alert("Delete action successfully")
    }

    clickEditBtn = (todo) => {
        let { listToDo, editToDo } = this.state
        if (this.isEmpty(editToDo) === false && editToDo.id === todo.id) {

            let listToDoCoppy = [...listToDo];
            let index = listToDoCoppy.findIndex(item => item.id === todo.id)
            listToDoCoppy[index].action = editToDo.action
            this.setState({
                listToDo: listToDoCoppy,
                editToDo: {}
            })
            return;
        }

        this.setState({
            editToDo: todo
        })
    }

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    editAction = (event) => {
        let editToDoCoppy = { ...this.state.editToDo }
        editToDoCoppy.action = event.target.value
        this.setState({
            editToDo: editToDoCoppy
        })
    }

    render() {
        let { listToDo, actionInput, editToDo } = this.state
        return (
            <div className="list-todo-container">
                <div className="list-todo-add">
                    <input type="text" value={actionInput} onChange={(event) => this.inputAction(event)} />
                    <button type="button" onClick={() => this.clickAddBtn()}>
                        Add
                    </button>
                </div>
                <div className="list-todo-contents">
                    {
                        listToDo.map((item, index) => {
                            return (

                                <div className="list-content" key={item.id}>
                                    {this.isEmpty(editToDo) === true ?
                                        <span>{item.action} </span>
                                        :
                                        <>
                                            {editToDo.id === item.id ?
                                                <input type="text" value={editToDo.action} onChange={(event) => this.editAction(event)} />
                                                :
                                                <span>{item.action} </span>
                                            }
                                        </>

                                    }

                                    <button className="btn-edit" onClick={() => this.clickEditBtn(item)}>
                                        {this.isEmpty(editToDo) === false && editToDo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button onClick={() => this.clickDeleteBtn(item)}>
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListToDo