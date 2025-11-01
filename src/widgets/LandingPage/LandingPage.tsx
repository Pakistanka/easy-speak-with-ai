export const LandingPage = () => {
  return (

    <div className="min-h-screen flex items-center justify-center flex-wrap bg-gray-50 py-6 px-4">
      {/* Общий контейнер */}
      <section className="flex flex-col md:flex-row items-center w-full max-w-5xl gap-8">
        {/* Картинка */}
        <div className="flex justify-center xs:justify-start md:justify-end md:w-1/2 xs:order-1 md:order-2">
          <img
            src="/images/illustration.svg"
            alt="Contact"
            className="w-28 h-auto md:w-72"
          />
        </div>
        {/* Форма */}
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get in touch!</h2>
          <p className="text-gray-600 mb-5 text-sm sm:text-base">
            Have a question or need support? Contact us!
          </p>
          <form className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full sm:w-1/2">
                <label htmlFor="firstName" className="mb-1 text-xs font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Write your name"
                  className="w-full sm:w-1/2 border border-gray-200 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition text-sm"
                  required
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
                <label htmlFor="lastName" className="mb-1 text-xs font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Write your last name"
                  className="w-full sm:w-1/2 border border-gray-200 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-xs font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition text-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-xs font-semibold text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Type your message…"
                rows={5}
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition resize-none text-sm"
                required
              ></textarea>
            </div>
            <label className="flex items-center gap-2 text-xs text-gray-600">
              <input type="checkbox" className="accent-indigo-600" required />
              I fully agree to the <a href="#" className="underline text-indigo-700">Terms and Conditions</a> stated.
            </label>
            <button
              type="submit"
              className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg text-sm"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Аккордеон */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Any questions?</h2>
          <p className="text-gray-700 text-sm md:text-base">
            Find answers to common questions about how our language learning application works, privacy, and cryptocurrency transactions.
          </p>
        </div>
        <div className="divide-y divide-gray-300">
          <details open className="py-3 group">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              How does it work?
              <span className="ml-2 group-open:rotate-180 transition-transform rotate-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l3-3 3 3" /></svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              Our language learning application provides a user-friendly platform for teachers and students to connect. It utilizes cryptocurrency payments for added privacy and security.
            </p>
          </details>

          <details open className="py-3 group">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              How does it work?
              <span className="ml-2 group-open:rotate-180 transition-transform rotate-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l3-3 3 3" /></svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              Our language learning application provides a user-friendly platform for teachers and students to connect. It utilizes cryptocurrency payments for added privacy and security.
            </p>
          </details>
          <details open className="py-3 group">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              How does it work?
              <span className="ml-2 group-open:rotate-180 transition-transform rotate-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l3-3 3 3" /></svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              Our language learning application provides a user-friendly platform for teachers and students to connect. It utilizes cryptocurrency payments for added privacy and security.
            </p>
          </details>

          <details open className="py-3 group">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              How does it work?
              <span className="ml-2 group-open:rotate-180 transition-transform rotate-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l3-3 3 3" /></svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              Our language learning application provides a user-friendly platform for teachers and students to connect. It utilizes cryptocurrency payments for added privacy and security.
            </p>
          </details>

          <details open className="py-3 group">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              How does it work?
              <span className="ml-2 group-open:rotate-180 transition-transform rotate-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l3-3 3 3" /></svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              Our language learning application provides a user-friendly platform for teachers and students to connect. It utilizes cryptocurrency payments for added privacy and security.
            </p>
          </details>
        </div>
      </section>


      <section className="max-w-5xl mx-auto mt-8 mb-16 px-4 relative">
        <div className="bg-indigo-900 rounded-3xl flex flex-col md:flex-row p-8 md:p-12 gap-6 relative">
          <div className="absolute bottom-4 left-4 z-10 w-48 opacity-70">
            <img src="/images/earth.svg" alt="Earth" className="w-full" />
          </div>
          <div className="text-center md:text-left text-white max-w-xl ml-0 md:ml-48 z-0">
            <h2 className="text-xl md:text-3xl font-bold mb-3">Learn a new language today</h2>
            <p className="text-sm md:text-base mb-5">
              Discover the power of EasySpeak and unlock your potential to speak confidently and fluently in a short amount of time.
              Join our community and start your journey to improved speaking skills today!
            </p>
            <a href="#" className="inline-block bg-indigo-400 hover:bg-indigo-500 py-2 px-8 rounded-full text-white font-semibold transition text-sm md:text-base">
              Get started
            </a>
          </div>
        </div>
      </section>


    </div>

  )
}