import { useTranslation } from "react-i18next";
import flagRaisingImage from "../assets/flag-raising.jpg";

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="p-6 mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("about.title")}</h1>
            <p className="mb-3 text-2xl md:text-3xl">{t("about.longDescription")}</p>
            <div className="mt-6 flex flex-col">
                <img
                    src={flagRaisingImage}
                    alt="Flag Raising"
                    className="w-full md:w-5/6 h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-101"
                />
                <p className="text-base mt-4">{t("about.imageCaption")}</p>
            </div>
        </section>
    )
}