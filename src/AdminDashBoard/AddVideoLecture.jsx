import { useContext, useRef, useState } from "react";
import MyContext from "../ContextApi/Mycontext";
import Swal from "sweetalert2"
export default function AddVideoLecture() {
    const { allCategory, allVideoLectures } = useContext(MyContext)

    const [lecturesData, setLecturesData] = useState({
        title: "",
        video: "",
        categoryId: "",
        lecImg: "",
        powerPointLink: "",
        pdfLink: ""
    })
    const fileInputRef = useRef()
    const addLectureFunc = async (e) => {
        e.preventDefault()
        const { title, video, categoryId, powerPointLink, pdfLink, lecImg } = lecturesData
        const titleError = document.getElementById("titleError")
        const categoryError = document.getElementById("categoryError")
        const videoError = document.getElementById("videoError")
        let Error = false;
        if (!title) {
            titleError.innerText = "Please enter title"
            Error = true
        } else {
            titleError.innerText = ""
        }
        if (!video) {
            videoError.innerText = "Please enter youtube video link"
            Error = true
        } else {
            videoError.innerText = ""
        }
        if (!categoryId) {
            categoryError.innerText = "Please select category"
            Error = true
        } else {
            categoryError.innerText = ""
        }
        if (Error) {
            return;
        }
        const formData = new FormData();
        formData.append("title", title)
        formData.append("categoryId", categoryId)
        formData.append("video", video)
        formData.append("powerPointLink", powerPointLink)
        formData.append("pdfLink", pdfLink)
        formData.append("lecImg", lecImg)
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/addVideoLecture", {
            method: "POST",
            body: formData
        })
        if (res.ok) {
            setLecturesData({
                title: "",
                video: "",
                categoryId: "",
                lecImg: "",
                powerPointLink: "",
                pdfLink: ""
            })
            fileInputRef.current.value = ""
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Lecture uploaded successfully",
                showConfirmButton: false,
                timer: 1500
            });
            allVideoLectures()
        }
    }

    const onchange = (e) => {
        if (e.target.files) {
            setLecturesData({ ...lecturesData, [e.target.name]: e.target.files[0] })
        } else {
            setLecturesData({ ...lecturesData, [e.target.name]: e.target.value })
        }
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-center">Add Video Lecture</h1>
                <div className="row">
                    <div className="lectureForm">
                        <form onSubmit={addLectureFunc}>
                            <input type="text" placeholder="Add Title" name="title" value={lecturesData.title} onChange={onchange} className="form-control" />
                            <div id="titleError" className="text-danger mt-2"></div>
                            <input type="text" placeholder="Add Youtube Video Link" name="video" value={lecturesData.video} onChange={onchange} className="form-control" />
                            <div id="videoError" className="text-danger mt-2"></div>
                            <input type="file" ref={fileInputRef} placeholder="Add Lecture Image" name="lecImg" onChange={onchange} className="form-control" />
                            <select type="text" name="categoryId" value={lecturesData.categoryId} onChange={onchange} className="form-control" >
                                <option value="">Select Category</option>
                                {allCategory && allCategory.map((cat) => {
                                    return <option key={cat._id} value={cat._id}>{cat.category}</option>
                                })}
                            </select>
                            <div id="categoryError" className="text-danger mt-2"></div>
                            <input type="text" placeholder="Add Power Point Link" name="powerPointLink" value={lecturesData.powerPointLink} onChange={onchange} className="form-control" />
                            <input type="text" placeholder="Add PDF Link" name="pdfLink" value={lecturesData.pdfLink} onChange={onchange} className="form-control" />
                            <div className="d-flex justify-content-center">
                                <button className="btn btn1" type="submit">Add Lecture</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}