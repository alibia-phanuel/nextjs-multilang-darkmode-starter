// Ce fichier est un Server Component (composant côté serveur) utilisé pour gérer la mise en page globale de l'application.

import { getMessages } from "next-intl/server"; // ✅ Importation de la fonction permettant de récupérer les messages de traduction côté serveur
import ThemeProviderWrapper from "../../components/ThemeProviderWrapper"; // ✅ Importation du wrapper qui gère le thème (dark mode et light mode)
import "../../app/globals.css"; // ✅ Importation des styles globaux

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode; // ✅ `children` représente les composants enfants qui seront affichés à l'intérieur de ce layout.
  params: { locale: string }; // ✅ `params` contient les paramètres d'URL, notamment la langue choisie.
}>) {
  const messages = await getMessages(); // ✅ Récupération des messages de traduction en fonction de la langue actuelle
  const locale = params.locale; // ✅ Extraction de la locale depuis les paramètres

  return (
    <html lang={locale}>
      {/* ✅ Définition de la langue du document HTML */}
      <body className="bg-[#e2e2e2c4] dark:bg-gray-800 text-black dark:text-white">
        {/* ✅ Définition des couleurs de fond et de texte en fonction du mode clair/sombre */}
        {/* ✅ ThemeProviderWrapper : Ce composant englobe toute l'application et applique le bon thème et la traduction */}
        <ThemeProviderWrapper messages={messages} locale={locale}>
          {children}{" "}
          {/* ✅ Affichage des composants enfants à l'intérieur du layout */}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
