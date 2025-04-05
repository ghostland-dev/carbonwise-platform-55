
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { User, Building, Bell, Lock, Globe, Database, Save } from "lucide-react";

const Parametres = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Paramètres sauvegardés",
      description: "Vos paramètres ont été mis à jour avec succès."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-8 pt-4">
          <h1 className="text-3xl font-bold tracking-tight animate-slide-down">Paramètres</h1>
          <p className="text-muted-foreground mt-1 animate-slide-down animation-delay-100">
            Gérez les paramètres de votre compte et de la plateforme
          </p>
        </div>

        <Tabs defaultValue="profil" className="w-full animate-fade-in">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full md:w-auto">
            <TabsTrigger value="profil">
              <User className="h-4 w-4 mr-2 md:hidden lg:inline-block" />
              <span>Profil</span>
            </TabsTrigger>
            <TabsTrigger value="organisation">
              <Building className="h-4 w-4 mr-2 md:hidden lg:inline-block" />
              <span>Organisation</span>
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2 md:hidden lg:inline-block" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="securite">
              <Lock className="h-4 w-4 mr-2 md:hidden lg:inline-block" />
              <span>Sécurité</span>
            </TabsTrigger>
            <TabsTrigger value="integration">
              <Database className="h-4 w-4 mr-2 md:hidden lg:inline-block" />
              <span>Intégrations</span>
            </TabsTrigger>
            <TabsTrigger value="preference">
              <Globe className="h-4 w-4 mr-2 md:hidden lg:inline-block" />
              <span>Préférences</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profil" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations du Profil</CardTitle>
                <CardDescription>Modifiez vos informations personnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input id="nom" defaultValue="Dubois" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prenom">Prénom</Label>
                      <Input id="prenom" defaultValue="Marie" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="marie.dubois@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input id="telephone" defaultValue="+33 6 12 34 56 78" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="poste">Poste</Label>
                    <Input id="poste" defaultValue="Responsable RSE" />
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={handleSave}>
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="organisation" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Détails de l'Organisation</CardTitle>
                <CardDescription>Informations sur votre entreprise</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Nom de l'organisation</Label>
                      <Input id="orgName" defaultValue="EcoTech Solutions" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgSector">Secteur d'activité</Label>
                      <Select defaultValue="tech">
                        <SelectTrigger id="orgSector">
                          <SelectValue placeholder="Sélectionner un secteur" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Technologie</SelectItem>
                          <SelectItem value="manufacturing">Industrie</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="retail">Commerce de détail</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Nombre d'employés</Label>
                      <Select defaultValue="101-500">
                        <SelectTrigger id="employees">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-500">101-500</SelectItem>
                          <SelectItem value="501-1000">501-1000</SelectItem>
                          <SelectItem value="1001+">1001+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="siret">Numéro SIRET</Label>
                      <Input id="siret" defaultValue="123 456 789 00012" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Adresse principale</Label>
                    <Input id="address" defaultValue="15 rue de l'Innovation, 75001 Paris" />
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={handleSave}>
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paramètres de Reporting</CardTitle>
                <CardDescription>Configurez les options de rapports</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reportingYear">Année de référence</Label>
                      <Select defaultValue="2019">
                        <SelectTrigger id="reportingYear">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2018">2018</SelectItem>
                          <SelectItem value="2019">2019</SelectItem>
                          <SelectItem value="2020">2020</SelectItem>
                          <SelectItem value="2021">2021</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reportStandard">Standard de reporting</Label>
                      <Select defaultValue="ghg">
                        <SelectTrigger id="reportStandard">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ghg">GHG Protocol</SelectItem>
                          <SelectItem value="iso">ISO 14064</SelectItem>
                          <SelectItem value="csrd">CSRD</SelectItem>
                          <SelectItem value="tcfd">TCFD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={handleSave}>
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Préférences de notifications</CardTitle>
                <CardDescription>Configurez comment vous souhaitez être notifié</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Notifications par email</h3>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="rapportsEmail" className="font-normal">Rapports générés</Label>
                          <p className="text-xs text-muted-foreground">Notifications quand un rapport est généré</p>
                        </div>
                        <Switch id="rapportsEmail" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="alertesEmail" className="font-normal">Alertes importantes</Label>
                          <p className="text-xs text-muted-foreground">Notifications pour les alertes critiques</p>
                        </div>
                        <Switch id="alertesEmail" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="newsEmail" className="font-normal">Actualités réglementaires</Label>
                          <p className="text-xs text-muted-foreground">Mises à jour sur les réglementations</p>
                        </div>
                        <Switch id="newsEmail" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Notifications dans l'application</h3>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="rapportsApp" className="font-normal">Activité de reporting</Label>
                          <p className="text-xs text-muted-foreground">Activités liées aux rapports</p>
                        </div>
                        <Switch id="rapportsApp" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="objectifsApp" className="font-normal">Suivi des objectifs</Label>
                          <p className="text-xs text-muted-foreground">Mises à jour sur les objectifs</p>
                        </div>
                        <Switch id="objectifsApp" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="donnéesApp" className="font-normal">Importation de données</Label>
                          <p className="text-xs text-muted-foreground">État des importations de données</p>
                        </div>
                        <Switch id="donnéesApp" defaultChecked />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={handleSave}>
                      Enregistrer les préférences
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="securite" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Sécurité du compte</CardTitle>
                <CardDescription>Gérez vos paramètres de sécurité</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={handleSave}>Mettre à jour le mot de passe</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Authentification à deux facteurs</CardTitle>
                <CardDescription>Renforcez la sécurité de votre compte</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Authentification à deux facteurs</h3>
                      <p className="text-sm text-muted-foreground">Activez l'authentification à deux facteurs pour sécuriser votre compte</p>
                    </div>
                    <Switch id="2fa" />
                  </div>
                  <Button variant="outline" className="w-full">Configurer l'authentification à deux facteurs</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integration" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Intégrations d'API</CardTitle>
                <CardDescription>Connectez vos systèmes externes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <span className="font-semibold text-blue-600">ERP</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Système ERP</h3>
                        <p className="text-sm text-muted-foreground">Connectez votre système ERP pour importer les données</p>
                      </div>
                    </div>
                    <Button variant="outline">Configurer</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                        <span className="font-semibold text-green-600">CRM</span>
                      </div>
                      <div>
                        <h3 className="font-medium">CRM</h3>
                        <p className="text-sm text-muted-foreground">Intégrez vos données client pour des analyses plus précises</p>
                      </div>
                    </div>
                    <Button variant="outline">Configurer</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center">
                        <span className="font-semibold text-amber-600">BI</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Business Intelligence</h3>
                        <p className="text-sm text-muted-foreground">Exportez vos données vers votre outil de BI</p>
                      </div>
                    </div>
                    <Button variant="outline">Configurer</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clés API</CardTitle>
                <CardDescription>Gérez vos clés API pour les intégrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Clé API principale</h3>
                      <p className="text-sm text-muted-foreground">Créée le 12/05/2023</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Afficher</Button>
                      <Button variant="outline" size="sm">Régénérer</Button>
                    </div>
                  </div>
                  <Button>Créer une nouvelle clé API</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preference" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Préférences d'affichage</CardTitle>
                <CardDescription>Personnalisez l'interface utilisateur</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Thème</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 flex items-center gap-2 cursor-pointer bg-background">
                        <div className="h-4 w-4 rounded-full border-2 border-primary flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span>Clair</span>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center gap-2 cursor-pointer">
                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/40"></div>
                        <span>Sombre</span>
                      </div>
                      <div className="border rounded-lg p-4 flex items-center gap-2 cursor-pointer">
                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/40"></div>
                        <span>Système</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Langue</h3>
                    <Select defaultValue="fr">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une langue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Format de date</h3>
                    <Select defaultValue="dd/mm/yyyy">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd/mm/yyyy">JJ/MM/AAAA</SelectItem>
                        <SelectItem value="mm/dd/yyyy">MM/JJ/AAAA</SelectItem>
                        <SelectItem value="yyyy-mm-dd">AAAA-MM-JJ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Unités de mesure</h3>
                    <Select defaultValue="metric">
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner des unités" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="metric">Métrique (kg, tonnes)</SelectItem>
                        <SelectItem value="imperial">Impérial (livres, tonnes)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleSave}>Enregistrer les préférences</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Parametres;
