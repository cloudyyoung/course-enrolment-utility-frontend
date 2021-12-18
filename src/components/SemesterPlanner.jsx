import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { toast } from "react-toastify";
import axios from "axios";


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

        this.handleChange = this.handleChange.bind(this);
    }

    //End point 9
    handleChange(event)
    {
        const currentSem = event.target.value;
        
        let year = "", term = "";
        if (currentSem == "Fall 2021")
        {
            year = 2021;
            term = "fall";
        }

        else if (currentSem == "Winter 2022")
        {
            year = 2022;
            term = "winter";
        }

        else if (currentSem == "Spring 2022")
        {
            year = 2022;
            term = "spring";
        }

        else 
        {
            year = 2022;
            term = "summer";
        }

        axios.put("/api/account/student/plan/" + year + "/" + term)
            .then(res => {
                console.log(res.data);

                if (res.data.error) {
                    console.log("error");
                    toast.error(res.data.error.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    window.location.href = "/tree";
                    toast.success("You changed the semester.", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                
                    //for (const x of xs) { console.log(x); }
                    let temp =[];

                    const allC = res.data;

                    //get the results of each couses
                    for (const x of allC)
                    {
                        axios.get("/api/course/" + x )
                        .then(res => {
                            console.log(res.data);
            
                            if (res.data.error) {
                                console.log("error");
                                toast.error(res.data.error.message, {
                                    position: toast.POSITION.TOP_RIGHT
                                });
                            } else {
                                
                                //add them to the state
                                temp.push(res.data);
                            
                            }
                        });
                    }

                    this.setState(temp);
                
                }
            });
    }

    render() {
        const dom = [];
        for (let course of this.state.courses) {
            dom.push(
                <Draggable key={course.course_id}>
                    <div className="card course">
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
                    <select onChange = {this.handleChange}>
                        <option value = "Fall 2021">Fall 2021</option>
                        <option value = "Winter 2022">Winter 2022</option>
                        <option value = "Spring 2022">Spring 2022</option>
                        <option value = "Summer 2022"> Summer 2022</option>
                    </select>
                </div>
                <div>
                    <Container removeOnDropOut={true} dropPlaceholder={{className: "drag-placeholder"}}>
                        {dom}
                    </Container>
                </div>
            </div>
        );
    }
}

export default SemesterPlanner;