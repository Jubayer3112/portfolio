/* eslint-disable react/prop-types */
const ServiceCard = ({ image, title, body }) => {
  return (
    <div>
      <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
        <div className="w-[250px]">
          <img src={image} className="mx-auto w-full" />
        </div>
        <h3 className="my-3 font-display font-medium">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">{body}</p>
      </li>
    </div>
  );
};

export default ServiceCard;
