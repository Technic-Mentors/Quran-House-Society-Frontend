import { useContext, useState } from "react"
import Swal from "sweetalert2"
import MyContext from "../ContextApi/Mycontext"

export default function AddCourse() {
    const { allCourses } = useContext(MyContext)
    const [course, setCourse] = useState({
        title: "",
        description: ""
    })
    const addCourse = async (e) => {
        e.preventDefault()
        const { title, description } = course
        const titleError = document.getElementById("titleError")
        const desError = document.getElementById("desError")
        let hasError = false;
        if (!title) {
            titleError.innerText = "Please enter title"
            hasError = true
        } else {
            titleError.innerText = ""
        }
        if (!description) {
            desError.innerText = "Please add description"
            hasError = true
        } else {
            desError.innerText = ""
        }
        if (hasError) {
            return;
        }
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/addCourse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, description })
        })
        if (res.ok) {
            setCourse({
                title: "",
                description: ""
            })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Course added successfully",
                showConfirmButton: false,
                timer: 1500
            });
            allCourses()
        }
    }
    const onchange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container">
                <div className="row lectureForm">
                    <h3 className="text-center">Add Course</h3>
                    <form onSubmit={addCourse}>
                        <input type="text" className="form-control" placeholder="Title" name="title" value={course.title} onChange={onchange} />
                        <div id="titleError" className="text-danger mt-2"></div>
                        <textarea className="form-control mt-3" name="description" placeholder="Description" value={course.description} onChange={onchange} id="" cols="30" rows="10"></textarea>
                        <div id="desError" className="text-danger mt-2"></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn1" type="submit">Add Course</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
