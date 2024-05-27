"use client"
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Awards = () => {
  const { t } = useTranslation();

  const awards = [
    t("award_1"),
    t("award_2"),
    t("award_3"),
    t("award_4"),
    t("award_5")
  ];

  return (
    <div className='h-auto mt-10 md:mt-20 lg:mt-24 text-black w-full flex flex-col items-center justify-center p-4 sm:p-8'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-10'>
        {t('awards')}
      </h1>
      <div className='relative flex flex-col items-center'>
        {awards.map((award, index) => (
          <div key={index} className='flex flex-col items-center'>
            {index !== 0 && <div className="w-0.5 h-12 border-l-2 border-dashed border-primaryDark"></div>}
            <div className='p-6 animate-fade-in-up flex items-center justify-center text-center'>
              <p className='text-lg sm:text-xl md:text-2xl text-primary font-semibold'>
                <Trans i18nKey={`award_${index + 1}`} components={{ span: <span className="text-primaryDarkest" /> }} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
