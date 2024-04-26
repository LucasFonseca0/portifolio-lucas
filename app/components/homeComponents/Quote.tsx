import React, { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import TranslateLeft from "../../animation/TranslateLeft.animation";
import TranslateRight from "../../animation/TranslateRight";

const Quote = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  return (
    <section className="bg-pastel flex flex-col justify-center  ">
      <div className="w-[90%] italic flex justify-center items-center text-xl sm:text-2xl md:text-3xl">
        <div className=" w-[70%] sm:text-xl mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 md:text-2xl">
          <TranslateLeft ref={ref}>
            <q className="italic font-semibold text-xl sm:text-2xl md:text-3xl">
              <Trans
                i18nKey="quote"
                components={{ 1: <span className="text-secondary" /> }}
              />
            </q>
          </TranslateLeft>
          <TranslateRight>

          <p className="text-sm sm:text-xl  md:text-2xl">- {t("autor")}</p>
          </TranslateRight>
        </div>
      </div>
    </section>
  );
};

export default Quote;
