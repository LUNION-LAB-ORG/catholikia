import { Button } from "@/components/ui/button";


export const SubmitText = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={'/assets/tribunes/article1.png'} 
                alt="Femme souriante invitant à proposer un texte"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              PROPOSER UN TEXTE
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Nous accueillons les contributions originales de chercheurs, prêtres, laïcs ou fidèles engagés qui 
              souhaitent partager leur réflexion sur les enjeux contemporains.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Critères de Publication
                </h3>
                <Button 
                  variant="default" 
                  size="lg"
                  className="w-full lg:w-auto"
                >
                  ENVOYER UN TEXTE
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 italic">
                Format/Dossier, Jeux / Nouveau mail 10 jours avant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};