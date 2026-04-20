import { useTranslation } from "react-i18next";

export default function Events() {
  const { t } = useTranslation();

  return (
    <section className="p-6 mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("cardTitles.events")}</h1>
        <p className="mb-3 text-2xl md:text-3xl">{t("cards.events")}</p>
    </section>
  );
}
