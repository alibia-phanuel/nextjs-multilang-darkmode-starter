import Hero from "@/components/shares/Hero";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("menu");
  return (
    <div>
      <Hero link={t("link4")} title={t("title")} />
    </div>
  );
};

export default Page;
