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
        axios.get("/api/courses")
            .then(res => {
                console.log(res.data);

                if (res.data.error) {
                    console.log("error");
                } else {
                    this.setState({ courses: res.data });
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