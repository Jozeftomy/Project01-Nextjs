import ContactUs from "./Contact";
import Dropdown from "./Accordium";

export default function Body() {
    return (
      <section className="mt-70 w-full flex flex-col items-center px-4">
         <div className="w-full max-w-screen-lg">
            <Dropdown/>
        </div>
        <div className="w-full max-w-screen-lg mt-20">
          <ContactUs />
        </div>
      </section>
    );
}
