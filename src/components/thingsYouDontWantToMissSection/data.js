import { ReactComponent as GlobeSvg } from "../../assets/thingsYouDontWantToMiss/globe.svg";
import {ReactComponent as PersonalComputerSvg} from "../../assets/thingsYouDontWantToMiss/personal-computer.svg"
import {ReactComponent as SliceOfPizza} from "../../assets/thingsYouDontWantToMiss/slice-of-pizza.svg"
import { ReactComponent as ToolsSvg } from "../../assets/thingsYouDontWantToMiss/tools.svg";

const thingsYouDontWantToMissData = [
  {
    id: 1,
    title: "Technical content",
    svg: <PersonalComputerSvg></PersonalComputerSvg>,
    text: `Worldwide events hosted by the Google Developer Groups community, featuring leading experts on Google technologies in areas like Android, Firebase, Flutter, Machine Learning and so much more!`,
  },
  {
    id: 2,
    title: "Workshops & Codelabs",
    svg: <ToolsSvg></ToolsSvg>,
    text: `Full-day workshops, hands-on experiences, hacking and debugging events, all centered on your favorite Google technologies.`,
  },
  {
    id: 3,
    title: "Networking",
    svg: <GlobeSvg></GlobeSvg>,
    text: `Meet and connect with other developers in your community.!`,
  },
  {
    id: 4,
    title: "Scwags & Food",
    svg: <SliceOfPizza></SliceOfPizza>,
    text: `Tech conference is incomplete without delicious food & exciting schwags, Don’t worry ! It’s on us :)`,
  },
];

export default thingsYouDontWantToMissData 