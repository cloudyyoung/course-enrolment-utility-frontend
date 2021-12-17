import React from "react";
import { Container, Draggable } from "react-smooth-dnd";

class SemesterPlanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            semester: "",
            courses: [
                {
                    course_id: 4954,
                    no_gpa: false,
                    repeat: false,
                    code: "CPSC",
                    number: "359",
                    unit: 3,
                    topic: "Computing Machinery II",
                    description: "An introduction to hardware and microprocessor design, including the connection between gate-level digital logic circuits and sequential machines that can execute an algorithm and perform input and output. This course may not be repeated for credit.",
                    hours: "H(1-3H)",
                    prerequisites: "CPSC 355 and PHIL 279 or 377",
                    antirequisites: "Credit for both Computer Science 359 and any of 325, 455 or Computer Engineering 415 will not be allowed.",
                    corequisites: "",
                    notes: "",
                    aka: "",
                    time_length: "",
                }
            ]
        };
    }

    render() {
        const dom = [];
        for (let course of this.state.courses) {
            dom.push(
                <Draggable key={course.course_id}>
                    <div className="card">
                        <div className="card-content">
                            <h2 className="title is-6">{course.code.toUpperCase()} {course.number}</h2>
                            <p className="subtitle is-7">{course.topic}</p>
                        </div>
                    </div>
                </Draggable>
            );
        }

        return (
            <div className="container">
                <div className="select" style={{"margin-bottom": "1rem"}}>
                    <select>
                        <option>Fall 2021</option>
                        <option>Winter 2022</option>
                        <option>Spring 2022</option>
                        <option>Summer 2022</option>
                    </select>
                </div>
                <div>
                    <Container removeOnDropOut={true} dropPlaceholder={true}>
                        {dom}
                    </Container>
                </div>
            </div>
        );
    }
}

export default SemesterPlanner;