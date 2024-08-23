
export default function Topbar() {

    return (
        <div>
            {/* <!-- Topbar Start --> */}
            <div
                className="container-fluid pe-0 d-none d-lg-block"
                style={{ backgroundColor: "var(--primary-color)" }}
            >
                <div className="row gx-0 d-flex align-items-center">
                    <div className="col-md-8 d-flex text-lg-start mb-2 mb-lg-0">
                        <p className="m-0 mx-4 text-white">
                            <i className="fa fa-envelope-open me-2" style={{ color: "white" }}></i>
                            usman@mk.com.pk
                        </p>
                        <p className="m-0 text-white">
                            <i className="fab fa-whatsapp me-1" style={{ color: "white" }}></i> +92 300 8454065
                        </p>

                    </div>
                    <div className="col-md-4 text-center text-lg-end">
                        <div className="position-relative topBarLinks d-inline-flex align-items-center" style={{ marginRight: "7%" }}>

                            <div

                                target="blank"
                                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                            >
                                <i className="fab fa-facebook-f text-white"></i>
                            </div>
                            <div
                                target="blank"
                                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                            >
                                <i className="fab fa-twitter text-white"></i>
                            </div>
                            <div

                                target="blank"
                                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                            >
                                <i className="fab fa-youtube text-white"></i>
                            </div>
                            <div

                                target="blank"
                                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                            >
                                <i className="fab fa-linkedin-in text-white"></i>
                            </div>
                            <div
                                target="blank"
                                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                            >
                                <i className="fab fa-instagram text-white"></i>
                            </div>
                            <div
                                target="blank"
                                className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
                            >
                                <i className="fab fa-whatsapp text-white"></i>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            {/* <!-- Topbar End --> */}
        </div >
    );
}
