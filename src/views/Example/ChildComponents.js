import React from "react";
class ChildComponents extends React.Component {
    /*
    JSX => vì JSX luôn return về 1 khối div nên nếu muốn nó return nhiều khối div thì phải bọc bằng fragment
    <></> => Fragment
    */
    state = {
        showJob: false
    }

    clickShowHideEvent = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    render() {
        let { name, age, address, job } = this.props
        let { showJob } = this.state
        /*    let a = showJob === false ? 'showJob = true' : 'showJob = false';  */
        return (

            <>
                <div> Child_name: {name}</div>
                <div> Child_age: {age}</div>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.clickShowHideEvent()}>
                            Show
                        </button>
                    </div>
                    :
                    <div>

                        {

                            job.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        <div>Job: {item.job_name} - Salary: {item.salary} </div>
                                    </div>
                                )
                            })
                        }
                        <div>
                            <button onClick={() => this.clickShowHideEvent()}>
                                Hide
                            </button>
                        </div>
                    </div>
                }

            </>
        )
    }
}
export default ChildComponents