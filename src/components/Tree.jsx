import React from "react";
import ReactFlow from "react-flow-renderer";
import axios from "axios";

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [],
            courses: []
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

                    for(let course of this.state.courses) {
                        console.log(course);

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
                            let x = index * 200;
                            let y = level * 100;
                            console.log(course.number, x, y);

                            element.push({
                                // id: course.course_id,
                                id: course.code + course.number,
                                type: "output",
                                data: { label: course.code + " " + course.number },
                                position: { x: x, y: y },
                            });

                            // for (let prereq of course.prereq) {
                            //     for (let condition of prereq) {
                            //         if (condition == Object) {
                            //             // Units
                            //             let keys = condition.key;

                            //             for (let key of keys) {
                            //                 element.push({
                            //                     id: course.code + course.number + "-" + key,
                            //                     source: course.code + course.number,
                            //                     target: key,
                            //                     type: "step",
                            //                 });
                            //             }
                            //         } else if (Array.isArray(condition)) {
                            //             //
                            //         }
                            //     }
                            // }
                        }
                    }

                    this.setState({ elements: element });
                }
            });
    }

    render() {
        return (
            <ReactFlow elements={this.state.elements} />
        );
    }
}

export default Tree;