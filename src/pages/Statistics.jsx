import React from "react";

export default function Statistics() {
    return (
        <div className="container">
            <h1 className="is-text-4"></h1>
            <div className="card">
                <div className="card-content">
                    <h2 className="title is-2 grade">0</h2>
                    <p className="subtitle">Total Users</p>
                    <p className="description">The total number of users in the database, including both students and administrators.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    <h2 className="title is-2 grade">0</h2>
                    <p className="subtitle">Total Courses</p>
                    <p className="description">The total number of courses in the database.</p>
                </div>
            </div>
        </div>
    );
}
