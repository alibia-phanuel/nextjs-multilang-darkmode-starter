"use client";
import { useTranslations } from "next-intl";
import ThemeBtn from "./ThemeBtn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("menu");
  const pathname = usePathname();
  const router = useRouter();
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-full flex justify-center items-center py-4 border-b-2 bg-white dark:bg-gray-800">
      <div className=" flex relative justify-between items-center text-gray-500 dark:text-gray-400   container px-4 max-md:p-0">
        <div className="font-bold max-md:px-2 dark:text-white">LOGO</div>
        <div className="flex gap-4  max-md:overflow-x-auto dark:bg-gray-800 capitalize dark:text-white text-lg max-md:bg-white  justify-center items-center max-md:absolute w-full max-md:bottom-[-62px] max-md:pl-10 max-md:py-2">
          <Link href={`/${locale}/`}>{t("link1")}</Link>
          <Link href={`/${locale}/services`}>{t("link2")}</Link>
          <Link href={`/${locale}/Testimonial`}>{t("link3")}</Link>
          <Link href={`/${locale}/Contact`}>{t("link4")}</Link>
        </div>
        <div className="flex justify-between items-center gap-4 max-md:px-2">
          <select
            value={locale}
            onChange={handleLanguageChange}
            className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
          <div>
            <ThemeBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
