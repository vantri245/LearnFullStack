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
    render() {
        return (
            <>
                <ComponentsAdd />
                <ChildComponents
                    name={'Child name'}
                    age={'25'}
                    address={'HCM'}
                    job={this.state.arrJob}

                />

            </>
        )
    }
}
export default MyComponents