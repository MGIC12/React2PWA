import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Error404() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('404.h1');
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="text-9xl font-extrabold select-none">
        <span className="text-[#00e5ff]">4</span>
        <span className="text-white">0</span>
        <span className="text-[#00e5ff]">4</span>
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {t('404.h1')}
      </h1>

      <p className="mt-6 text-base leading-7 text-white/90">
        {t('404.p1')}
      </p>

      <div className="flex items-center justify-center mt-10 gap-x-6">
        <Link
          to="/"
          className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-bold shadow-sm hover:bg-cyan-600  focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
        >
          {t('404.homeButton')}
        </Link>
      </div>
    </div>
  );
}
