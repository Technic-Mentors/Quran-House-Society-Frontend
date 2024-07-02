import { useContext, useRef, useState } from "react";
import MyContext from "../ContextApi/Mycontext";
import Swal from "sweetalert2"
export default function AddBooks() {
    const { allBookCategory, allBooks } = useContext(MyContext)

    const [books, setBooks] = useState({
        title: "",
        categoryId: "",
        bookImg: "",
        pdfBookLink: ""
    })
    const fileInputRef = useRef()
    const addLectureFunc = async (e) => {
        e.preventDefault()
        const { title, categoryId, bookImg, pdfBookLink } = books
        const titleError = document.getElementById("titleError")
        const pdfLinkError = document.getElementById("pdfLinkError")
        const imgError = document.getElementById("imgError")
        const categoryError = document.getElementById("categoryError")
        let Error = false;
        if (!title) {
            titleError.innerText = "Please enter title"
            Error = true
        } else {
            titleError.innerText = ""
        }
        if (!pdfBookLink) {
            pdfLinkError.innerText = "Please enter book Link"
            Error = true
        } else {
            pdfLinkError.innerText = ""
        }
        if (!bookImg) {
            imgError.innerText = "Please select cover image"
            Error = true
        } else {
            imgError.innerText = ""
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
        formData.append("bookImg", bookImg)
        formData.append("pdfBookLink", pdfBookLink)

        const res = await fetch("https://quran-house-society-backend.vercel.app/api/uploadBook", {
            method: "POST",
            body: formData
        })
        if (res.ok) {
            setBooks({
                title: "",
                categoryId: "",
                bookImg: "",
                pdfBookLink: ""
            })
            fileInputRef.current.value = ""
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Lecture uploaded successfully",
                showConfirmButton: false,
                timer: 1500
            });
            allBooks()
        }
    }

    const onchange = (e) => {
        if (e.target.files) {
            setBooks({ ...books, [e.target.name]: e.target.files[0] })
        } else {
            setBooks({ ...books, [e.target.name]: e.target.value })
        }
    }
    return (
        <div>
            <div className="container">
                <h1 className="text-center">Add PDF Books</h1>
                <div className="row">
                    <div className="lectureForm">
                        <form onSubmit={addLectureFunc}>
                            <input type="text" placeholder="Add Title" name="title" value={books.title} onChange={onchange} className="form-control" />
                            <div className="text-danger" id="titleError"></div>
                            <input type="text" placeholder="Add PDF Book Link (Google Drive)" name="pdfBookLink" value={books.pdfBookLink} onChange={onchange} className="form-control" />
                            <div className="text-danger" id="pdfLinkError"></div>
                            <input type="file" ref={fileInputRef} placeholder="Add Book Cover" name="bookImg" onChange={onchange} className="form-control" />
                            <div className="text-danger" id="imgError"></div>
                            <select type="text" name="categoryId" value={books.categoryId} onChange={onchange} className="form-control" placeholder="Add Category" >
                                <option value="">Select category</option>
                                {allBookCategory && allBookCategory.map((book) => {
                                    return <option value={book._id} key={book._id}>{book.category}</option>
                                })}
                            </select>
                            <div className="text-danger" id="categoryError"></div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn1" type="submit">Add Book</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}