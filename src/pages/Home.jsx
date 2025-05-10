import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <img src={logo} alt="Society Logo" className="mx-auto w-50 mb-6" />
      <p className="mb-3">{t('intro.paragraph1')}</p>
      <p className="mb-3">{t('intro.paragraph2')}</p>
    </div>
  )
}