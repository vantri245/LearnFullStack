import React from "react";
class ChildComponents extends React.Component {
    state = {
        showJob: false
    }
    clickShowHideButton = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    clickDeleteButton = (job_id) => {
        this.props.deleteJob(job_id)
    }


    render() {
        let { name, age, address, job } = this.props
        let { showJob } = this.state

        return (
            <>
                <div>
                    <div> Name: {name}</div>
                    <div>Age: {age}</div>
                    <div>Address: {address}</div>
                </div>
                {showJob === false ?

                    <div>
                        <button onClick={() => this.clickShowHideButton()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div>
                            {
                                job.map((item, index) => {
                                    return (
                                        <div key={item.id} >
                                            <div>
                                                Job_name: {item.job_name} - Salary: {item.salary}  <button onClick={() => this.clickDeleteButton(item.id)}> x </button>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.clickShowHideButton()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>

        )
    }
}
export default ChildComponents