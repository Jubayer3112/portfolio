/* eslint-disable react/prop-types */
const Education = ({ degree, university, time }) => {
    return (
      <div className="border-b pb-3">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <h1 className="text-xl">{degree}</h1>
            <div>
              <span className="text-[#939393]">{university}</span>
            </div>
          </div>
  
          <div className="space-y-3">
            <span className="text-[#939393] block">{time}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Education;