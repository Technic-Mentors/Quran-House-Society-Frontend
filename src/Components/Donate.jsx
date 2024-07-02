import { useTranslation } from "react-i18next"

export default function Donate() {
    const { t, i18n } = useTranslation()
    const textDirection = i18n.language === 'ur' ? 'rtl' : 'ltr';
    const urduFont = i18n.language === 'ur' ? 'urdu-font' : '';
    return (
        <div>
            {/* page header */}
            <div className="allPageHeaderBg">
                <div className="allPageHeaderOverlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 allHeaderPadding">
                                <h1 className={`text-center ${urduFont}`}>{t("DonateUs")}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* donate page data */}
            <div className="container pt-5">
                <div className="row donatePage">
                    <h1 className={textDirection}>{t("FundsHead")}</h1>
                    <div className="col-md-12">
                        <ul className={textDirection}>
                            <li> {t("donateList1")}</li>
                            <li>{t("donateList2")}</li>
                        </ul>
                        <h1 className={textDirection}>{t("donateConHead")}</h1>
                        <ul className={textDirection}>
                            <li>{t("donateList3")}</li>
                            <li>{t("donateList4")}</li>
                            <li>{t("donateList5")}</li>
                            <li>{t("donateList6")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
