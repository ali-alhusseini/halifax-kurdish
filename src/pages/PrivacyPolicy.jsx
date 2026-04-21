import { useTranslation } from "react-i18next"

export default function PrivacyPolicy() {
  const { t } = useTranslation()

  const sections = t("privacyPolicy.sections", { returnObjects: true })

  return (
    <section className="p-6 mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{t("privacyPolicy.title")}</h1>
      <p className="mb-2 text-sm text-gray-600">{t("privacyPolicy.lastUpdated")}</p>
      <p className="mb-6 text-xl md:text-2xl">{t("privacyPolicy.intro")}</p>

      <div className="space-y-6">
        {Array.isArray(sections) &&
          sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">{section.heading}</h2>
              <p className="text-base md:text-lg">{section.body}</p>
            </div>
          ))}
      </div>
    </section>
  )
}
