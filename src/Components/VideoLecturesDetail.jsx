import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function VideoLecturesDetail() {
    const { title } = useParams()
    const [lectureDetail, setLectureDetail] = useState([])
    const formattedTitle = title.replace(/-/g, ' ')
    const LectureDetail = async () => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/getVideoLecture/${formattedTitle}`, {
            method: "GET"
        })
        const data = await res.json()
        setLectureDetail(data)
    }
    useEffect(() => {
        LectureDetail()
    }, [])

    const getEmbeddableUrl = (url) => {
        if (!url) {
            return null;
        }
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2] ? `https://www.youtube.com/embed/${match[2]}` : null;
    };
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">{lectureDetail.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* lectue detail */}
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{lectureDetail.title}</h1>
                        <iframe width="100%" height="500px" src={lectureDetail.video && lectureDetail.video.startsWith("https://www.youtube.com/embed") ? lectureDetail.video : getEmbeddableUrl(lectureDetail.video)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="row justify-content-between mt-4">
                    <div className="col-md-3 col-7">
                        <a href={lectureDetail.powerPointLink && lectureDetail.powerPointLink} target="blank"> <button className="btn btn-outline-success"><i className="fas fa-arrow-right me-2"></i> Power Point Link</button></a>
                    </div>
                    <div className="col-md-2 col-5 d-flex justify-content-end">
                        <a href={lectureDetail.pdfLink && lectureDetail.pdfLink} target="blank"> <button className="btn btn-outline-success"><i className="fas fa-arrow-right me-2"></i> PDF Link</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
