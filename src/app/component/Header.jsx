export default function Header() {
  return (
    <header className="w-full min-h-[300px] md:h-[768px] flex flex-col md:flex-row justify-between items-center p-4 bg-[url('/images/background.png')] bg-cover bg-center shadow-md relative">
      <img src="/images/logo.png" alt="Logo" 
        className="w-[150px] md:w-[246px] h-auto md:h-[87px] mt-4 md:absolute md:top-[40px] md:left-[120px]" 
      />
      <button className="bg-white text-[#682475] px-4 py-2 rounded-[22.5px] w-[180px] md:w-[214px] h-[40px] md:h-[45px] mt-4 md:absolute md:top-[61px] md:left-[80%]">
        Request Proposals
      </button>
      <div className="w-full md:w-[898px] text-center text-[#333333] font-bold text-lg md:text-[49px] leading-[150%] tracking-normal mt-6 md:absolute md:top-[226px] md:left-[50%] md:transform md:-translate-x-1/2">
          Empower Your Brand with Sustainable Mindz Influencer Platform
      </div>
      <button className="w-[200px] md:w-[248px] h-[40px] md:h-[45px] rounded-[22.5px] bg-white text-[#682475] px-4 py-2 text-sm md:text-[14px] font-[Arial] uppercase mt-6 md:absolute md:top-[382px] md:left-[50%] md:transform md:-translate-x-1/2">
        Discover Opportunities
      </button>
      <div className="hidden md:block absolute w-[72px] h-[72px] top-[543px] left-[75%] opacity-76 mix-blend-screen">
        <img src="/images/vector.png" alt="Vector Image" className="w-full h-full object-contain" />
      </div>
      <div className="w-[300px] md:w-[511px] h-auto md:h-[472px] mt-10 md:absolute md:top-[481px] md:left-[50%] md:transform md:-translate-x-1/2">
        <img src="/images/Group.png" alt="Group Image" className="w-full h-full object-contain" />
      </div>
    </header>
  );
}
