import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import falcoLogo from "@/assets/falcodevs-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={falcoLogo} 
              alt="FalcoDevs SpA - Desarrollamos y automatizamos tu negocio con IA y software a medida" 
              className="h-16 w-auto transition-all duration-300 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div className="hidden md:flex border-l border-secondary/30 pl-3 h-12 items-center">
              <p className="text-sm text-muted-foreground leading-tight">
                Desarrollamos y automatizamos<br />tu negocio con IA
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <a href="#servicios" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="hidden sm:inline-block text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">
              Proceso
            </a>
            <a href="#contacto" className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">
              Contacto
            </a>
            
            {user ? (
              <Button 
                size="sm" 
                variant="outline"
                onClick={handleSignOut}
                className="border-secondary text-secondary hover:bg-secondary/10"
              >
                Cerrar Sesión
              </Button>
            ) : (
              <>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => navigate("/auth")}
                  className="hidden sm:inline-flex border-secondary text-secondary hover:bg-secondary/10"
                >
                  Iniciar Sesión
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => navigate("/auth")}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Registrarse
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
