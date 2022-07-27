import {
  HiOutlineDesktopComputer,
  BiCodeCurly,
  MdMobileFriendly,
} from "react-icons/all";

export const cardItems = [
  {
    id: 1,
    cardName: "Website  development",
    icon: <BiCodeCurly />,
    cardText:
      "I use the various web technologies and the best software practices to build user friendly web applications",
    dataAos: "fade-left",
  },
  {
    id: 3,
    cardName: "Responsive design",
    icon: <MdMobileFriendly />,
    cardText:
      "The emphasis of any top notch web application must always be on building a mobile friendly application",
    dataAos: "fade-right",
  },
  {
    id: 2,
    cardName: "Website management",
    icon: <HiOutlineDesktopComputer />,
    cardText:
      "I can also help clients manage their website by uploading contents regularly, and help fix bugs that hinder good user experience",
    dataAos: "fade-up",
  },
];
