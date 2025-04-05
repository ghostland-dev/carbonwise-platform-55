
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page non trouvée</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button asChild>
        <Link to="/" className="flex items-center gap-2">
          <HomeIcon size={16} />
          Retour à l'accueil
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
