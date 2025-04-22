import ContactUs from "./Contact";



export default function Body() {
    return (
      <section className="mt-50 w-full">
      <div className="absolute w-[324px] h-[45px] top-[1074px] left-[558px] font-['Arial'] font-bold text-[39px] leading-[100%] tracking-[0%] capitalize">
      Platform Benefits
      </div>
      <div className="absolute w-[28px] h-[28px] top-[1202px] left-[184px] bg-[#E9E9E9] rounded-2xl text-[#333333] font-['Arial'] font-bold text-[17px] leading-[30px] tracking-[0%] flex items-center justify-center">
         1
      </div>
      <div className="absolute w-[521px] h-[30px] top-[1199px] left-[150px] text-[#333333] font-['Arial'] font-bold text-[24px] leading-[30px] tracking-[0%] flex items-center justify-center">
       Creative discovery and curation
      </div>
      <hr className="absolute w-[1149px] top-[1256px] left-[145px] border-t border-[#E9E9E9]" />

      <div className="absolute w-[28px] h-[28px] top-[1281px] left-[184px] bg-[#E9E9E9] rounded-2xl text-[#333333] font-['Arial'] font-bold text-[17px] leading-[30px] tracking-[0%] flex items-center justify-center">
         2
      </div>
      <div className="absolute w-[521px] h-[30px] top-[1281px] left-[205px] text-[#333333] font-['Arial'] font-bold text-[24px] leading-[30px] tracking-[0%] flex items-center justify-center">
      Campaign management and tracking tool
      </div>
      <hr className="absolute w-[1149px] top-[1327px] left-[145px] border-t border-[#E9E9E9]" />

      <div className="absolute w-[28px] h-[28px] top-[1360px] left-[184px] bg-[#E9E9E9] rounded-2xl text-[#333333] font-['Arial'] font-bold text-[17px] leading-[30px] tracking-[0%] flex items-center justify-center">
         3
      </div>
      <div className="absolute w-[521px] h-[30px] top-[1360px] left-[90px] text-[#333333] font-['Arial'] font-bold text-[24px] leading-[30px] tracking-[0%] flex items-center justify-center">
      Content Management
      </div>
      <div className="absolute w-[507px] h-[60px] top-[1436px] left-[234px] text-[#333333] font-['Arial'] font-normal text-[17px] leading-[30px] tracking-[0%]  flex items-center justify-center text-center px-2">
          We strategize, script, and produce content apt for your product or service. Get the best in post-production services from us.
      </div>
      <div className="absolute w-[450.76px] h-[350.11px] top-[1378.65px] left-[835.57px] ">
         <img src="images/Designimage.png" alt="Description" className="w-full h-full object-cover" />
      </div>
      <hr className="absolute w-[1149px] top-[1790px] left-[145px] border-t border-[#E9E9E9]" />

      <div className="absolute w-[28px] h-[28px] top-[1830px] left-[184px] bg-[#E9E9E9] rounded-2xl text-[#333333] font-['Arial'] font-bold text-[17px] leading-[30px] tracking-[0%] flex items-center justify-center">
         4
      </div>
      <div className="absolute w-[521px] h-[30px] top-[1830px] left-[215px] text-[#333333] font-['Arial'] font-bold text-[24px] leading-[30px] tracking-[0%] flex items-center justify-center">
      Campaign reporting and strategy validation
      </div>
      <hr className="absolute w-[1149px] top-[1887px] left-[145px] border-t border-[#E9E9E9]" />

      {/* <div className="absolute w-[450.76px] h-[350.11px top-[2074px] left-[775px] ">
        <img src="images/Maskgroup.png" alt="Description" className="w-full h-full object-cover" />
    </div>*/}
      <div className="absolute w-[600] h-[550px] top-[2000px] left-[145px]">  
          <ContactUs />
      </div>

      </section>
    );
  }
  