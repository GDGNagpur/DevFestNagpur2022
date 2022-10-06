import { ReactComponent as GlobeSvg } from "../../assets/thingsYouDontWantToMiss/globe.svg";
import { ReactComponent as PersonalComputerSvg } from "../../assets/thingsYouDontWantToMiss/personal-computer.svg";
import { ReactComponent as SliceOfPizza } from "../../assets/thingsYouDontWantToMiss/slice-of-pizza.svg";
import { ReactComponent as ToolsSvg } from "../../assets/thingsYouDontWantToMiss/tools.svg";

const thingsYouDontWantToMissData = [
  {
    id: 1,
    title: "Technical content",
    svg: <PersonalComputerSvg></PersonalComputerSvg>,
    text: `Unlocking the best part of the most awaited intercontinental Google developer community, gdg Nagpur gives you a full package of knowledge and one on one interaction with global experts and technologies.`,
  },
  {
    id: 2,
    title: "Workshops & Codelabs",
    svg: <ToolsSvg></ToolsSvg>,
    text: `A coding rendezvous with your friends plus hands-on experience for a 2 day long workshop! What else could we ask for? Initiate your journey towards a new technology and get to learn it from experts.`,
  },
  {
    id: 3,
    title: "Networking",
    svg: <GlobeSvg></GlobeSvg>,
    text: `Expand your branches of knowledge and indentity further. Connect and collaborate with developers and tech enthusiasts on a single platform to create a new and exciting chapter in your and our timeline because our network is your networth.`,
  },
  {
    id: 4,
    title: "Swags",
    svg: <SliceOfPizza></SliceOfPizza>,
    text: `A long conference with empty stomach is just not fun! GDG Nagpur is making sure that your visit will surely leave a taste of orange city on your mind. As a souvenir for our great journey, you'll also be getting some cool goodies and google badges.`,
  },
];

export default thingsYouDontWantToMissData;
