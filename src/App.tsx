import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import MulesoftExpertise from "./pages/MulesoftExpertise";
import Mule4Migration from "./pages/Mule4Migration";
import MulesoftDevelopment from "./pages/MulesoftDevelopment";
import SnaplogicStrategies from "./pages/SnaplogicStrategies";
import MuleB2BIntegration from "./pages/MuleB2BIntegration";
import OperationsMaintenance from "./pages/OperationsMaintenance";
import SalesCloud from "./pages/SalesCloud";
import DataOrgMigration from "./pages/DataOrgMigration";
import ManagedServices from "./pages/ManagedServices";
import UIDesign from "./pages/UIDesign";
import IntegratedWebDesign from "./pages/IntegratedWebDesign";
import ApigeeAPISolutions from "./pages/ApigeeAPISolutions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/mulesoft-expertise" element={<MulesoftExpertise />} />
          <Route path="/mule-4-migration" element={<Mule4Migration />} />
          <Route path="/mulesoft-development" element={<MulesoftDevelopment />} />
          <Route path="/snaplogic-strategies" element={<SnaplogicStrategies />} />
          <Route path="/mule-b2b-integration" element={<MuleB2BIntegration />} />
          <Route path="/ops-maintenance" element={<OperationsMaintenance />} />
          <Route path="/sales-cloud" element={<SalesCloud />} />
          <Route path="/data-org-migration" element={<DataOrgMigration />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/ui-design" element={<UIDesign />} />
          <Route path="/integrated-web-design" element={<IntegratedWebDesign />} />
          <Route path="/apigee-api-solutions" element={<ApigeeAPISolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
