const ServiceCard = ({ image, title, body }) => {
  return (
    <div>
      <div className="bg-gray-200 px-2 py-10">
        <div id="features" className="mx-auto max-w-6xl">
          <p className="text-center text-base font-semibold leading-7 text-primary-500">
            Services
          </p>
          <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Writing has never been so easy
          </h2>
          <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
              <img
                src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium">
                Powered by ChatGPT
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                the cutting-edge language model that makes interactions a
                breeze. With its user-friendly interface, effortlessly tap into
                the world of AI-generated text.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
