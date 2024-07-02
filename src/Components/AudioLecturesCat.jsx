import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"
import { Link, useParams } from "react-router-dom"

export default function AudioLecturesCat() {
    const { Audiolectures } = useContext(MyContext)
    const { category } = useParams()
    const formattCat = category && category.replace(/_/g, ' ')
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">Audio Lectures</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all lectures */}
            <div className="container py-4 allVideoLectures">
                <div className="row g-4">
                    {Audiolectures && Audiolectures.filter(lecture => lecture.categoryId && lecture.categoryId.category === formattCat).map((lecture) => {
                        return <div className="col-md-6" key={lecture._id}>
                            <Link to={`/audio-lecture/${lecture.title}`} style={{ textDecoration: "none" }}> <div className="card">
                                <div className="card-body d-flex justify-content-center">
                                    <p><i className="fas fa-arrow-right me-3"></i>{lecture.title}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
