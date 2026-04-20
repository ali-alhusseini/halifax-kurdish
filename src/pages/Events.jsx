import { useTranslation } from "react-i18next";

export default function Events() {
  const { t } = useTranslation();

  return (
    <section className="p-6 md:p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("cardTitles.events")}</h1>
      <p className="text-base leading-7">{t("cards.events")}</p>
    </section>
  );
}
