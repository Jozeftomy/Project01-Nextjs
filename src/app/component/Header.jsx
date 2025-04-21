export default function Header() {
  return (
    <header className="w-[1440px] h-[768px] flex justify-between items-center p-4 bg-[url('/images/background.png')] bg-cover bg-center shadow-md relative">
      <img src="/images/logo.png" alt="Logo" className="absolute w-[246px] h-[87px] top-[40px] left-[120px]" />
      <button className="bg-white text-[#682475] px-4 py-2 rounded-[22.5px] w-[214px] h-[45px] absolute top-[61px] left-[1106px]">
        Request Proposals
      </button>
      <div className="absolute w-[898px] h-[124px] top-[226px] left-[271px] text-[#333333]  flex justify-center items-center rounded-[22.5px] text-center font-bold text-[49px] leading-[62px] tracking-normal font-sans">
          Empower Your Brand with Sustainable Mindz Influencer Platform
      </div>
      <button className="absolute w-[248px] h-[45px] top-[382px] left-[596px] rounded-[22.5px] bg-white text-[#682475] px-4 py-2 text-[14px] font-[Arial] font-normal leading-[100%] tracking-normal uppercase">
      Discover Opportunities
      </button>
      <div className="absolute w-[72.42px] h-[72.42px] top-[543.1px] left-[1076.79px] opacity-76 mix-blend-screen">
         <img src="/images/vector.png" alt="Vector Image" className="w-full h-full object-cover" />
      </div>
 
      <div className="absolute w-[511.59px] h-[472.40px] top-[481px] left-[464px]">
      <img src="/images/group.png" alt="Group Image" className="w-full h-full object-cover" />
      </div>
    </header>
  );
}
