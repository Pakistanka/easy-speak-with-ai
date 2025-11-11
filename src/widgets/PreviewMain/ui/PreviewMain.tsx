import { Button } from '@/shared';
import styles from './PrevieMain.module.css';

export const PreviewMain=()=>{

    return <div>
        <section className="home-1 py-15 text-center">
            <div className="container max-w-[1304px] mx-auto px-[19px] xl:px-0">
                <div className="lg:w-[1080] m-auto">
                    <h1 className="text-4xl font-bold lg:text-6xl leading-[150%] pb-6  " >Learn languages easily with <span className="text-(--color-span-e)">E</span>asy<span className="text-(--color-span-s)">S</span>peak - start your journey today</h1>
                    <p className='leading-[150%] pb-10 text-[21px]'>Our language learning application offers an anonymous and secure environment for teachers and students. With crypto payments, you can enjoy the benefits of a decentralized currency without the need for traditional banking information.</p>
                    <Button variant="primary" size="figma_md">Get started</Button>
                </div>
            </div>
        </section>
        <section className="home-2 pb-30">
            <div className="container max-w-[1304px] mx-auto px-[19px] xl:px-0">
                <div className="grid gap-4 grid-cols-1 justify-items-center xl:grid-cols-[341px_413px_1fr] xl:justify-items-stretch">
                    <div className="flex flex-col w-full max-w-[352px] xl:max-w-none h-[355px] xl:h-[440px] bg-(--block-pay-background) border border-black rounded-[40px] px-5 py-5 text-(--block-pay-text)">
                        <img className='pb-8 w-[286] xl:w-[300] ' 
                            src="/images/img-pay.webp" 
                            alt="Описание" 
                        />
                        <p className="text-[21px] xl:text-[27px] font-bold pb-4 wrap-break-word">Pay with cryptocurrency</p>
                        <p className='text-[16px] xl:text-[20px] wrap-break-word'>Effortless transactions: embrace the future of payment</p>
                    </div>
                    <div className="flex flex-col w-full max-w-[352px] xl:max-w-none h-[374px] xl:h-[440px] bg-(--block-learn-background) rounded-[40px] px-8 py-5 text-white">
                        <img className='pb-8'
                            src="/images/img-learn.webp" 
                            alt="Описание" 
                        />
                        <p className="text-[21px] xl:text-[27px] font-bold pb-4 wrap-break-word">Learn languages anonymously</p>
                        <p className='text-[16px] xl:text-[20px] wrap-break-word'>Experience the benefits of anonymous language learning.</p>
                    </div>
                    <div className="grid grid-cols-1 w-full max-w-[352px] xl:max-w-none h-auto min-h-[402px] xl:h-[440px] bg-[url('/images/img-wrapper.webp')] bg-cover bg-center p-4 md:p-6 text-white rounded-[40px]">
                        <div className="row-1">
                            <p className="text-[21px] xl:text-[27px] font-bold wrap-break-word">Discover the power of our app</p>
                        </div>
                        <div className="row-2">
                            <p className='pb-4 lg:pb-8 text-[16px] xl:text-[20px] wrap-break-word'>Learn at your own pace with our easy-to-use interface.</p>
                        </div>
                        <div className="row-3 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-0">
                            <div className="col-1 flex justify-center lg:justify-start">
                                <img className="w-full max-w-[170px] sm:max-w-60 lg:w-[170px] mr-[21px] mb-[57px] xl:mr-0 xl:mb-0 xl:w-60"
                                    src="/images/img-discover.webp" 
                                    alt="Discover app" 
                                />
                            </div>
                            <div className="col-2 flex items-end justify-center lg:justify-start lg:pl-7 xl:pl-10 pb-2.5 text-center ">
                                <p className="w-full max-w-[110px] sm:max-w-[110px] lg:max-w-[210px] text-[16px] lg:text-[16px] xl:text-[21px] font-bold">Begin your language journey today!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
        <section className="home-3 pb-30">
            <div className="container max-w-[1304px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-[19px] lx:px-0">
                <div>
                    <h2 className="text-[27px] leading-[150%]  lg:text-5xl font-bold pb-6">Discover our innovative Language Learning App</h2>
                    <p className='sm:text-[16px] lg:text-[21px] '>Our application offers a range of benefits for both teachers and students. Teachers can easily create and manage their language courses, while students can enjoy a seamless learning experience with speaking lessons and personalized feedback.</p>
                </div>
                <div>
                    <img src="/images/phone-girl.webp" alt="Описание" />
                </div>
                
            </div>
        </section>
        <section className="home-4 pb-30 text-center">
            <div className="container max-w-[1304px] mx-auto px-[19px] xl:px-0">
                <div className="text-[27px] md:text-[30px] lg:text-[47px] font-bold pb-10 md:pb-14">
                    <p>Get started in 3 simple steps</p>
                </div>
                <div className="div grid grid-cols-1 gap-[40] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                    <div className='div'>
                        <div className={`${styles['wrapp-stepNumber']} ml-[150]  relative flex justify-center items-center w-[41px] md:w-[54px] h-[41px] md:h-[54px] text-(--color-number-stepNumber) font-normal text-[27px] md:text-[36px] rounded-full border-[1]border-(--home-4-stepNumber-color) bg-(--home-4-stepNumber-color) ${styles.stepNumber}`}>1</div>
                        <h3 className="text-[21px] md:text-[27px] font-bold pt-6 pb-4 md:pb-6">Join our language learning community today!</h3>
                        <p className='text-[16px] md:text-[21px]'>Signing up is quick and easy. Begin your journey by creating a profile. The app helps students explore lessons and  teachers showcase their expertise.</p>
                    </div>
                    <div className="div">
                        <div className={`${styles['wrapp-stepNumber']} ml-[150] lg:m-auto mb-6 relative flex justify-center items-center w-[41px] md:w-[54px] h-[41px] md:h-[54px] text-(--color-number-stepNumber) font-normal text-[27px] md:text-[36px] rounded-full border-[1]border-(--home-4-stepNumber-color) bg-(--home-4-stepNumber-color) ${styles.stepNumber}`}>2</div>
                        <h3 className="text-[21px] md:text-[27px] font-bold pt-6 pb-4 md:pb-6">Explore lessons and connect with the right match</h3>
                        <p className='text-[16px] md:text-[21px]'>Discover a diverse range of lessons. For students, find the perfect teacher, and for teachers, showcase your lessons to connect with eager learners.</p>
                    </div>
                    <div className="div">
                        <div className={`${styles['wrapp-stepNumber']} ml-[150] mb-6 relative flex justify-center items-center w-[41px] md:w-[54px] h-[41px] md:h-[54px] text-(--color-number-stepNumber) font-normal text-[27px] md:text-[36px] rounded-full border-[1] border-(--home-4-stepNumber-color) bg-(--home-4-stepNumber-color) ${styles.stepNumber} ${styles.stepNumberThird}`}>3</div>
                        <h3 className="text-[21px] md:text-[27px] font-bold pt-6 pb-4 md:pb-6">Start your journey to learn a new language</h3>
                        <p className='text-[16px] md:text-[21px]'>Finalize your connection by booking lessons (for students) or getting booked (for teachers). Pay with crypto and start the learning journey!</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
}