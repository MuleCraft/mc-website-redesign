const footerLinks = {
  "WHY MULECRAFT": [
    "The MuleCraft Difference",
    "What is Integration?",
    "Pricing & Editions",
  ],
  "CAPABILITIES": [
    "MuleSoft Platform Overview",
    "Integration & Automation",
    "AI Management",
    "Data Management",
    "API Management",
  ],
  "CONNECTORS": [
    "SAP",
    "Salesforce",
    "NetSuite",
    "ServiceNow",
    "AWS",
  ],
  "RESOURCES": [
    "Resource Center",
    "Our Customers",
    "Blog",
    "Events & Webinars",
    "Training",
  ],
  "SUPPORT": [
    "Help Docs",
    "Submit a Ticket",
    "System Status",
    "Developer Docs",
  ],
  "COMPANY": [
    "About",
    "Careers",
    "Team",
    "Newsroom",
    "Contact us",
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-4 text-slate-300">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-semibold">MuleCraft</span>
            </div>
            
            <p className="text-sm text-slate-400">
              © 2025 Copyright MuleCraft. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Compliance
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
