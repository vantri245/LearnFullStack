import React from "react";
import ChildComponents from "./ChildComponents";
import ComponentsAdd from "./ComponentsAdd";
class MyComponents extends React.Component {
    state = {
        arrJob: [
            { id: 1, job_name: 'Developer', salary: "500 $" },
            { id: 2, job_name: 'Tester', salary: "400 $" },
            { id: 3, job_name: 'Project Manager', salary: "1000 $" }
        ]
    }

    addJob = (job) => {
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    deleteJob = (job_id) => {
        let currentArr = this.state.arrJob.filter(item => item.id !== job_id)
        this.setState({
            arrJob: currentArr
        })
    }



    render() {
        return (
            <>
                <ComponentsAdd
                    addJob={this.addJob}
                />

                <ChildComponents
                    name={'Vo Van Tri'}
                    age={'25'}
                    address={'HCM'}
                    job={this.state.arrJob}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}
export default MyComponents