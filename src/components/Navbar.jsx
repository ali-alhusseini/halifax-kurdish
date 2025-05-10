import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { i18n, t } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="border-b shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t('siteTitle')}</h1>
      <div className="space-x-2">
        <button onClick={() => changeLanguage('en')} className="hover:underline">
          {t('language.en')}
        </button>
        <button onClick={() => changeLanguage('ku')} className="hover:underline">
          {t('language.ku')}
        </button>
      </div>
    </nav>
  )
}