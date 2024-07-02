import { useContext } from "react"
import MyContext from "../ContextApi/Mycontext"
import Swal from "sweetalert2"

export default function BooksList() {
    const { books, bookId, getBookId, delBook, allBookCategory, allBooks, setBookId } = useContext(MyContext)

    const updateBook = async (id, e) => {
        e.preventDefault()
        const { isConfirmed } = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        });
        if (isConfirmed) {
            const { title, categoryId, pdfBookLink } = bookId
            const res = await fetch(`https://quran-house-society-backend.vercel.app/api/updateBook/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, categoryId, pdfBookLink })
            })
            if (res.ok) {
                allBooks()
            }
            Swal.fire("Saved!", "", "success");
        } else {
            Swal.fire("Changes are not saved", "", "info");
        }

    }
    const onchange = (e) => {
        setBookId({ ...bookId, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="text-center pt-4">Books List</h1>
                    <div className="col-md-12 table-responsive">
                        <table className="table table-bordered table-hover lecturesTable">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books && books.map((book) => {
                                    return <tr key={book._id}>
                                        <td>{book.title}</td>
                                        <td>{book.categoryId && book.categoryId.category}</td>
                                        <td>
                                            <i className="fas fa-eye me-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => getBookId(book._id)}></i>
                                            <i className="fas fa-edit me-4" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={() => getBookId(book._id)}></i>
                                            <i className="fas fa-trash" onClick={() => delBook(book._id)}></i>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/*books view modal */}
            <div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Books View Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" value={bookId.title} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" id="category" value={bookId.categoryId && bookId.categoryId.category} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="video">Book PDF Link</label>
                                        <input type="text" id="video" value={bookId.pdfBookLink} className="form-control" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="powerPointLink">Cover Image Link</label>
                                        <input type="text" id="powerPointLink" value={bookId.bookImg} className="form-control" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*books edit modal */}
            <div>
                <div className="modal fade" id="staticBackdropEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Video Lecture Edit     Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title" value={bookId.title} className="form-control" onChange={onchange} />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="category">Category</label>
                                        <select type="text" id="category" value={bookId.categoryId && bookId.categoryId._id} name="categoryId" className="form-control" onChange={onchange}>
                                            {allBookCategory && allBookCategory.map((cat) => {
                                                return <option key={cat._id} value={cat._id}>{cat.category}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="video">PDF Book Link (Google Drive)</label>
                                        <input type="text" id="link" name="pdfBookLink" value={bookId.pdfBookLink} className="form-control" onChange={onchange} />
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button className="btn btn1" onClick={(e) => updateBook(bookId._id, e)}>Update Lecture</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
