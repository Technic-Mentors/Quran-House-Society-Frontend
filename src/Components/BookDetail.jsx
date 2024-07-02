import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function BookDetail() {
    const { title } = useParams()
    const formattedTitle = title.replace(/_/g, ' ')
    const [book, setBook] = useState([])
    const titleBook = async () => {
        const res = await fetch(`https://quran-house-society-backend.vercel.app/api/book/${formattedTitle}`, {
            method: "GET"
        })
        const data = await res.json()
        if (data.pdfBookLink) {
            data.pdfBookLink = data.pdfBookLink.replace("view?usp=drive_link", "preview")
        }
        setBook(data)
    }
    useEffect(() => {
        titleBook()
    }, [])
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">{book.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container pt-5">
                <a href={book.pdfBookLink && book.pdfBookLink.replace("preview", "view?usp=drive_link")} target="blank">   <button className="btn btn1 mb-4">Download PDF</button></a>
                <div className="row">
                    <div className="col-md-12">
                        <h3>{book.title}</h3>
                        <iframe
                            className="mt-4"
                            src={book.pdfBookLink}
                            width="100%"
                            height="600px"
                            style={{ border: "none" }}
                            title="PDF Viewer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
