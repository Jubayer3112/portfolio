const Navbar = () => {
  const navigation = (
    <>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#hire">Contact</a>
      </li>
    </>
  );
  return (
    <div className="sticky start-0 top-0 z-20 bg-white">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-xl rounded-box w-52"
              >
                {navigation}
              </ul>
            </div>
            <a className="text-3xl">Jubayer Hossain</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">{navigation}</ul>
          </div>
          <div className="navbar-end">
            <a href="#hire" className="py-2 px-10 bg-[#363062] text-white uppercase text-md">
              Hire Me!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
