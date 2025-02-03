import Hero from "@/components/shares/Hero"; // Importation du composant Hero pour l'affichage de l'en-tête
import Card from "../../components/Card"; // Importation du composant Card pour afficher les cartes
import { useTranslations } from "next-intl"; // Importation du hook useTranslations pour gérer la traduction

export default function Home() {
  // Utilisation du hook useTranslations pour récupérer les traductions du menu
  const t = useTranslations("menu");

  return (
    <>
      <div className="flex flex-wrap gap-y-6 flex-col min-h-screen items-center ">
        {/* Section pour le Hero (en-tête) */}
        <div className="w-full">
          <Hero link={t("link1")} title={t("title")} />
        </div>
        {/* Section pour les cartes */}
        <div className="w-full flex justify-center items-center">
          <div className="container flex gap-2 flex-wrap justify-between items-center max-md:justify-center">
            {/* Affichage de trois cartes */}
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
