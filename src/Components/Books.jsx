import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"
import bookImg from "../assets/bookImg.jpg"
import { Link } from "react-router-dom"
export default function Books() {
    const { books } = useContext(MyContext)

    const uniqueBook = []
    const newCategoies = new Set()

    books && books.map(book => {
        const category = book.categoryId && book.categoryId.category
        if (category && !newCategoies.has(category)) {
            newCategoies.add(category);
            uniqueBook.push(book)
        }
    })
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className="text-center">PDF Books</h1>
                                <p className="text-center">Quran House Society is dedicated to promoting a profound connection with the teachings of the Holy Quran.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* page content */}
            <div className="container pt-5">
                <div className="row g-4">
                    {uniqueBook && uniqueBook.map((book) => {
                        return <div className="col-md-4" key={book._id}>
                            <Link to={`/pdf-books/${book.categoryId && book.categoryId.category}`}> <div className="card">
                                <img src={book.bookImg ? book.bookImg : bookImg} className="card-img-top" alt="book-image" style={{ height: "230px" }} />
                                <div className="card-body">
                                    <h3 className="text-center">{book.categoryId && book.categoryId.category}</h3>
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
