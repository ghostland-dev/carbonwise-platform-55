
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";

const PrevisionsTab = () => {
  const previsionsData = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <Card className="col-span-1 md:col-span-2 animate-slide-up">
        <CardHeader>
          <CardTitle>Prévisions d'émissions</CardTitle>
          <CardDescription>Basées sur les tendances historiques et les objectifs définis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart
                data={previsionsData}
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
                <Line type="monotone" dataKey="objectif" name="Objectif de réduction" stroke="#F6AD55" strokeWidth={2} />
              </RechartsLineChart>
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
                <div className="h-4 w-4 text-green-600">📊</div>
              </div>
              <div>
                <h4 className="font-medium text-sm">Passage à l'énergie renouvelable</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Impact potentiel: <span className="font-medium">45%</span> de réduction des émissions Scope 2</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <div className="h-4 w-4 text-blue-600">📈</div>
              </div>
              <div>
                <h4 className="font-medium text-sm">Optimisation de la chaîne d'approvisionnement</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Impact potentiel: <span className="font-medium">22%</span> de réduction des émissions Scope 3</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <div className="h-4 w-4 text-amber-600">🍩</div>
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
  );
};

export default PrevisionsTab;
