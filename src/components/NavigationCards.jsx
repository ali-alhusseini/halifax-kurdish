import { useTranslation } from "react-i18next";

export default function NavigationCards() {
  const { t } = useTranslation();

  const cards = [
    { titleKey: "cardTitles.about", descriptionKey: "cards.about" },
    { titleKey: "cardTitles.events", descriptionKey: "cards.events" },
    { titleKey: "cardTitles.committee", descriptionKey: "cards.committee" },
    { titleKey: "cardTitles.goals", descriptionKey: "cards.goals" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 px-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative rounded-xl shadow-md border p-10 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">{t(card.titleKey)}</h2>
          <p className="text-md mb-8">{t(card.descriptionKey)}</p>
          <div className="absolute bottom-4 right-4">
            <button className="m-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
