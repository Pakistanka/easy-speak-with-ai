export const PreviewMain=()=>{

    return <div>
        <section className="home-1 py-15">
            <div className="container">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-6 " >Learn languages easily with <span className="text-blue-700">E</span>asy<span className="text-red-700">S</span>peak - start your journey today</h1>
                <p>Our language learning application offers an anonymous and secure environment for teachers and students. With crypto payments, you can enjoy the benefits of a decentralized currency without the need for traditional banking information.</p>
                <a href="#">Get started</a>
            </div>
        </section>
        <section className="home-2 pb-30">
            <div className="container grid grid-cols-1 gap-[40] sm:grid-cols-2 lg:grid-cols-[314px_410px_520px]  px-4 ">
                <div className="flex flex-col justify-between h-[440px] ">
                    <img 
                        src="/images/img-pay.webp" 
                        alt="Описание" 
                        // width={600} 
                        // height={200}
                        />

                    <p>Pay with cryptocurrency</p>
                    <p>Effortless transactions: embrace the future of payment</p>
                </div>
                <div className="flex flex-col justify-between h-[440px]">
                    <img 
                        src="/images/img-learn.webp" 
                        alt="Описание" 
                    />
                    <p>Learn languages anonymously</p>
                    <p>Experience the benefits of anonymous language learning.</p>
                </div>
                <div className="flex flex-col justify-between h-[440px] bg-[url('/images/img-wrapper.webp')] bg-cover bg-center">
                    <img 
                        src="/images/img-discover.webp" 
                        alt="Описание" 
                    />
                    <p>Discover the power of our app</p>
                    <p>Learn at your own pace with our easy-to-use interface.</p>
                </div>
            </div>
        </section>
        <section className="home-3 pb-30">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-40">
                <div>
                    <h2 className="text-3xl sm:text-2xl md:text-5xl lg:text-5xl pb-6">Discover our innovative Language Learning App</h2>
                    <p>Our application offers a range of benefits for both teachers and students. Teachers can easily create and manage their language courses, while students can enjoy a seamless learning experience with speaking lessons and personalized feedback.</p>
                </div>
                <div>
                    <img src="/images/phone-girl.webp" alt="Описание" />
                </div>
                
            </div>
        </section>
        <section className="home-4 pb-30">
            <div className="container">
                <div className="text-3xl sm:text-2xl md:text-5xl lg:text-5xl pb-6">
                    <p>Get started in 3 simple steps</p>
                </div>
                    <div className="div grid grid-cols-1 gap-[40] sm:grid-cols-2 lg:grid-cols-3 px-4">
                        <div className="div">
                            <div className="relative flex justify-center items-center w-[54px] h-[54px] text-white font-normal text-[36px] rounded-full border-[1] border-black bg-black before:absolute before:content-[''] before:w-[340px] before:h-[2] before:left-[76px] before:bg-gray-500">1</div>
                            <h3 className="h4 pb-6">Join our language learning community today!</h3>
                            <p>Signing up is quick and easy. Begin your journey by creating a profile. The app helps students explore lessons and  teachers showcase their expertise.</p>
                        </div>
                        <div className="div">
                            <div className="relative flex justify-center items-center w-[54px] h-[54px] text-white font-normal text-[36px] rounded-full border-[1] border-black bg-black before:absolute before:content-[''] before:w-[340px] before:h-[2] before:left-[76px] before:bg-gray-500">2</div>
                            <h3 className="h4 pb-6">Explore lessons and connect with the right match</h3>
                            <p>Discover a diverse range of lessons. For students, find the perfect teacher, and for teachers, showcase your lessons to connect with eager learners.</p>
                        </div>
                        <div className="div">
                            <div className="relative flex justify-center items-center w-[54px] h-[54px] text-white font-normal text-[36px] rounded-full border-[3px] border-black bg-black">3</div>
                            <h3 className="h4 pb-6">Start your journey to learn a new language</h3>
                            <p>Finalize your connection by booking lessons (for students) or getting booked (for teachers). Pay with crypto and start the learning journey!</p>
                        </div>
                </div>
            </div>
        </section>
    </div>
}