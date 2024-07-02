import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import MyContext from "../ContextApi/Mycontext"

export default function BooksCategoryWise() {
    const { category } = useParams()
    const { books } = useContext(MyContext)
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">{category}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container py-4 allVideoLectures">
                <div className="row g-4">
                    {books && books.filter(book => book.categoryId && book.categoryId.category === category).map((book) => {
                        return <div className="col-md-6" key={book._id}>
                            <Link to={`/pdf-book/${book.title.replace(/ /g, "_")}`}>  <div className="card" style={{ height: "100%" }}>
                                <div className="card-body d-flex justify-content-center">
                                    <p><i className="fas fa-arrow-right me-3"></i>{book.title}</p>
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
