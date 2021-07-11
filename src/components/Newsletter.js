import React, { useRef } from 'react';

const Newsletter = () => {
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    emailRef.current.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="card shadow bg-white mt-4">
        <div className="card-body">
          <div className="relative mt-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 text-gray-500 bg-white">
                Subscribe Newsletter
              </span>
            </div>
          </div>
          <div className="mt-6">
            <div className="w-full space-y-6">
              <div className="w-full">
                <div className=" relative ">
                  <input
                    type="text"
                    ref={emailRef}
                    id="search-form-price"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Subscribe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Newsletter;
