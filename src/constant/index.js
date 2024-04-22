import arabic from "../assets/background/arabicDark.svg";
import rhino from "../assets/background/rahino.svg";
import miniRhino from "../assets/background/minirahino.svg";
import miniarabic from "../assets/background/miniarabicDark.svg";

import sunset from "../assets/background/sunset.svg";
import bridge from "../assets/background/bridge.svg";

import crazy from "../assets/emoji/crazy.svg";
import innocent from "../assets/emoji/innocent.svg";
import laugh from "../assets/emoji/laugh.svg";
import love from "../assets/emoji/love.svg";
import sad from "../assets/emoji/sad.svg";
import smile from "../assets/emoji/smile.svg";
import worst from "../assets/emoji/worst.svg";
import frown from "../assets/emoji/frown.svg";
import laugh2 from "../assets/emoji/laugh2.svg";
import laugh3 from "../assets/emoji/laugh3.svg";
import aback from "../assets/emoji/abak.svg";

export const theme = ["bg-slate-950 shadow-blue-950 ", "bg-[#f29900]"];
export const iconColor = [
  "text-blue-400 border-blue-400",
  "text-[#633a00] border-[#633a00]",
];

export const borderColor = ["#5fa5fa", "#633a00"];
export const secondColor = ["#0f1729", "#291702"];

export const chatInputBg = ["bg-gray-800/60", "bg-brown/50"];

export const chatActionBg = ["bg-slate-800/30", "bg-[#291702]/80"];
export const cardClass = [
  " backdrop-blur-sm backdrop-opacity-70 text-gray-200 bg-slate-700/50",
  " backdrop-blur-sm backdrop-opacity-70 text-gray-200 bg-brown/50",
];

export const accordionSummaryOne = ["#121c30ff", "#311c02ff"]
export const accordionSummaryTwo = ["#121c30ff","#361f02ff"]
export const accordionDetails = ["#18243fff","#402502ff"]

export const themeImg = [
  { theme: miniarabic, title: "Arabic Dark" },
  { theme: miniRhino, title: "Twilight in Wild" },
  { theme: sunset, title: "Mountain Sunset" },
  { theme: bridge, title: "Suspension Bridge" },
];


export const themeBg = [arabic, rhino];
export const miniThemeBg = [miniarabic, miniRhino, sunset, bridge];
export const emoji = [
  { name: "crazy", img: crazy },
  { name: "innocent", img: innocent },
  { name: "laugh", img: laugh },
  { name: "love", img: love },
  { name: "sad", img: sad },
  { name: "smile", img: smile },
  { name: "worst", img: worst },
  { name: "aback", img: aback },
  { name: "frown", img: frown },
  { name: "laugh2", img: laugh2 },
  { name: "laugh3", img: laugh3 },
];
