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
                                id: course.code + " " + course.number,
                                type: "course",
                                data: course,
                                position: { x: x, y: y },
                            });
                        }
                    }

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