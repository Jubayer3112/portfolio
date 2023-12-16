/* eslint-disable react/prop-types */
const Progress = ({ name, width, value }) => {
    // Calculate the width in percentage
    const progressWidth = `${width}%`;
  
    return (
      <div>
        <div className="mb-8">
          <span className="inline-block text-xl ">{name}</span>
          <div className="bg-stroke dark:bg-dark-3 relative h-1 w-full rounded-2xl">
            <div
              className="bg-primary absolute top-0 left-0 h-full rounded-2xl"
              style={{ width: progressWidth }}
            >
              <span className="bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white">
                <span className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span>
                {value}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Progress;
  