import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";


const Quote = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  return (
    <section className="bg-pastel flex flex-col justify-center  ">
      <div className="w-[90%] italic flex justify-center items-center text-xl sm:text-2xl md:text-3xl">
        <div className=" w-[70%] sm:text-xl mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 md:text-2xl">
          <TranslateAnimation.TranslateRight>
            <q className="italic font-semibold text-xl sm:text-2xl md:text-3xl">
              <Trans
                i18nKey="quote"
                components={{ 1: <span className="text-secondary" /> }}
              />
            </q>
          </TranslateAnimation.TranslateRight>
          <TranslateAnimation.TranslateLeft>

          <p className="text-sm sm:text-xl  md:text-2xl">- {t("autor")}</p>
          </TranslateAnimation.TranslateLeft>
        </div>
      </div>
    </section>
  );
};

export default Quote;
