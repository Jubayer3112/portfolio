
const Contact = () => {
  return (
    <section id="hire" className="relative z-10 overflow-hidden bg-white dark:bg-dark py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 lg:justify-between">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="block mb-4 text-base font-semibold text-primary">
                Contact Me
              </span>
              <h2 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH
              </h2>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
              Feel free to reach out and connect with me! Whether you have questions, collaboration ideas, or just want to discuss the latest in React and web development, I'm always open to conversations. 
              </p>



              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                  
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                     Phone
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    +8801625482946
                  </p>
                </div>
              </div>



              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                 
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Email
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    jubaerlikhon352@gmail.com
                  </p>
                </div>
              </div>






             
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    placeholder="Your Message"
                    className="border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div>
                <span className="absolute -top-10 -right-9 z-[-1]">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
