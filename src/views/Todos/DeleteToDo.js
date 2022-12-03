import React from "react";
class DeleteToDo extends React.Component {
    clickDeleteButton = () => {
        this.props.deleteListToDo(this.props.id)
        alert("Delete successfully")
    }
    render() {
        return (
            <button className="btn-edit" type="button" onClick={() => this.clickDeleteButton()}>
                Delete
            </button>
        )
    }
}
export default DeleteToDo