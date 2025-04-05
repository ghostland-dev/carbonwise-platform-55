
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#4FD1C5", "#90CDF4", "#F6AD55", "#FC8181", "#B794F4"];

const EmissionsTab = () => {
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

  return (
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
  );
};

export default EmissionsTab;
