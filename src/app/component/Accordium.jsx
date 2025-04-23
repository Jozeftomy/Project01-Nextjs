import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export default function Dropdown() {
    return (
      <div className="max-w-4xl mx-auto mt-12 p-8">
        <h2 className="text-3xl font-extrabold text-center mb-10">Platform Benefits</h2>
  
        <Accordion type="single" collapsible className="w-full space-y-6">
          {/* Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="no-underline hover:no-underline focus-visible:ring-0">
              <span className="text-xl font-bold">1. Creative Discovery and Curation</span>
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed text-gray-800 px-4 py-3 rounded-md">
              Our platform provides AI-powered tools to help discover innovative ideas 
              and curate content that aligns with your brand voice. Whether you're launching a campaign 
              or rebranding, our creative insights ensure you're always ahead of the curve.
            </AccordionContent>
          </AccordionItem>
  
          {/* Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="no-underline hover:no-underline focus-visible:ring-0">
              <span className="text-xl font-bold">2. Campaign Management and Tracking Tool</span>
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed text-gray-800 px-4 py-3 rounded-md">
              Plan, schedule, and monitor your marketing campaigns in real-time. Our dashboard offers 
              detailed analytics, performance insights, and live status tracking to help you optimize results.
            </AccordionContent>
          </AccordionItem>
  
          {/* Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="no-underline hover:no-underline focus-visible:ring-0">
              <span className="text-xl font-bold">3. Content Management</span>
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed text-gray-800 px-4 py-3 rounded-md">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div>
                  <p className="mb-3">
                    We strategize, script, and produce content apt for your product or service.
                    From blogs to videos, get full-cycle content production and post-production.
                  </p>
                  <ul className="list-disc ml-5">
                    <li>Content strategy & scripting</li>
                    <li>High-quality video production</li>
                    <li>SEO-optimized blog articles</li>
                    <li>Post-production editing</li>
                  </ul>
                </div>
                <div>
                  <img
                    src="images/DesignImage.png"
                    alt="Content Management Illustration"
                    className="w-52 md:w-72"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
  
          {/* Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="no-underline hover:no-underline focus-visible:ring-0">
              <span className="text-xl font-bold">4. Campaign Reporting and Strategy Validation</span>
            </AccordionTrigger>
            <AccordionContent className="text-lg leading-relaxed text-gray-800 px-4 py-3 rounded-md">
              Our intelligent reporting system helps you assess the effectiveness of your marketing strategies. 
              Get detailed breakdowns of metrics like conversion rate, engagement, and audience retention. 
              Use our strategic recommendations to improve future campaigns.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  