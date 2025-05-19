import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap p-6 md:text-left">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
        <h1 className="mb-3 text-2xl md:text-5xl">{t("intro.paragraph1")}</h1>
        <p className="mb-3 text-lg">{t("intro.paragraph2")}</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-100 h-auto mt-12 md:mt-0 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
    </div>
  );
}
