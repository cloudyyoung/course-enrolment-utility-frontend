import React from "react";

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalUsers: 0,
            totalCourses: 0,
        };
    }

    render() {
        return (
            <div className="container">
                <h1 className="is-text-4"></h1>
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