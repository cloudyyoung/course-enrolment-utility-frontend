import React from "react";
import Tree from "../components/Tree";
import EnrolmentPlanner from "../components/EnrolmentPlanner";

class CourseTree extends React.Component {
    render() {
        return (
            <div className="columns tree-page">
                <div className="column is-9">
                    <Tree />
                </div>
                <div className="column is-3 right-panel">
                    <EnrolmentPlanner />
                </div>
            </div>
        );
    }
}

export default CourseTree;