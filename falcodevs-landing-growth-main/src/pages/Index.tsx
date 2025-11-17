import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Code2, 
  Zap, 
  MessageSquare, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Mail,
  Phone
} from "lucide-react";
import falcoLogo from "@/assets/falcodevs-logo.png";
import cafeLogo from "@/assets/cafe-premium-logo.png";
import falcoBanner from "@/assets/falcodevs-banner.png";
import Header from "@/components/Header";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Landings Escalables",
      description: "Creamos landing pages que pueden evolucionar hacia soluciones completas con bases de datos, integraciones y lógica personalizada.",
      featured: true
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Desarrollo Web Completo",
      description: "Soluciones web a medida con las últimas tecnologías para impulsar tu negocio."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Agentes IA",
      description: "Implementamos agentes inteligentes que automatizan tareas y mejoran la experiencia del cliente."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatización e Integraciones",
      description: "Consultoría en automatización de procesos e integraciones con WhatsApp, CRMs y más."
    }
  ];

  const benefits = [
    "Soluciones escalables que crecen con tu negocio",
    "Tecnología de vanguardia con IA integrada",
    "Profesionales certificados en AWS para despliegues en la nube",
    "Automatización que reduce costos operativos",
    "Soporte técnico especializado"
  ];

  const process = [
    { step: "1", title: "Consulta Inicial", description: "Analizamos tus necesidades y objetivos" },
    { step: "2", title: "Propuesta", description: "Diseñamos la solución perfecta para ti" },
    { step: "3", title: "Desarrollo", description: "Construimos tu proyecto con las mejores prácticas" },
    { step: "4", title: "Entrega y Soporte", description: "Lanzamos y te acompañamos en el proceso" }
  ];

  const technologies = [
    "React", "Node.js", "TypeScript", "n8n", 
    "AWS", "Supabase", "OpenAI", "WhatsApp API"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
  {/* Hero Section - centrada a toda anchura */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-accent/10" />

        <div className="container mx-auto px-4 py-12 md:py-20 relative">
          <div className="grid gap-12 items-center max-w-4xl mx-auto text-center">
            {/* Bloque principal centrado */}
            <div className="flex flex-col items-center text-center animate-fade-in w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Inter']">
                Desarrollamos tu negocio con{" "}
                <span className="text-secondary">IA</span> y{" "}
                <span className="text-accent">software a medida</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 font-['Roboto'] max-w-3xl">
                Consultoría especializada en software, IA, automatización e integraciones para empresas que buscan resultados.
              </p>

              <div className="flex items-center justify-center gap-3 mb-8 p-4 rounded-lg bg-accent/10 border border-accent/20 max-w-xl text-left sm:text-center">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                <p className="text-sm font-medium">
                  Profesionales certificados en AWS para despliegues seguros en la nube
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90">
                  Agendar una llamada <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <a href="#servicios" >
                  Ver servicios
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Benefits Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Inter']">
              ¿Por qué elegir FalcoDevs?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg font-['Roboto']">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Box Style */}
      <section id="servicios" className="py-24 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Inter']">
            Nuestros Servicios
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Soluciones tecnológicas que impulsan tu negocio
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl border border-border bg-card hover:border-secondary transition-all duration-300 ${
                  service.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${service.featured ? 'text-secondary' : 'text-accent'} mb-4`}>
                  {service.icon}
                </div>
                <h3 className={`font-bold mb-3 font-['Inter'] ${service.featured ? 'text-2xl' : 'text-xl'}`}>
                  {service.title}
                </h3>
                <p className={`text-muted-foreground font-['Roboto'] ${service.featured ? 'text-lg' : 'text-base'}`}>
                  {service.description}
                </p>
                {service.featured && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Capacidades de evolución:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Base de datos integrada
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Integraciones con APIs externas
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Lógica de negocio personalizada
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="py-16 md:py-24 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Inter']">
            Clientes Satisfechos
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Empresas que confían en nuestras soluciones
          </p>
          <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
            <div className="bg-background border border-border rounded-xl p-8 w-full hover:border-secondary transition-colors">
              <img src={cafeLogo} alt="Café Premium" className="h-24 mx-auto mb-6" />
              <p className="text-center text-lg text-muted-foreground font-['Roboto'] italic">
                "Incrementamos nuestras conversiones en un 40% gracias a la automatización de WhatsApp implementada por FalcoDevs"
              </p>
              <p className="text-center mt-4 font-semibold">— Café Premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-24 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Inter']">
            Nuestro Proceso
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Simplificamos el desarrollo en 4 pasos
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-secondary transition-colors h-full">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl font-bold text-secondary mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-['Inter']">{item.title}</h3>
                  <p className="text-muted-foreground font-['Roboto']">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-['Inter']">
            Tecnologías que Utilizamos
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-background border border-border rounded-full hover:border-accent hover:bg-accent/10 transition-colors font-['Roboto'] font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 md:py-24 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-['Inter']">
              Contáctanos
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Cuéntanos sobre tu proyecto y te responderemos pronto
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Mensaje"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={5}
                    className="bg-card border-border"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  Enviar mensaje
                </Button>
              </form>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-secondary transition-colors">
                  <Mail className="w-6 h-6 text-secondary mb-3" />
                  <h3 className="font-bold mb-2 font-['Inter']">Email</h3>
                  <a href="mailto:falcodevsspa@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors">
                    falcodevsspa@gmail.com
                  </a>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
                  <Phone className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-bold mb-2 font-['Inter']">WhatsApp</h3>
                  <a href="https://wa.me/56999999999" className="text-muted-foreground hover:text-accent transition-colors">
                    +569 9999 9999
                  </a>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => window.location.href = '#'}
                >
                  Agendar una llamada <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <img src={falcoLogo} alt="FalcoDevs" className="h-12 mb-4" />
                <p className="text-muted-foreground font-['Roboto']">
                  Desarrollamos y automatizamos tu negocio con IA y software a medida.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 font-['Inter']">Contacto</h3>
                <div className="space-y-2 text-muted-foreground font-['Roboto']">
                  <p>falcodevsspa@gmail.com</p>
                  <p>+569 9999 9999</p>
                  <p>falcodevs.pro</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 font-['Inter']">Servicios</h3>
                <ul className="space-y-2 text-muted-foreground font-['Roboto']">
                  <li>Landings Escalables</li>
                  <li>Desarrollo Web</li>
                  <li>Agentes IA</li>
                  <li>Automatización</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-8 text-center text-muted-foreground">
              <p className="font-['Roboto']">© 2024 FalcoDevs. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
