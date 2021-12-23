import React from "react";
import ReactFlow from "react-flow-renderer";
import axios from "axios";
import CourseNode from "./CourseNode";

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeTypes: {
                course: CourseNode,
            },
            elements: [],
            courses: [],
        };
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

    onElementClick(e) {
        console.log(e);
        console.log("element click");
    }

    render() {
        return (
            <ReactFlow elements={this.state.elements} nodeTypes={this.state.nodeTypes}
                nodesDraggable={false} onNodeDragStart={this.onNodeDragStart} onElementClick={this.onElementClick}
                elementsSelectable={true}
            />
        );
    }
}

export default Tree;