import React from "react";
class ComponentsAdd extends React.Component {
    state = {
        job_name: '',
        salary: ''
    }

    job_nameOnChangeEvent = (event) => {
        this.setState(
            {
                job_name: event.target.value
            }
        )
    }

    salaryOnChangeEvent = (event) => {
        this.setState(
            {
                salary: event.target.value
            }
        )
    }

    submitOnClickEvent = (event) => {
        event.preventDefault()
        alert('Job name: ' + this.state.job_name + 'Salary: ' + this.state.salary)

    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">Job name:</label><br></br>
                    <input
                        type="text"
                        value={this.state.job_name}
                        onChange={(event) => this.job_nameOnChangeEvent(event)} /><br></br>
                    <label htmlFor="lname">Salary:</label><br></br>
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.salaryOnChangeEvent(event)} /><br></br>
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.submitOnClickEvent(event)} />
                </form>
            </div>
        )
    }
}
export default ComponentsAdd