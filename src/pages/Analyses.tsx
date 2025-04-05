
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart, Calendar, Filter, Download, ArrowUpRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";

const Analyses = () => {
  const [activeTab, setActiveTab] = useState("emissions");

  // Données d'exemple pour les graphiques
  const emissionsData = [
    { mois: "Jan", scope1: 45, scope2: 62, scope3: 105 },
    { mois: "Fév", scope1: 50, scope2: 58, scope3: 110 },
    { mois: "Mar", scope1: 48, scope2: 54, scope3: 115 },
    { mois: "Avr", scope1: 52, scope2: 50, scope3: 120 },
    { mois: "Mai", scope1: 40, scope2: 45, scope3: 125 },
    { mois: "Juin", scope1: 38, scope2: 42, scope3: 118 },
  ];

  const sectorialData = [
    { name: "Production", value: 35 },
    { name: "Transport", value: 25 },
    { name: "Bureaux", value: 20 },
    { name: "Chaîne d'approvisionnement", value: 15 },
    { name: "Déchets", value: 5 },
  ];

  const COLORS = ["#4FD1C5", "#90CDF4", "#F6AD55", "#FC8181", "#B794F4"];

  const comparaisonData = [
    { mois: "Jan", actuel: 212, precedent: 240 },
    { mois: "Fév", actuel: 218, precedent: 238 },
    { mois: "Mar", actuel: 217, precedent: 235 },
    { mois: "Avr", actuel: 222, precedent: 230 },
    { mois: "Mai", actuel: 210, precedent: 225 },
    { mois: "Juin", actuel: 198, precedent: 222 },
  ];

  const indicateursData = [
    { name: "Émissions totales", critere: "tCO₂e", q1: 420, q2: 390, q3: 380, q4: 340 },
    { name: "Intensité carbone", critere: "tCO₂e/M€", q1: 18.5, q2: 17.2, q3: 16.8, q4: 15.4 },
    { name: "Énergie renouvelable", critere: "%", q1: 65, q2: 72, q3: 75, q4: 78 },
    { name: "Déchets valorisés", critere: "%", q1: 45, q2: 52, q3: 58, q4: 60 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-8 pt-4">
          <h1 className="text-3xl font-bold tracking-tight animate-slide-down">Analyses Avancées</h1>
          <p className="text-muted-foreground mt-1 animate-slide-down animation-delay-100">
            Explorez vos données d'émissions carbone en profondeur
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="grid grid-cols-3 md:w-[400px]">
              <TabsTrigger value="emissions">Émissions</TabsTrigger>
              <TabsTrigger value="comparaison">Comparaison</TabsTrigger>
              <TabsTrigger value="prévisions">Prévisions</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              <span>Période</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              <span className="hidden md:inline">Filtres</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden md:inline">Exporter</span>
            </Button>
          </div>
        </div>

        <TabsContent value="emissions" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2 animate-slide-up">
              <CardHeader>
                <CardTitle>Évolution des émissions par scope</CardTitle>
                <CardDescription>Tendance sur les 6 derniers mois</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={emissionsData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                      <defs>
                        <linearGradient id="colorScope1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="colorScope2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#90CDF4" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#90CDF4" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="colorScope3" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F6AD55" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#F6AD55" stopOpacity={0.2} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="mois" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} unit=" tCO₂e" />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="scope1" name="Scope 1" stroke="#4FD1C5" fillOpacity={1} fill="url(#colorScope1)" />
                      <Area type="monotone" dataKey="scope2" name="Scope 2" stroke="#90CDF4" fillOpacity={1} fill="url(#colorScope2)" />
                      <Area type="monotone" dataKey="scope3" name="Scope 3" stroke="#F6AD55" fillOpacity={1} fill="url(#colorScope3)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up animation-delay-100">
              <CardHeader>
                <CardTitle>Répartition des émissions</CardTitle>
                <CardDescription>Par activité</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={sectorialData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {sectorialData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Proportion"]} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  {sectorialData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                        <span>{item.name}</span>
                      </div>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparaison" className="mt-0">
          <div className="grid grid-cols-1 gap-6 mb-6">
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Comparaison année sur année</CardTitle>
                <CardDescription>Évolution des émissions totales par rapport à l'année précédente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={comparaisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="mois" />
                      <YAxis unit=" tCO₂e" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="precedent" name="Année précédente" fill="#94A3B8" />
                      <Bar dataKey="actuel" name="Année en cours" fill="#4FD1C5" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up animation-delay-100">
              <CardHeader>
                <CardTitle>Indicateurs de performance environnementale</CardTitle>
                <CardDescription>Évolution trimestrielle des KPIs environnementaux</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Indicateur</th>
                        <th className="text-left py-3 px-4 font-medium">Critère</th>
                        <th className="text-right py-3 px-4 font-medium">Q1 2023</th>
                        <th className="text-right py-3 px-4 font-medium">Q2 2023</th>
                        <th className="text-right py-3 px-4 font-medium">Q3 2023</th>
                        <th className="text-right py-3 px-4 font-medium">Q4 2023</th>
                        <th className="text-right py-3 px-4 font-medium">Évolution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {indicateursData.map((row, index) => {
                        const evolution = ((row.q4 - row.q1) / row.q1) * 100;
                        const isPositive = row.name.includes("renouvelable") || row.name.includes("valorisés") 
                          ? evolution > 0 
                          : evolution < 0;
                        
                        return (
                          <tr key={index} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">{row.name}</td>
                            <td className="py-3 px-4 text-muted-foreground">{row.critere}</td>
                            <td className="py-3 px-4 text-right">{row.q1}</td>
                            <td className="py-3 px-4 text-right">{row.q2}</td>
                            <td className="py-3 px-4 text-right">{row.q3}</td>
                            <td className="py-3 px-4 text-right">{row.q4}</td>
                            <td className={`py-3 px-4 text-right font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                              {isPositive ? '+' : ''}{evolution.toFixed(1)}%
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="prévisions" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="col-span-1 md:col-span-2 animate-slide-up">
              <CardHeader>
                <CardTitle>Prévisions d'émissions</CardTitle>
                <CardDescription>Basées sur les tendances historiques et les objectifs définis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { annee: "2021", emissions: 520, objectif: 520, prediction: 520 },
                        { annee: "2022", emissions: 480, objectif: 494, prediction: 480 },
                        { annee: "2023", emissions: 456, objectif: 468, prediction: 456 },
                        { annee: "2024", emissions: null, objectif: 442, prediction: 432 },
                        { annee: "2025", emissions: null, objectif: 416, prediction: 410 },
                        { annee: "2026", emissions: null, objectif: 390, prediction: 385 },
                        { annee: "2027", emissions: null, objectif: 364, prediction: 362 },
                        { annee: "2028", emissions: null, objectif: 338, prediction: 340 },
                        { annee: "2029", emissions: null, objectif: 312, prediction: 320 },
                        { annee: "2030", emissions: null, objectif: 286, prediction: 300 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    >
                      <XAxis dataKey="annee" />
                      <YAxis domain={[250, 550]} unit=" tCO₂e" />
                      <Tooltip />
                      <Legend />
                      <defs>
                        <linearGradient id="colorEmissions" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#4FD1C5" stopOpacity={1} />
                          <stop offset="100%" stopColor="#4FD1C5" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="colorPrediction" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#4FD1C5" stopOpacity={1} />
                          <stop offset="100%" stopColor="#4FD1C5" stopOpacity={0.5} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="emissions" name="Émissions réelles" stroke="#4FD1C5" strokeWidth={2} fill="url(#colorEmissions)" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="prediction" name="Prévisions" stroke="#4FD1C5" strokeDasharray="5 5" fill="url(#colorPrediction)" fillOpacity={0.1} />
                      <Area type="monotone" dataKey="objectif" name="Objectif de réduction" stroke="#F6AD55" strokeWidth={2} fill="none" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up animation-delay-100">
              <CardHeader>
                <CardTitle>Analyse de Scénarios</CardTitle>
                <CardDescription>Projections basées sur différentes stratégies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <h3 className="font-medium">Scénario de base</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-2">Poursuite des tendances actuelles</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Réduction estimée d'ici 2030:</span>
                      <span className="font-medium">25%</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3 text-xs">
                      Explorer le scénario
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-primary/10 border-primary/20 border rounded-lg">
                    <h3 className="font-medium text-primary">Scénario optimisé</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-2">Actions supplémentaires de réduction</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Réduction estimée d'ici 2030:</span>
                      <span className="font-medium">42%</span>
                    </div>
                    <Button size="sm" className="w-full mt-3 text-xs">
                      Explorer le scénario
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <h3 className="font-medium">Scénario ambitieux</h3>
                    <p className="text-sm text-muted-foreground mt-1 mb-2">Transformation complète des opérations</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Réduction estimée d'ici 2030:</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3 text-xs">
                      Explorer le scénario
                      <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up animation-delay-200">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recommandations</CardTitle>
                    <CardDescription>Actions suggérées pour réduire les émissions</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">Voir tout</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <BarChart className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Passage à l'énergie renouvelable</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Impact potentiel: <span className="font-medium">45%</span> de réduction des émissions Scope 2</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <LineChart className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Optimisation de la chaîne d'approvisionnement</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Impact potentiel: <span className="font-medium">22%</span> de réduction des émissions Scope 3</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <PieChart className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Efficacité énergétique des bâtiments</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Impact potentiel: <span className="font-medium">18%</span> de réduction des émissions Scope 1</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </main>
    </div>
  );
};

export default Analyses;
