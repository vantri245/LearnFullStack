import React from "react";
class MyComponents extends React.Component {
    /*
    JSX => vì JSX luôn return về 1 khối div nên nếu muốn nó return nhiều khối div thì phải bọc bằng fragment
    <></> => Fragment
    */
    state = {
        firstName: '',
        lastName: ''
    }
    firstNameOnChangeEvent = (event) => {
        this.setState(
            {
                firstName: event.target.value
            }
        )
    }

    lastNameOnChangeEvent = (event) => {
        this.setState(
            {
                lastName: event.target.value
            }
        )
    }

    submitOnClickEvent = (event) => {
        event.preventDefault()
        alert('Fist name: ' + this.state.firstName + 'Last name: ' + this.state.lastName)

    }


    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br></br>
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.firstNameOnChangeEvent(event)} /><br></br>
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.lastNameOnChangeEvent(event)} /><br></br>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.submitOnClickEvent(event)} />
                </form>
            </>
        )
    }
}
export default MyComponents