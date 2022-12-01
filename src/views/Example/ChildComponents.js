import React from "react";
class ChildComponents extends React.Component {
    state = {
        showJob: false
    }
    showHideOnClick = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    render() {
        let { name, age, address, job } = this.props
        let { showJob } = this.state
        return (
            <>
                <div>{name}</div>
                <div>{age}</div>
                <div>{address}</div>

                {showJob === false ?
                    <div>
                        <button onClick={() => this.showHideOnClick()}>
                            Show
                        </button>
                    </div>
                    :
                    <div>
                        {
                            job.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <div>Job: {item.job_name} - Salary: {item.salary}</div>
                                    </div>
                                )
                            })
                        }
                        <button onClick={() => this.showHideOnClick()}>
                            Hide
                        </button>
                    </div>
                }
            </>
        )
    }
}
export default ChildComponents