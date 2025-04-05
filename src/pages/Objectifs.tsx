
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ArrowUpRight, PlusCircle, Target, TrendingDown, Leaf, Calendar } from "lucide-react";

const Objectifs = () => {
  const { toast } = useToast();
  const [nouvelObjectif, setNouvelObjectif] = useState(false);

  const handleObjectifSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNouvelObjectif(false);
    toast({
      title: "Objectif créé",
      description: "Votre nouvel objectif a été créé avec succès."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-8 pt-4">
          <h1 className="text-3xl font-bold tracking-tight animate-slide-down">Objectifs de Durabilité</h1>
          <p className="text-muted-foreground mt-1 animate-slide-down animation-delay-100">
            Définissez et suivez vos objectifs de réduction d'émissions carbone
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              <span>Annuel</span>
            </Button>
            <Select defaultValue="tous">
              <SelectTrigger className="w-[180px] h-9">
                <SelectValue placeholder="Filtrer par type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tous">Tous les objectifs</SelectItem>
                <SelectItem value="court-terme">Court terme</SelectItem>
                <SelectItem value="moyen-terme">Moyen terme</SelectItem>
                <SelectItem value="long-terme">Long terme</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={() => setNouvelObjectif(true)}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Nouvel Objectif
          </Button>
        </div>

        {nouvelObjectif ? (
          <Card className="mb-6 animate-fade-in">
            <CardHeader>
              <CardTitle>Définir un nouvel objectif</CardTitle>
              <CardDescription>Créez un objectif de réduction d'émissions carbone pour votre organisation</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleObjectifSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="titre">Titre de l'objectif</Label>
                    <Input id="titre" placeholder="ex: Réduction des émissions Scope 1" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Type d'objectif</Label>
                    <Select defaultValue="reduction">
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reduction">Réduction absolue</SelectItem>
                        <SelectItem value="intensite">Réduction d'intensité</SelectItem>
                        <SelectItem value="neutralite">Neutralité carbone</SelectItem>
                        <SelectItem value="renouvelable">Énergie renouvelable</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pourcentage">Pourcentage de réduction</Label>
                    <Input id="pourcentage" type="number" min="1" max="100" placeholder="25" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="annee">Année cible</Label>
                    <Input id="annee" type="number" min="2023" max="2050" placeholder="2030" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="baselineYear">Année de référence</Label>
                    <Input id="baselineYear" type="number" min="2000" max="2023" placeholder="2019" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scope">Scopes concernés</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="scope">
                        <SelectValue placeholder="Sélectionner les scopes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scope1">Scope 1 uniquement</SelectItem>
                        <SelectItem value="scope2">Scope 2 uniquement</SelectItem>
                        <SelectItem value="scope12">Scope 1 et 2</SelectItem>
                        <SelectItem value="scope3">Scope 3 uniquement</SelectItem>
                        <SelectItem value="all">Tous les scopes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea 
                    id="description" 
                    className="w-full min-h-[100px] p-2 border rounded-md bg-background"
                    placeholder="Décrivez votre objectif en détail..."
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button type="button" variant="outline" onClick={() => setNouvelObjectif(false)}>Annuler</Button>
                  <Button type="submit">Créer l'objectif</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card className="animate-slide-up">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="bg-primary/10 p-2 rounded-full">
                  <TrendingDown className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">En cours</span>
              </div>
              <CardTitle className="text-lg mt-2">Réduction des émissions Scope 1 & 2</CardTitle>
              <CardDescription>Réduction de 35% d'ici 2030 par rapport à 2019</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={42} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progression: 42%</span>
                <span>Échéance: 2030</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 text-xs">
                Voir les détails
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-slide-up animation-delay-100">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="bg-green-100/50 p-2 rounded-full">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Sur la bonne voie</span>
              </div>
              <CardTitle className="text-lg mt-2">100% Énergie Renouvelable</CardTitle>
              <CardDescription>Atteindre 100% d'énergie renouvelable d'ici 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={78} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progression: 78%</span>
                <span>Échéance: 2025</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 text-xs">
                Voir les détails
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-slide-up animation-delay-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="bg-blue-100/50 p-2 rounded-full">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-xs font-medium bg-red-100 text-red-800 px-2 py-0.5 rounded-full">Retard</span>
              </div>
              <CardTitle className="text-lg mt-2">Neutralité Carbone</CardTitle>
              <CardDescription>Atteindre la neutralité carbone d'ici 2040</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={12} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progression: 12%</span>
                <span>Échéance: 2040</span>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 text-xs">
                Voir les détails
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="animate-slide-up animation-delay-300">
          <CardHeader>
            <CardTitle>Alignement avec les initiatives climatiques</CardTitle>
            <CardDescription>Suivi des engagements externes et des initiatives climatiques</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-semibold text-blue-600">SBT</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Science-Based Targets initiative</h4>
                    <p className="text-sm text-muted-foreground">Objectifs validés en 2022</p>
                  </div>
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-1 rounded-full">Conforme</span>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="font-semibold text-amber-600">CDP</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Carbon Disclosure Project</h4>
                    <p className="text-sm text-muted-foreground">Score B en 2023</p>
                  </div>
                </div>
                <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">En progrès</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="font-semibold text-green-600">RE</span>
                  </div>
                  <div>
                    <h4 className="font-medium">RE100</h4>
                    <p className="text-sm text-muted-foreground">Engagement pour 100% d'énergie renouvelable</p>
                  </div>
                </div>
                <span className="text-xs font-medium bg-green-100 text-green-800 px-2.5 py-1 rounded-full">Membre</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Objectifs;
