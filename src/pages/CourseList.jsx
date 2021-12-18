import React from "react";
import axios from "axios";

export default class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [
                {
                    course_id: 4954,
                    no_gpa: false,
                    repeat: false,
                    code: "CPSC",
                    number: "355",
                    unit: 3,
                    topic: "Computing Machinery I",
                    description: "An introduction to computing machinery establishing the connection between programs expressed in a compiled language, an assembly language, and machine code, and how such code is executed. Includes the detailed study of a modern CPU architecture, its assembly language and internal data representation, and the relationship between high-level program constructs and machine operations. This course may not be repeated for credit.",
                    hours: "H(3-2T)",
                    prerequisites: "3 units from Computer Science 219, 233 or 235.",
                    antirequisites: "Credit for Computer Science 355 and 265 or Computer Engineering 369 will not be allowed.",
                    corequisites: "",
                    notes: "",
                    aka: "",
                    time_length: "",
                },
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
                },
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

    componentDidMount() {
        axios.get("http://ucalgary.localhost/api/course")
            .then(res => {
                this.setState({
                    courses: res.data
                });
                console.log(this.state.courses);
            })
            .catch(err => {
                console.log("aaaaa");
                console.log(err);
            });
    }

    render() {
        const columns = [];
        const column = [];
        let k = 0;
        for (let course of this.state.courses) {
            column.push(
                <div className="column is-half">
                    <div className="card">
                        <div className="card-content">
                            <h2 className="title is-4 grade">{course.code.toUpperCase()} {course.number}</h2>
                            <p className="subtitle">{course.topic}</p>
                            <p className="description">{course.description = ""}</p>
                            <p className="description">Hours: {course.hours}</p>
                            <p className="description">Prerequisite(s): {course.prerequisites}</p>
                            <p className="description">Antirequisite(s): {course.antirequisites}</p>
                            <p className="description">Corequisite(s): {course.corequisites}</p>
                        </div>
                    </div>
                </div>
            );
        
            if (k === 1) {
                columns.push(<div className="columns">
                    {/* Must clone column variable */}
                    { [].concat(column) }
                </div>);
                column.length = 0;
            }

            k = (k + 1) % 2;
        }
    
        return (
            <div className="container">
                {columns}
            </div>
        );
    }
}