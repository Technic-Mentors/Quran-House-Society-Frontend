
import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"

export default function RequestedCourses() {
    const { reqCourses, delCourseReg } = useContext(MyContext)
    const User = JSON.parse(sessionStorage.getItem("User"))

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 table-responsive pt-4">
                        <h1 className="text-center">Registration Requests</h1>
                        <table className="table table-bordered table-hover lecturesTable">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Course Title</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reqCourses && reqCourses.filter(course => course.userId.email === User.email).map((course) => {
                                    return <tr key={course._id}>
                                        <td>{course.userId && course.userId.name}</td>
                                        <td>{course.courseId && course.courseId.title}</td>
                                        <td>{course.message}</td>
                                        <td>{course.status}</td>
                                        <td><i className="fas fa-trash" onClick={() => delCourseReg(course._id)}></i></td>
                                        {/* <td>
                                            <i className="fas fa-check me-2"></i>
                                            <i className="fas fa-times"></i>
                                        </td> */}
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
