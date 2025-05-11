import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { i18n, t } = useTranslation()

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ku')
    } else if (i18n.language === 'ku') {
      i18n.changeLanguage('en')
    }
  }

  return (
    <nav className="border-b shadow p-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t('siteTitle')}</h1>
      <div className="space-x-2">
        <button onClick={() => changeLanguage()} className="relative group font-semibold cursor-pointer">
          {i18n.language === 'en' ? t('Kurdî') : t('English')}
          <span className="absolute left-0 -bottom-1 h-1 w-0 bg-[#00350E] transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </nav>
  )
}