import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"
import Swal from "sweetalert2"

export default function CoursesList() {
    const { courses, courseId, getCourseId, setCourseId, allCourses, delCourseId } = useContext(MyContext)

    const updateCourse = async (id, e) => {
        e.preventDefault()
        const { isConfirmed } = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        });
        if (isConfirmed) {
            const { title, description } = courseId;

            const res = await fetch(`https://quran-house-society-backend.vercel.app/api/updateCourse/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description })
            })
            if (res.ok) {
                allCourses()
            }
            Swal.fire("Saved!", "", "success");
        } else {
            Swal.fire("Changes are not saved", "", "info");
        }

    }
    const onchange = (e) => {
        setCourseId({ ...courseId, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container">
                <div className="row py-4">
                    <h3 className="text-center">Courses List</h3>
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover lecturesTable">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses && courses.map((course) => {
                                    return <tr key={course._id}>
                                        <td>{course.title}</td>
                                        <td>{course.description}</td>
                                        <td><i className="fas fa-trash me-4" onClick={() => delCourseId(course._id)}></i>
                                            <i className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => getCourseId(course._id)}></i></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            {/*courses view modal */}
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Course Edit Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title" value={courseId.title} className="form-control" onChange={onchange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="Description">Description</label>
                                        <textarea type="text" cols="30" rows="10" id="Description" name="description" value={courseId.description} className="form-control" onChange={onchange} />
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button className="btn btn1" onClick={(e) => updateCourse(courseId._id, e)}>Update Course</button>
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
