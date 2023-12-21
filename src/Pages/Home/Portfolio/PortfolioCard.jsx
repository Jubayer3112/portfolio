/* eslint-disable react/prop-types */
const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  live,
  client,
  server,
  description,
  id,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px] h-[300px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
              {title}
            </h3>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById(id).showModal()}
            >
              Details
            </button>
            <dialog id={id} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <div className="card  bg-base-100">
                  <figure className="h-300px">
                    <img src={ImageHref} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live
                      </a>
                      <a
                        href={client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Client
                      </a>
                      <a
                        href={server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Server
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};
export default PortfolioCard;
