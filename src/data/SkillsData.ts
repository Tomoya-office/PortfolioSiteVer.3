export type Skill = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
};

const skills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    image: "/logos/html5/html5-original.svg",
    alt: "HTML5ロゴ",
    description:
      "使用期間：8年\n文字から一番付き合いの長い言語です。\nWebサイトの制作環境でも多く触れております。",
  },
  {
    id: 2,
    name: "CSS",
    image: "/logos/css3/css3-original.svg",
    alt: "CSS3ロゴ",
    description: "使用期間：8年\nこちらも昔から勉強し続けている言語です。",
  },
  {
    id: 3,
    name: "Javascript",
    image: "/logos/javascript/javascript-original.svg",
    alt: "JavaScriptロゴ",
    description: "使用期間：3年\n社会人になって転職してから勉強をしました。",
  },
  {
    id: 4,
    name: "TypeScript",
    image: "/logos/typescript/typescript-original.svg",
    alt: "TypeScriptロゴ",
    description:
      "使用期間：1.5年\nこちらも社会人になってから勉強をした分野です。",
  },
  {
    id: 5,
    name: "React",
    image: "/logos/react/react-original.svg",
    alt: "Reactロゴ",
    description: "使用期間：2年\nこちらも社会人になってから勉強をしました。",
  },
  {
    id: 6,
    name: "Next.js",
    image: "/logos/nextjs/nextjs-original.svg",
    alt: "Next.jsロゴ",
    description: "使用期間：2年\nこちらも社会人になってから勉強をしました。",
  },
  {
    id: 7,
    name: "Java",
    image: "/logos/java/java-original.svg",
    alt: "Javaロゴ",
    description: "使用期間：1年\n配属先の現場で使用しました。",
  },
  {
    id: 8,
    name: "Spring",
    image: "/logos/spring/spring-original.svg",
    alt: "Springロゴ",
    description: "使用期間：1年\n配属先の現場で使用しました。",
  },
];
export default skills;