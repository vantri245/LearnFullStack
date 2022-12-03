import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import DeleteToDo from "./DeleteToDo";
class ListToDo extends React.Component {
    state = {
        listToDo: [
            { id: '1', action: "Do homework" },
            { id: '2', action: "Coding" },
            { id: '3', action: "Fixing bugs" }
        ],
        editToDo: {

        }
    }
    addListToDo = (listToDo) => {
        let currentList = [...this.state.listToDo, listToDo]
        this.setState({
            listToDo: currentList
        })
    }

    deleteListToDo = (id) => {
        let currentList = this.state.listToDo.filter(item => item.id !== id)
        this.setState({
            listToDo: currentList
        })
    }
    clickEitButton = (editItem) => {

        let { listToDo, editToDo } = this.state
        if (this.isEmpty(editToDo) === false && editItem.id === editToDo.id) {
            let listToDoCoppy = [...listToDo]
            let objIndex = listToDoCoppy.findIndex((item => item.id === editItem.id))
            listToDoCoppy[objIndex].action = editToDo.action
            this.setState({
                listToDo: listToDoCoppy,
                editToDo: {}
            })
            return;
        }

        this.setState({
            editToDo: editItem
        })
    }

    isEmpty = (obj) => {
        return Object.keys(obj).length === 0;
    }

    actinOnChange = (event) => {
        let editToDoCoppy = { ...this.state.editToDo }
        editToDoCoppy.action = event.target.value
        this.setState({
            editToDo: editToDoCoppy
        })
    }


    render() {
        let { listToDo, editToDo } = this.state
        return (
            <>
                <div className="list-todo-container">
                    <AddToDo
                        addListToDo={this.addListToDo}
                    />
                    <div className="list-todo-contents">

                        {listToDo && listToDo.length > 0 &&
                            listToDo.map((item, index) => {
                                return (
                                    <div className="list-content" key={item.id}>
                                        <>
                                            {this.isEmpty(editToDo) === true ?
                                                <span>{item.action}</span>
                                                :
                                                <>
                                                    {
                                                        editToDo.id === item.id ?
                                                            <input value={editToDo.action}
                                                                onChange={(event) => this.actinOnChange(event)} />
                                                            :
                                                            <span>{item.action}</span>
                                                    }
                                                </>
                                            }
                                            <button className="btn-edit" type="button" onClick={() => this.clickEitButton(item)}>
                                                {!this.isEmpty(editToDo) && editToDo.id === item.id ?
                                                    'Save' : 'Edit'
                                                }
                                            </button>
                                            <DeleteToDo
                                                deleteListToDo={this.deleteListToDo}
                                                id={item.id} />



                                        </>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}
export default ListToDo