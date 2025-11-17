import { useState, useEffect } from "react";

export const SalesContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissedTimestamp = localStorage.getItem("salesModalDismissed");
    if (dismissedTimestamp) {
      const now = new Date().getTime();
      if (now < Number(dismissedTimestamp)) {
        return; 
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    const expiry = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // 7 days
    localStorage.setItem("salesModalDismissed", expiry.toString());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-fade-in">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 w-[90%] max-w-[500px] md:w-full md:max-w-[600px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
          aria-label="Close modal"
        >
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/icons/exit_popup_dummy_close_button_01-1.png"
            alt="Close"
            className="w-3 h-3"
          />
        </button>
        <div className="flex flex-col md:grid md:grid-cols-2 md:min-h-[400px]">
          <div className="h-[200px] md:h-auto flex items-center justify-center p-8 bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0]">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/39351f36-4f55-463c-a267-111cc830ecfb-boomi-com/assets/images/AB-test-header-image-1.png"
              alt="Boomi sales team"
              className="object-contain max-w-[200px] max-h-[100px]"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <h2 className="font-display font-bold text-[28px] text-[#1A1A2E] mb-4">
              See what Boomi can do
            </h2>
            <p className="font-body text-base text-[#666666] leading-relaxed mb-8">
              Let us show you how Boomi can help you connect systems, automate
              workflows, and move faster — all tailored to your needs.
            </p>
            <div className="w-full">
              <a
                href="https://boomi.com/custom-demo-request/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-white font-ui font-semibold py-4 px-8 rounded-full mb-4 bg-gradient-to-r from-[#00A1FF] to-[#0066CC] transform transition-transform duration-300 hover:scale-[1.02] hover:from-[#0080CC] hover:to-[#0052A3]"
              >
                Request a demo
              </a>
              <button
                onClick={handleClose}
                className="block w-full text-center font-ui font-medium py-3 px-6 bg-transparent border-none hover:underline bg-gradient-to-r from-[#00A1FF] to-[#0066CC] bg-clip-text text-transparent"
              >
                Maybe later — just browsing for now.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

