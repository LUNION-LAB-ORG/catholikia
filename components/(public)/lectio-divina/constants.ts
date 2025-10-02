import { IconName } from 'lucide-react/dynamic';

type LectioDivinaStep = {
    title: string;
    subtitle: string;
    description: string;
    iconName: IconName;
    color: "yellow" | "blue";
    tag: string;
}

const lectioDivinaSteps: LectioDivinaStep[] = [
    {
        title: "Lectio",
        subtitle: "Lecture attentive et respectueuse du texte biblique",
        description: "La première étape consiste à lire lentement et attentivement le passage biblique choisi. Il s'agit d'une lecture répétée, permettant aux mots de pénétrer l'esprit et le cœur.",
        iconName: "book-open",
        color: "blue",
        tag: "Lecture"
    },
    {
        title: "Meditatio",
        subtitle: "Réflexion profonde et rumination spirituelle du texte",
        description: "La méditation approfondit la lecture par la réflexion. C'est le moment de \"ruminer\" la Parole, de la laisser résonner dans notre cœur et notre intelligence.",
        iconName: "brain",
        color: "yellow",
        tag: "Méditation"
    },
    {
        title: "Oratio",
        subtitle: "Prière et dialogue avec Dieu",
        description: "L'oraison est un temps de prière personnelle, où l'on s'adresse à Dieu avec ses mots, ses émotions et ses désirs. C'est un moment de rencontre authentique avec le divin.",
        iconName: "church",
        color: "blue",
        tag: "Prière"
    },
    {
        title: "Contemplatio",
        subtitle: "Repos silencieux en la présence divine",
        description: "La contemplation est un repos en Dieu, un moment de silence intérieur où l'âme se laisse transformer par la présence divine. C'est l'aboutissement de la Lectio Divina.",
        iconName: "sparkles",
        color: "yellow",
        tag: "Contemplation"
    }
];

export { lectioDivinaSteps };
