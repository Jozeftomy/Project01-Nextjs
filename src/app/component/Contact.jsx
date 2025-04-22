import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      <div className="w-full md:w-1/2">
        <h2 className="font-[Arial] font-normal text-[20px] leading-[30px] tracking-[0%]">Contact Us</h2>
        <h3 className="text-xl font-semibold mb-4">Get In Touch With Us Now</h3>
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-6">
            <img src="images/phoneIcon.png" alt="Phone Icon" className="w-6 h-6 mr-2" />
            <span className="text-gray-700">+971 4529 9051</span>
          </div>
          <div className="flex items-center">
            <img src="images/number.png" alt="Number Icon" className="w-6 h-6 mr-2" />
            <span className="text-gray-700">info@sustainablemindz.com</span>
          </div>
        </div>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Name</label>
              <input type="text" className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl" />
            </div>
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Phone</label>
              <input type="text" className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl" />
            </div>
          </div>
          
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Email</label>
              <input type="email" className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl" />
            </div>
            <div className="flex flex-col w-1/2 space-y-2">
              <label>Subject</label>
              <input type="text" className="p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl" />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label>Message</label>
            <input type="text" className="w-full p-2 border border-gray-300 bg-[#F5F5F5] rounded-3xl" />
          </div>

          <button type="submit" className="px-4 py-2 text-sm bg-white text-purple-600 rounded-3xl border border-purple-100 shadow-md shadow-purple-200">
            SEND MESSAGE NOW
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img src="images/Maskgroup.png" alt="Contact Illustration" className="w-3/4 h-auto" />
      </div>
    </div>
  );
};

export default ContactUs;
