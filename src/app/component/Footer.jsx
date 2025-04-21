export default function Footer() {
    return (
      <footer className="absolute w-[1440px] h-[68px] top-[3378px] bg-[url('/images/background.png')] bg-cover bg-center text-white flex items-center justify-between px-12">
        <div className="w-[388px] h-[17px] text-[#333333] text-[15px] font-normal leading-[100%] tracking-normal font-[Arial]">
            Copyright © 2024 Sustainable Mindz. All Rights Reserved.
        </div> 
        <div className="w-[133px] h-[36px]  text-white flex items-center justify-center rounded-md">
          <img src="/images/Icons.png" alt="Footer Icon" className="w-full h-full object-contain" />
        </div>
      </footer>
    );
  }
  