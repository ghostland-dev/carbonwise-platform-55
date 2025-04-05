
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComparaisonTab = () => {
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
  );
};

export default ComparaisonTab;
