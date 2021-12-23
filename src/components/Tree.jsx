import React from "react";
import ReactFlow from "react-flow-renderer";
import axios from "axios";

import CourseNode from "./CourseNode";
import Modal, { ModalBody, ModalFooter } from "./Modal";

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeTypes: {
                course: CourseNode,
            },
            elements: [],
            courses: [],
            isModalActive: false,
            currentCourse: {},
            currentSemesterDisplay: "",
        };

        this.onNodeDragStart = this.onNodeDragStart.bind(this);
        this.onElementClick = this.onElementClick.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    componentDidMount() {
        axios.get("/api/course")
            .then(res => {
                console.log(res.data);

                if (res.data.error) {
                    console.log("error");
                } else {
                    this.setState({ courses: res.data });

                    let levels = {};
                    let element = [];

                    for (let course of this.state.courses) {
                        let number = parseInt(course.number);
                        let level = Math.floor(number / 100);

                        if (!levels[level]) {
                            levels[level] = [];
                        }

                        levels[level].push(course);
                    }

                    for (let level in levels) {
                        for (let index in levels[level]) {
                            let course = levels[level][index];
                            let courseKey = course.code + " " + course.number;
                            let x = index * 200;
                            let y = level * 150;

                            element.push({
                                id: courseKey,
                                type: "course",
                                data: course,
                                position: { x: x, y: y },
                            });

                            if (course.prerequisite_array !== null) {
                                // If prereq itself is already an array and is 1-d array
                                let oneDimensional = true;
                                for (let prereq of course.prerequisite_array) {
                                    if (typeof prereq === "object") {
                                        oneDimensional = false;
                                        break;
                                    }
                                }

                                if (oneDimensional) {
                                    course.prerequisite_array = [course.prerequisite_array];
                                }

                                for (let prereq of course.prerequisite_array) {
                                    // If current prereq is an array
                                    if (Array.isArray(prereq)) {
                                        for (let prereq_course of prereq) {
                                            // If prereq starts with Consent of
                                            if (prereq_course.startsWith("consent of")) {
                                                continue;
                                            }

                                            // If prereq starts with not CPSC
                                            if (!prereq_course.startsWith("CPSC")) {
                                                continue;
                                            }

                                            // If prereq key cannot be found
                                            if (prereq_course == "CPSC 349") {
                                                continue;
                                            }
                                            
                                            element.push({
                                                id: "e" + courseKey + "-" + prereq_course,
                                                source: courseKey,
                                                target: prereq_course,
                                                type: "straight",
                                                // animated: true,
                                                // isHidden: true,
                                            });

                                        }
                                    }

                                    // If current prereq is a dictionary
                                    else {
                                        console.log("dict", prereq);
                                        let keys = prereq.key;
                                        console.log(keys);
                                        for (let prereq_course_index in keys) {
                                            let prereq_course = keys[prereq_course_index];

                                            // If prereq starts with Consent of
                                            if (prereq_course.startsWith("consent of")) {
                                                continue;
                                            }

                                            // If prereq starts with not CPSC
                                            if (!prereq_course.startsWith("CPSC")) {
                                                continue;
                                            }

                                            // If prereq key cannot be found
                                            if (prereq_course == "CPSC 349") {
                                                continue;
                                            }

                                            element.push({
                                                id: "e" + courseKey + "-" + prereq_course,
                                                source: courseKey,
                                                target: prereq_course,
                                                type: "straight",
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }

                    console.log(element);
                    this.setState({ elements: element });
                }
            });
    }

    onNodeDragStart(e) {
        e.preventDefault();
        console.log("drag start");
    }

    onElementClick(event, element) {
        let course_node = element.data;
        let course_id = course_node.course_id;

        this.setState({
            currentSemesterDisplay: localStorage.getItem("currentSemesterDisplay"),
        });

        axios.get("/api/course/" + course_id)
            .then(res => {
                if (res.status !== 200) {
                    console.log(res);
                } else {
                    this.setState({
                        isModalActive: true,
                        currentCourse: res.data,
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    onModalClose() {
        this.setState({ isModalActive: false });
    }

    removeHtmlTags(str) {
        return str.replace(/<[^>]*>?/gm, "");
    }

    render() {
        return (
            <ReactFlow elements={this.state.elements} nodeTypes={this.state.nodeTypes}
                nodesDraggable={false} onNodeDragStart={this.onNodeDragStart} onElementClick={this.onElementClick}
                elementsSelectable={true}>
                
                <Modal isActive={this.state.isModalActive} onClose={this.onModalClose} title={ this.state.currentCourse.code + " " +  this.state.currentCourse.number }>
                    <ModalBody>
                        <p className="title is-5">{this.state.currentCourse.topic}</p>
                        <p className="">{this.state.currentCourse.description}</p>

                        <div style={{ marginBottom: 24 }}></div>
                        
                        {
                            (this.state.currentCourse.prerequisites || this.state.currentCourse.antirequisites || this.state.currentCourse.corequisites) &&
                            <div className="table-container">
                                <table className="table is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>Requisite</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.currentCourse.prerequisites != null &&
                                            <tr>
                                                <td>Prerequisite(s)</td>
                                                <td>{this.removeHtmlTags(this.state.currentCourse.prerequisites)}</td>
                                            </tr>
                                        }
                                        {
                                            this.state.currentCourse.antirequisites != null &&
                                            <tr>
                                                <td>Antirequisite(s)</td>
                                                <td>{this.removeHtmlTags(this.state.currentCourse.antirequisites)}</td>
                                            </tr>
                                        }
                                        {
                                            this.state.currentCourse.corequisites != null &&
                                            <tr>
                                                <td>Corequisite(s)</td>
                                                <td>{this.removeHtmlTags(this.state.currentCourse.corequisites)}</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>

                        }
                        {
                            this.state.currentCourse.no_gpa === "true" &&
                            <p>This course is not included in GPA.</p>
                        }
                        {
                            this.state.currentCourse.repeat === "true" &&
                            <p>This course may be repeated for credit.</p>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <button className="button is-primary">Add to { this.state.currentSemesterDisplay }</button>
                    </ModalFooter>
                </Modal>
            </ReactFlow>
        );
    }
}

export default Tree;