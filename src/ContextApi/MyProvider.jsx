import { useEffect, useState } from "react"
import MyContext from "./Mycontext"
import propTypes from "prop-types"
import Swal from "sweetalert2"

export default function MyProvider({ children }) {
    const [Videolectures, setVideoLectures] = useState([])
    const [videoLecId, setVideoLecId] = useState([])
    const [Audiolectures, setAudioLectures] = useState([])
    const [audioLecId, setAudioLecId] = useState([])
    const [courses, setCourses] = useState([])
    const [courseId, setCourseId] = useState([])
    const [existingCategory, setExistingCategory] = useState([])
    const [allCategory, setAllCategory] = useState([])
    const [getLecCategory, setGetLecCategory] = useState([])
    const [existingBookCategory, setExistingBookCategory] = useState([])
    const [allBookCategory, setAllBookCategory] = useState([])
    const [getBookCategory, setGetBookCategory] = useState([])
    const [reqCourses, setReqCourses] = useState([])
    const [books, setBooks] = useState([])
    const [bookId, setBookId] = useState([])
    // all video lectures
    const allVideoLectures = async () => {
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/getVideoLectures", {
            method: "GET"
        })
        const data = await res.json()
        setVideoLectures(data)
    }

    // video lecture through id
    const videoLecById = async (id) => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/getVideoLectures/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setVideoLecId(data);
    }

    // delete video lecture
    const delVideoLecture = async (id) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await fetch(`https://quran-house-society-backend.vercel.app/api/delVideoLecture/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            allVideoLectures()
        }
    }
    //all audio lectures
    const allAudioLectures = async () => {
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/getAudioLectures", {
            method: "GET"
        })
        const data = await res.json()
        setAudioLectures(data)
    }
    // audio lecture through id
    const audioLecById = async (id) => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/getAudioLectures/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setAudioLecId(data);
    }
    // delete audio lecture
    const delAudioLecture = async (id) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await fetch(`https://quran-house-society-backend.vercel.app/api/delAudioLecture/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            allAudioLectures()
        }
    }
    // allLectureCat
    const fetchAllCateoreis = async () => {
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/getLectureCats", {
            method: "GET"
        })
        const data = await res.json()
        setAllCategory(data)
        const existingCategories = data.map(cat => cat.category.toLowerCase())
        setExistingCategory(existingCategories)
    }
    const getLecCat = async (id) => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/getLectureCat/${id}`, {
            method: "GET"
        })
        const data = await res.json()
        setGetLecCategory(data)
    }
    const delLecCat = async (id) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await fetch(`https://quran-house-society-backend.vercel.app/api/delLectureCats/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            fetchAllCateoreis()
        }
    }
    // allCourses
    const allCourses = async () => {
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/allCourses", {
            method: "GET"
        })
        const data = await res.json()
        setCourses(data)
    }
    const getCourseId = async (id) => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/getCourse/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setCourseId(data)

    }
    const delCourseId = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await fetch(`https://quran-house-society-backend.vercel.app/api/delCourse/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            allCourses()
        }
    }
    // requested courses
    const allReqCourses = async () => {
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/getcourseRegis", {
            method: "GET"
        })
        const data = await res.json()
        setReqCourses(data)
    }
    const acceptedCourses = async (id) => {
        await fetch(`https://quran-house-society-backend.vercel.app/api/acceptedRequest/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        allReqCourses()
    }
    const rejectedCourses = async (id) => {
        await fetch(`https://quran-house-society-backend.vercel.app/api/rejectedRequest/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        allReqCourses()
    }
    const delCourseReg = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await fetch(`https://quran-house-society-backend.vercel.app/api/delCourseRegis/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            allReqCourses()
        }

    }
    // books
    const allBooks = async () => {
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/allBooks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setBooks(data)
    }
    const getBookId = async (id) => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/getBook/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setBookId(data)
    }
    const delBook = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await fetch(`https://quran-house-society-backend.vercel.app/api/delBook/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            allBooks()
        }
    }
    // allBooksCat
    const fetchAllBooksCateoreis = async () => {
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/getBookCats", {
            method: "GET"
        })
        const data = await res.json()
        setAllBookCategory(data)
        const existingCategories = data.map(cat => cat.category.toLowerCase())
        setExistingBookCategory(existingCategories)
    }
    const getBookCat = async (id) => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/getBookCat/${id}`, {
            method: "GET"
        })
        const data = await res.json()
        setGetBookCategory(data)
    }
    const delBookCat = async (id) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await fetch(`https://quran-house-society-backend.vercel.app/api/delBookCats/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            fetchAllBooksCateoreis()
        }
    }
    useEffect(() => {
        allVideoLectures()
        allAudioLectures()
        fetchAllCateoreis()
        allCourses()
        allReqCourses()
        allBooks()
        fetchAllBooksCateoreis()
    }, [])
    return (
        <MyContext.Provider value={{ allVideoLectures, Videolectures, allAudioLectures, Audiolectures, fetchAllCateoreis, existingCategory, allCategory, allCourses, courses, videoLecById, videoLecId, delVideoLecture, setVideoLecId, delAudioLecture, audioLecById, audioLecId, setAudioLecId, getCourseId, courseId, setCourseId, delCourseId, reqCourses, acceptedCourses, rejectedCourses, allReqCourses, delCourseReg, books, allBookCategory, existingBookCategory, fetchAllBooksCateoreis, getBookId, bookId, delBook, allBooks, setBookId, getLecCat, getLecCategory, setGetLecCategory, delLecCat, getBookCat, getBookCategory, delBookCat,setGetBookCategory }}>
            {children}
        </MyContext.Provider>
    )
}

MyProvider.propTypes = {
    children: propTypes.node.isRequired
};