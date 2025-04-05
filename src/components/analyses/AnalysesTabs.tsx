
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmissionsTab from "./EmissionsTab";
import ComparaisonTab from "./ComparaisonTab";
import PrevisionsTab from "./PrevisionsTab";

interface AnalysesTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const AnalysesTabs = ({ activeTab, onTabChange }: AnalysesTabsProps) => {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full md:w-auto">
      <TabsList className="grid grid-cols-3 md:w-[400px]">
        <TabsTrigger value="emissions">Émissions</TabsTrigger>
        <TabsTrigger value="comparaison">Comparaison</TabsTrigger>
        <TabsTrigger value="prévisions">Prévisions</TabsTrigger>
      </TabsList>
    
      <TabsContent value="emissions" className="mt-0">
        <EmissionsTab />
      </TabsContent>

      <TabsContent value="comparaison" className="mt-0">
        <ComparaisonTab />
      </TabsContent>

      <TabsContent value="prévisions" className="mt-0">
        <PrevisionsTab />
      </TabsContent>
    </Tabs>
  );
};

export default AnalysesTabs;
