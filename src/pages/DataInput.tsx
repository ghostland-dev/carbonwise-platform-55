
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Upload, 
  Database, 
  FileInput, 
  ListCheck,
  Plus,
  ArrowRight,
  Download,
  Cloud,
  Building
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const DataInput = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("manual");
  
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Données soumises avec succès",
      description: "Vos données d'émissions ont été enregistrées.",
    });
  };
  
  const handleFileUpload = () => {
    toast({
      title: "Fichier téléchargé",
      description: "Votre fichier de données est en cours de traitement.",
    });
  };
  
  const handleConnectAPI = () => {
    toast({
      title: "API connectée",
      description: "Connexion réussie à la source de données externe.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container pt-24 pb-16 max-w-6xl mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Saisie de Données</h1>
            <p className="text-muted-foreground">
              Ajoutez vos données d'émissions par saisie manuelle, import de fichier ou connexion à des systèmes externes.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
              <TabsTrigger value="manual">Saisie Manuelle</TabsTrigger>
              <TabsTrigger value="upload">Import Fichier</TabsTrigger>
              <TabsTrigger value="api">Données Externes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="manual" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Saisie Manuelle de Données</CardTitle>
                  <CardDescription>
                    Entrez vos données d'émissions directement via le formulaire ci-dessous.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleManualSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="activityName">Nom de l'activité</Label>
                        <Input id="activityName" placeholder="ex: Voyages d'affaires" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input id="date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ghgScope">Scope GHG Protocol</Label>
                        <Select defaultValue="scope1">
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner un scope" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="scope1">Scope 1 (Émissions directes)</SelectItem>
                            <SelectItem value="scope2">Scope 2 (Émissions indirectes - Énergie)</SelectItem>
                            <SelectItem value="scope3">Scope 3 (Émissions indirectes - Chaîne de valeur)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Catégorie</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner une catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stationary">Combustion stationnaire</SelectItem>
                            <SelectItem value="mobile">Combustion mobile</SelectItem>
                            <SelectItem value="fugitive">Émissions fugitives</SelectItem>
                            <SelectItem value="process">Émissions de procédés</SelectItem>
                            <SelectItem value="purchased_electricity">Électricité achetée</SelectItem>
                            <SelectItem value="purchased_heat">Chaleur achetée</SelectItem>
                            <SelectItem value="business_travel">Voyages d'affaires</SelectItem>
                            <SelectItem value="employee_commuting">Déplacements domicile-travail</SelectItem>
                            <SelectItem value="waste">Déchets générés</SelectItem>
                            <SelectItem value="transportation">Transport & Distribution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantité</Label>
                        <Input id="quantity" type="number" step="0.01" min="0" placeholder="0,00" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="unit">Unité</Label>
                        <Select defaultValue="kg">
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionner une unité" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">kg CO₂e</SelectItem>
                            <SelectItem value="ton">tonnes CO₂e</SelectItem>
                            <SelectItem value="kwh">kWh</SelectItem>
                            <SelectItem value="liter">Litres</SelectItem>
                            <SelectItem value="km">Kilomètres</SelectItem>
                            <SelectItem value="mile">Miles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Notes (Optionnel)</Label>
                      <textarea 
                        id="notes" 
                        placeholder="Contexte ou informations supplémentaires..."
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none mt-1.5"
                      />
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" type="reset">Effacer</Button>
                      <Button type="submit">Soumettre</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Entrées par lot</CardTitle>
                  <CardDescription>Ajoutez plusieurs enregistrements à la fois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Ajout rapide d'entrées multiples</h4>
                      <p className="text-sm text-muted-foreground">
                        Utilisez notre modèle pour ajouter plusieurs sources d'émissions à la fois
                      </p>
                    </div>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Ajouter plusieurs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="upload" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Import de fichier</CardTitle>
                  <CardDescription>
                    Chargez vos données d'émissions à partir de feuilles de calcul ou de fichiers CSV.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-10 text-center">
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Glissez et déposez votre fichier ici</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supporte les formats Excel, CSV et XML jusqu'à 10 Mo
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Button onClick={handleFileUpload}>
                        <FileInput className="mr-2 h-4 w-4" />
                        Parcourir les fichiers
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger le modèle
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-sm font-medium mb-4">Historique des imports</h4>
                    <div className="text-sm text-muted-foreground text-center py-6">
                      Aucun import récent trouvé
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connexion aux sources de données externes</CardTitle>
                  <CardDescription>
                    Importez des données directement depuis vos systèmes et services existants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Database className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">Systèmes ERP</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Connexion avec SAP, Oracle, Microsoft Dynamics et autres systèmes ERP.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connecter
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ListCheck className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">Plateformes de durabilité</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Import depuis des plateformes spécialisées de gestion de durabilité.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connecter
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Cloud className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">Services cloud</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Calculez les émissions d'AWS, Azure, Google Cloud et autres fournisseurs.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connecter
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">Gestion des installations</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Intégration avec des systèmes de gestion de bâtiments et d'énergie.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connecter
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DataInput;
