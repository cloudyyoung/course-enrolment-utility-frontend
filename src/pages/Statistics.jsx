import React from "react";
import axios from "axios";

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalUsers: 0,
            totalCourses: 0,
        };
    }

    componentDidMount() {
        axios.get("/api/account/admin/statistics")
            .then(res => {
                this.setState({
                    totalUsers: res.data.totalUsers,
                    totalCourses: res.data.totalCourses,
                });
                console.log(res.data);
            })
            .catch(err => {
                window.location.href = "/tree";
                console.log(err);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <h2 className="title is-2 grade">{ this.state.totalUsers }</h2>
                        <p className="subtitle">Total Users</p>
                        <p className="description">The total number of users in the database, including both students and administrators.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2 className="title is-2 grade">{ this.state.totalCourses }</h2>
                        <p className="subtitle">Total Courses</p>
                        <p className="description">The total number of courses in the database.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistics;