import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
  // Vérifier si la locale existe dans la liste des locales supportées
  if (!locales.includes(locale || "")) {
    notFound(); // Si la locale est invalide, on renvoie une erreur 404
  }

  // Si la locale est définie, charger les messages associés
  try {
    const messages = await import(`./messages/${locale}.json`);
    return {
      messages: messages.default,
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to load messages for locale: ${locale}`);
  }
});
