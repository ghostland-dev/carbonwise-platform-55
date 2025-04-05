
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AnalysesHeader from "@/components/analyses/AnalysesHeader";
import AnalysesTabs from "@/components/analyses/AnalysesTabs";
import AnalysesToolbar from "@/components/analyses/AnalysesToolbar";

const Analyses = () => {
  const [activeTab, setActiveTab] = useState("emissions");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
        <AnalysesHeader />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <AnalysesTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <AnalysesToolbar />
        </div>
      </main>
    </div>
  );
};

export default Analyses;
