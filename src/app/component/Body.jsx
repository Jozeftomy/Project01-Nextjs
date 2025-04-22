import ContactUs from "./Contact";

export default function Body() {
    return (
      <section className="mt-10 w-full flex flex-col items-center px-4">
        <div className="w-full text-center text-[#333333] font-['Arial'] font-bold text-xl md:text-[39px] leading-[100%] tracking-[0%] capitalize">
          Platform Benefits
        </div>
        <div className="mt-10 w-full max-w-screen-lg flex flex-col space-y-8">

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#E9E9E9] rounded-2xl text-[#333333] font-bold text-[17px] flex items-center justify-center">
              1
            </div>
            <div className="text-[#333333] font-bold text-lg md:text-[24px]">
              Creative discovery and curation
            </div>
          </div>
          <hr className="w-full border-t border-[#E9E9E9]" />
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#E9E9E9] rounded-2xl text-[#333333] font-bold text-[17px] flex items-center justify-center">
              2
            </div>
            <div className="text-[#333333] font-bold text-lg md:text-[24px]">
              Campaign management and tracking tool
            </div>
          </div>
          <hr className="w-full border-t border-[#E9E9E9]" />
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#E9E9E9] rounded-2xl text-[#333333] font-bold text-[17px] flex items-center justify-center">
                3
              </div>
              <div className="text-[#333333] font-bold text-lg md:text-[24px]">
                Content Management
              </div>
            </div>
            <img src="images/Designimage.png" alt="Description" className="w-[300px] md:w-[450px] h-auto object-contain mt-6 md:mt-0" />
          </div>
          <p className="text-[#333333] text-center text-sm md:text-[17px] leading-[30px] px-4">
            We strategize, script, and produce content apt for your product or service. Get the best in post-production services from us.
          </p>
          <hr className="w-full border-t border-[#E9E9E9]" />
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#E9E9E9] rounded-2xl text-[#333333] font-bold text-[17px] flex items-center justify-center">
              4
            </div>
            <div className="text-[#333333] font-bold text-lg md:text-[24px]">
              Campaign reporting and strategy validation
            </div>
          </div>
          <hr className="w-full border-t border-[#E9E9E9]" />
        </div>
        <div className="w-full max-w-screen-lg mt-20">
          <ContactUs />
        </div>
      </section>
    );
}
