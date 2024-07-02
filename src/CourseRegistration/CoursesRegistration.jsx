import { useContext, useState } from "react"
import MyContext from "../ContextApi/Mycontext"
import Swal from "sweetalert2"

export default function CoursesRegistration() {
    const { courses, getCourseId, courseId, allReqCourses } = useContext(MyContext)
    const User = JSON.parse(sessionStorage.getItem("User"))
    const [credentials, setCredentials] = useState({
        courseId: "",
        userId: "",
        message: ""
    })
    const courseRegistration = async (e) => {
        e.preventDefault()
        const { userId, courseId, message } = credentials
        const res = await fetch("http://localhost:8000/api/courseRegis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, courseId, message })
        })
        if (res.ok) {
            setCredentials({
                courseId: "",
                userId: "",
                message: ""
            })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your request send successfully",
                showConfirmButton: false,
                timer: 1500
            });
            allReqCourses()
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            {/* courses */}
            <div className="container">
                <div className="row g-4">
                    {courses && courses.map((course) => {
                        return <div className="col-md-12" key={course._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h1>{course.title}</h1>
                                    <p>{course.description}</p>
                                    <button className="btn btn-dark mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => getCourseId(course._id)}>Register Now</button>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>

            {/* course registration modal*/}
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Course Registration Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={courseRegistration}>
                                    <label htmlFor="userId"></label>
                                    <select name="userId" value={credentials.userId} id="" className="form-control" onChange={onchange}>
                                        <option value="">Select Name</option>
                                        <option value={User._id}>{User.name}</option>
                                    </select>
                                    <select name="courseId" value={credentials.courseId} id="" className="form-control mt-3" onChange={onchange}>
                                        <option value="">Select Course</option>
                                        <option value={courseId._id}>{courseId.title}</option>
                                    </select>
                                    <textarea className="form-control mt-3" name="message" value={credentials.message} id="" cols="30" rows="10" onChange={onchange}></textarea>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button className="btn btn1">Register Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
