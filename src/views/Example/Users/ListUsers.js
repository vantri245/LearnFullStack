import React from "react";
import './ListUsers.scss';
import axios from "axios";
class ListUsers extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=1")
        this.setState({
            listUsers: res.data ? res.data.data : []
        })
        console.log(this.state.listUsers.data.id)

    }
    render() {
        let { listUsers } = this.state
        return (
            <div>
                <h3>Welcome to ListUsers</h3>
                <div className="list-container">
                    <div className="list-content">
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => {
                                return (
                                    <div className="list-elements" key={item.id}>
                                        {item.id} - {item.first_name} - {item.last_name}
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}
export default ListUsers