import React from "react";
import ReactFlow from "react-flow-renderer";
import axios from "axios";

class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: [
                {
                    id: "1",
                    type: "input", // input node
                    data: { label: "Input Node" },
                    position: { x: 250, y: 125 },
                },
                // default node
                {
                    id: "2",
                    // you can also pass a React component as a label
                    data: { label: <div>Default Node</div> },
                    position: { x: 100, y: 325 },
                },
                {
                    id: "3",
                    type: "output", // output node
                    data: { label: "Output Node" },
                    position: { x: 250, y: 450 },
                },
                // animated edge
                { id: "e1-2", source: "1", target: "2", type: "step" },
                { id: "e2-3", source: "2", target: "3", type: "step", animated: true },
            ],
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
                                id: course.course_id,
                                type: "output",
                                data: { label: course.code + " " + course.number },
                                position: { x: x, y: y },
                            });
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