import React from "react";
import Tree from "../components/Tree";
import EnrolmentPlanner from "../components/EnrolmentPlanner";

const Context = React.createContext();

class CourseTree extends React.Component {
    render() {
        return (
            <Context.Provider value={{ state: this.state, setCourses: (courses) => { this.setState({ courses: courses }); } }}>
                <div className="columns tree-page">
                    <div className="column is-9">
                        <Tree />
                    </div>
                    <div className="column is-3 right-panel">
                        <EnrolmentPlanner />
                    </div>
                </div>
            </Context.Provider>
        );
    }
}

export default CourseTree;