import { useTranslation } from "react-i18next";
import emailJs from "@emailjs/browser"
import { useRef } from "react";
export default function Contact() {
    const { t, i18n } = useTranslation()
    const formRef = useRef()
    const urduFont = i18n.language === 'ur' ? 'urdu-font' : '';
    const sendEmail = async (e) => {
        e.preventDefault()
        const form = formRef.current
        const name = form.name.value
        const email = form.email.value
        const subject = form.subject.value
        const message = form.message.value
        console.log(name, email, subject, message);
        emailJs.sendForm("", "", form, "").then(() => {
            form.reset()
        })
    }
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className={`text-center ${urduFont}`}>{t("contactHead")}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* contact page data */}
            <div className="container contactInfo py-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{ textAlign: "center" }}>
                            <div className="card-body">
                                <i className="fas fa-phone"></i>
                                <h1 className={urduFont}>{t("conAddHead")}</h1>
                                <p>Jinnah Chowk, Sialkot Road Gujranwala Near Jinnah Park</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ textAlign: "center" }}>
                            <div className="card-body">
                                <i className="fas fa-envelope"></i>
                                <h1 className={urduFont}>{t("conPhoHead")}</h1>
                                <p>00001111010</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ textAlign: "center" }}>
                            <div className="card-body">
                                <i className="fas fa-map-marker-alt"></i>
                                <h1 className={urduFont}>{t("conEmaHead")}</h1>
                                <p>youremail@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container contactForm py-4">
                <form onSubmit={sendEmail} ref={formRef}>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="email" placeholder="Your Email" />
                        </div>
                        <div className="col-md-4">
                            <input className="form-control" type="text" name="subject" placeholder="Subject" />
                        </div>
                        <div className="col-md-12">
                            <textarea className="form-control" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <button className={`btn btn1 ${urduFont}`}>{t("contFormBtn")}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
