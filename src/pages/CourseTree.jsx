import React from "react";
import Tree from "../components/Tree";
import SemesterPlanner from "../components/SemesterPlanner";

class CourseTree extends React.Component {
    render() {
        return (
            <div className="columns tree-page">
                <div className="column is-9">
                    <Tree />
                </div>
                <div className="column is-3 right-panel">
                    <SemesterPlanner />
                </div>
            </div>
        );
    }
}

export default CourseTree;