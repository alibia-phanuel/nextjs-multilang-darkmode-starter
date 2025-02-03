import React from "react"; // ✅ Importation de React

// Définition de l'interface des props du composant `Hero`
interface HeroProps {
  link: string; // ✅ Propriété `link` : un texte qui sera affiché dans le titre principal
  title: string; // ✅ Propriété `title` : un texte qui sera affiché dans le sous-titre
}

// Définition du composant fonctionnel `Hero` qui prend en props `link` et `title`
const Hero = ({ link, title }: HeroProps) => {
  return (
    <div className="h-[40vh] bg-black text-white w-full flex max-md:text-center max-md:px-4 justify-center items-center flex-col">
      {/* ✅ Conteneur principal du composant avec un fond noir, texte blanc et une hauteur définie */}
      <h1 className="text-2xl capitalize">{link}</h1>{" "}
      {/* ✅ Le titre principal (liens ou texte en majuscule) */}
      <h2 className="text-xl">{title}</h2>{" "}
      {/* ✅ Le sous-titre (texte de taille plus petite que le titre principal) */}
    </div>
  );
};

export default Hero; // ✅ Exportation du composant pour pouvoir l'utiliser dans d'autres fichiers
