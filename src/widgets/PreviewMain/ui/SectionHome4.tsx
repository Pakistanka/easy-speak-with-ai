import { useTranslations } from 'next-intl';
import styles from './SectionHome4.module.css'

export const SectionHome4 = () => {
    const t = useTranslations('homePage');

    return (
        <section className="home-4 pb-30 text-center">
            <div className="container max-w-[1304px] mx-auto px-[19px] xl:px-0">
                <div className="text-[27px] md:text-[30px] lg:text-[47px] font-bold pb-10 md:pb-14">
                    <p>{t('titleSection4')}</p>
                </div>
                <div className="div grid grid-cols-1 gap-[40] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className='div'>
                        <div className={`${styles['wrapp-stepNumber']} ml-[150]  relative flex justify-center items-center w-[41px] md:w-[54px] h-[41px] md:h-[54px] text-(--color-number-stepNumber) font-normal text-[27px] md:text-[36px] rounded-full border-[1]border-(--home-4-stepNumber-color) bg-(--home-4-stepNumber-color) ${styles.stepNumber}`}>1</div>
                        <h3 className="text-[21px] md:text-[27px] font-bold pt-6 pb-4 md:pb-6">{t('blockStep1Title')}</h3>
                        <p className='text-[16px] md:text-[21px]'>{t('blockStep1Description')}</p>
                    </div>
                    <div className="div">
                        <div className={`${styles['wrapp-stepNumber']} ml-[150] lg:m-auto mb-6 relative flex justify-center items-center w-[41px] md:w-[54px] h-[41px] md:h-[54px] text-(--color-number-stepNumber) font-normal text-[27px] md:text-[36px] rounded-full border-[1]border-(--home-4-stepNumber-color) bg-(--home-4-stepNumber-color) ${styles.stepNumber}`}>2</div>
                        <h3 className="text-[21px] md:text-[27px] font-bold pt-6 pb-4 md:pb-6">{t('blockStep2Title')}</h3>
                        <p className='text-[16px] md:text-[21px]'>{t('blockStep2Description')}</p>
                    </div>
                    <div className="div">
                        <div className={`${styles['wrapp-stepNumber']} ml-[150] mb-6 relative flex justify-center items-center w-[41px] md:w-[54px] h-[41px] md:h-[54px] text-(--color-number-stepNumber) font-normal text-[27px] md:text-[36px] rounded-full border-[1] border-(--home-4-stepNumber-color) bg-(--home-4-stepNumber-color) ${styles.stepNumber} ${styles.stepNumberThird}`}>3</div>
                        <h3 className="text-[21px] md:text-[27px] font-bold pt-6 pb-4 md:pb-6">{t('blockStep3Title')}</h3>
                        <p className='text-[16px] md:text-[21px]'>{t('blockStep3Description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};