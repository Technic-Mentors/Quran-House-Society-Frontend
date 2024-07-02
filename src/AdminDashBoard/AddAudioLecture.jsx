import { useContext, useRef, useState } from "react";
import MyContext from "../ContextApi/Mycontext";
import Swal from "sweetalert2"
export default function AddAudioLecture() {
    const { allCategory, allAudioLectures } = useContext(MyContext)

    const [lecturesData, setLecturesData] = useState({
        title: "",
        audio: "",
        categoryId: "",
        lecImg: "",
        powerPointLink: "",
        pdfLink: ""
    })
    const fileInputRef = useRef()
    const addLectureFunc = async (e) => {
        e.preventDefault()
        const { title, audio, categoryId, powerPointLink, pdfLink, lecImg } = lecturesData
        const titleError = document.getElementById("titleError")
        const categoryError = document.getElementById("categoryError")
        const audioError = document.getElementById("audioError")
        let Error = false;
        if (!title) {
            titleError.innerText = "Please enter title"
            Error = true
        } else {
            titleError.innerText = ""
        }
        if (!audio) {
            audioError.innerText = "Please enter youtube audio link"
            Error = true
        } else {
            audioError.innerText = ""
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
        formData.append("audio", audio)
        formData.append("powerPointLink", powerPointLink)
        formData.append("pdfLink", pdfLink)
        formData.append("lecImg", lecImg)

        const res = await fetch("https://quran-house-society-backend.vercel.app/api/addAudioLecture", {
            method: "POST",
            body: formData
        })
        if (res.ok) {
            setLecturesData({
                title: "",
                audio: "",
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
            allAudioLectures()
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
                <h1 className="text-center">Add Audio Lecture</h1>
                <div className="row">
                    <div className="lectureForm">
                        <form onSubmit={addLectureFunc}>
                            <input type="text" placeholder="Add Title" name="title" value={lecturesData.title} onChange={onchange} className="form-control" />
                            <div id="titleError" className="text-danger mt-2"></div>
                            <input type="text" placeholder="Add Youtube Audio Link" name="audio" value={lecturesData.audio} onChange={onchange} className="form-control" />
                            <div id="audioError" className="text-danger mt-2"></div>
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