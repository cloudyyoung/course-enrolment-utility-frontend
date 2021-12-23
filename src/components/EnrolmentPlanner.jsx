import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { toast } from "react-toastify";
import axios from "axios";


class EnrolmentPlanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            semester: "",
            courses: []

        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.fetchSemesterPlan(2021, "fall");
        localStorage.setItem("currentSemesterDisplay", "Fall 2021");
    }

    //End point 9
    handleChange(event) {
        const currentSemesterDisplay = event.target.value;
        
        let year = "", term = "";
        if (currentSemesterDisplay === "Fall 2021") {
            year = 2021;
            term = "fall";
        }

        else if (currentSemesterDisplay === "Winter 2022") {
            year = 2022;
            term = "winter";
        }

        else if (currentSemesterDisplay === "Spring 2022") {
            year = 2022;
            term = "spring";
        }

        else {
            year = 2022;
            term = "summer";
        }

        localStorage.setItem("currentSemesterDisplay", currentSemesterDisplay);

        console.log(year, term);
        this.fetchSemesterPlan(year, term);
        
    }

    fetchSemesterPlan(year, term) {
        axios.get("/api/account/student/plan/" + year + "/" + term)
            .then(res => {
                console.log(res.data);

                if (res.data.error) {
                    console.log("error");
                    toast.error(res.data.error.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                } else {
                    let allC = res.data;
                    this.setState({ courses: [] });

                    //get the results of each couses
                    for (const x of allC) {
                        this.setState({ courses: [...this.state.courses, x] });
                    }

                    console.log(this.state.cousers);
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
                            <h2 className="title is-6 has-text-weight-semibold is-uppercase">{course.code} {course.number}</h2>
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

export default EnrolmentPlanner;