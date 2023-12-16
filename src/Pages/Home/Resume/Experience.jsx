/* eslint-disable react/prop-types */
const Experience = ({ jobTitle, company, address, type, time }) => {
  return (
    <div className="border-b pb-3">
      <div className="flex justify-between items-center">
        <div className="space-y-3">
          <h1 className="text-xl">{jobTitle}</h1>
          <div>
            <span className="text-[#939393]">{company}</span> | 
            <span className="text-[#939393]">{address}</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-[#96bb7c] tracking-[4px] font-semibold bg-[#f4f8f2] p-3 text-center rounded-full">
            {type}
          </h1>
          <span className="text-[#939393] block">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
