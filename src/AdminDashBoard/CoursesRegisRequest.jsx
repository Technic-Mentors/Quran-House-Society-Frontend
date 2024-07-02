import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"

export default function CoursesRegisRequest() {
    const { reqCourses, acceptedCourses, rejectedCourses } = useContext(MyContext)

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="text-center pt-4">Registration Requests</h1>
                    <div className="col-md-12 table-responsive">
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
                                {reqCourses && reqCourses.map((course) => {
                                    return <tr key={course._id}>
                                        <td>{course.userId && course.userId.name}</td>
                                        <td>{course.courseId && course.courseId.title}</td>
                                        <td>{course.message}</td>
                                        <td>{course.status}</td>
                                        <td>
                                            <i className="fas fa-check me-2" onClick={() => acceptedCourses(course._id)}></i>
                                            <i className="fas fa-times" onClick={() => rejectedCourses(course._id)}></i>
                                        </td>
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
