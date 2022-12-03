import React from "react";
class AddToDo extends React.Component {

    state = {
        action: '',
        id: ''
    }

    clickAddButton = () => {
        if (this.state.action === '') {
            alert("please input action")
            return;
        }
        this.props.addListToDo(this.state)
    }

    inputAction = (event) => {
        this.setState({
            action: event.target.value,
            id: Math.floor(Math.random() * 1000)
        })
    }
    render() {

        return (

            < div className="add-todo" >
                <input type="text"
                    value={this.state.action}
                    onChange={(event) => this.inputAction(event)}
                />
                <button className="btn-add" type="button" onClick={() => this.clickAddButton()}>
                    Add
                </button>
            </div >
        )
    }
}
export default AddToDo