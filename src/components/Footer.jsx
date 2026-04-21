import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t mt-12">
      <div className="mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Halifax Kurdish Society. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/privacy-policy" className="hover:underline text-sm">{t("footer.privacyPolicy")}</Link>
          <a href="#" className="hover:underline text-sm">{t("footer.contact")}</a>
        </div>
      </div>
    </footer>
  )
}
