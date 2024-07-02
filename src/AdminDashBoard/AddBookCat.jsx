import { useContext, useState } from "react"
import MyContext from "../ContextApi/Mycontext"
import Swal from "sweetalert2"

export default function AddBookCat() {
    const [category, setCategory] = useState("")
    const { fetchAllBooksCateoreis, existingBookCategory, getBookCategory, getBookCat, allBookCategory, delBookCat, setGetBookCategory } = useContext(MyContext)
    const addCategory = async (e) => {
        e.preventDefault()
        // check category add or not
        const categoryError = document.getElementById("categoryError")
        let catError = false;
        if (!category) {
            categoryError.innerText = "Please enter category"
            catError = true;
        } else {
            categoryError.innerText = ""
        }

        // check existing category
        if (existingBookCategory.includes(category.toLowerCase())) {
            categoryError.innerText = "Category already exist"
            catError = true
        }
        if (catError) {
            return;
        }
        // check existing category
        const res = await fetch("https://quran-house-society-backend.vercel.app/api/addBookCat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ category })
        })

        if (res.ok) {
            setCategory("")
            fetchAllBooksCateoreis()
        }
    }
    const updateCategory = async (id, e) => {
        e.preventDefault()
        const { isConfirmed } = await Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
        });
        if (isConfirmed) {
            const { category } = getBookCategory
            await fetch(`https://quran-house-society-backend.vercel.app/api/updateBookCats/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ category })
            })

            Swal.fire("Saved!", "", "success");
            fetchAllBooksCateoreis()
        } else {
            Swal.fire("Changes are not saved", "", "info");
        }

    }
    const onchange = (e) => {
        setGetBookCategory({ ...getBookCategory, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 pt-4">
                        <div id="categoryError" className="text-danger mb-3"></div>
                        <form onSubmit={addCategory}>
                            <input type="text" name="category" value={category} className="form-control" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
                            <div className="d-flex justify-content-center">
                                <button className="btn btn1 mt-4" type="submit">Add Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* categories */}
            <div className="container pt-5">
                <div className="row">
                    <h1 className="text-center">Lectures Categories</h1>
                    <div className="col-md-12">
                        <table className="table table-bordered table-hover lecturesTable">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allBookCategory && allBookCategory.map((book) => {
                                    return <tr key={book._id}>
                                        <td>{book.category}</td>
                                        <td>
                                            <i className="fas fa-edit me-4" data-bs-toggle="modal" data-bs-target="#staticEditAudio" onClick={() => getBookCat(book._id)}></i>
                                            <i className="fas fa-trash" onClick={() => delBookCat(book._id)}></i>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* edit category modal */}

            <div>
                <div className="modal fade" id="staticEditAudio" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Category Edit Modal</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mt-3">
                                        <label htmlFor="category">Category</label>
                                        <input type="text" id="category" name="category" value={getBookCategory.category} className="form-control" onChange={onchange} />
                                    </div>
                                    <div className="d-flex justify-content-center mt-3">
                                        <button className="btn btn1" onClick={(e) => updateCategory(getBookCategory._id, e)}>Update Category</button>
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
