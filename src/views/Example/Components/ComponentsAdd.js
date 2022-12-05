import React from "react";
class ComponentsAdd extends React.Component {
    state = {
        id: '',
        job_name: '',
        salary: ''
    }

    submitOnClickEvent = (event) => {
        event.preventDefault()
        if (this.state.job_name === '' || this.state.salary === '') {
            alert('Please input job name and salary')
            return;
        }
        this.setState({
            id: Math.floor(Math.random() * 1000)
        })
        this.props.addJob(this.state)
        this.setState({
            job_name: '',
            salary: ''
        })
    }

    job_nameOnChangeEvent = (event) => {
        this.setState({
            job_name: event.target.value
        })
    }

    salaryOnChangeEvent = (event) => {
        this.setState({
            salary: event.target.value
        })
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