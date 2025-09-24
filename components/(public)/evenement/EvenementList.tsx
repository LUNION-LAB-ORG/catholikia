import Section from "@/components/primitives/Section";
import EventCard from "./EventCard";
import Title from "@/components/primitives/Title";

const EvenementList = () => {
  const events = [
    {
      dayNumber: "2",
      month: "NOVEMBRE",
      title: "Groupe d'étude biblique hebdomadaire",
      description:
        "Plongez plus profondément dans la Parole de Dieu avec nous ! Rejoignez notre étude biblique hebdomadaire pour des discussions enrichissantes et une croissance spirituelle",
      image: "/assets/accueil/evenement/event1.png",
      imageAlt: "Groupe d'étude biblique",
      day: "Lundi",
    },
    {
      dayNumber: "6",
      month: "NOVEMBRE",
      title: "Young Adults Connect",
      description:
        "Un espace où les jeunes adultes peuvent se réunir, grandir dans la foi et nouer des amitiés durables. Rejoignez-nous pour des discussions, des moments de culte et de détente.",
      image: "/assets/accueil/evenement/event2.png",
      imageAlt: "Jeunes adultes en communion",
      day: "Lundi",
    },
    {
      dayNumber: "20",
      month: "NOVEMBRE",
      title: "Rassemblement de prière en milieu de semaine",
      description:
        "Ressourcez-vous en milieu de semaine avec un moment de prière, de réflexion et d'encouragement. Cherchons Dieu ensemble.",
      image: "/assets/accueil/evenement/event3.png",
      imageAlt: "Groupe de prière",
      day: "Lundi",
    },
  ];

  return (
    <Section className="min-h-screen relative font-barlow">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/assets/accueil/evenement/event_back.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="church-title text-white mb-6 sm:mb-8">
              <Title className="text-white text-2xl sm:text-3xl lg:text-4xl">
                EVENEMENT À VENIR
              </Title>
            </h1>
            <p className="text-white text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Restez informé(e) de l'actualité de l'Église communautaire ! Des veillées
              de culte aux études bibliques, en passant par les programmes
              d'évangélisation et les rassemblements fraternels, il y en a toujours pour
              tous les goûts.
            </p>
          </div>

          {/* Events List */}
          <div className="space-y-6 sm:space-y-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                dayNumber={event.dayNumber}
                month={event.month}
                title={event.title}
                description={event.description}
                image={event.image}
                imageAlt={event.imageAlt}
                day={event.day}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EvenementList;
