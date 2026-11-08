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
      "使用期間：8年\n大学から一番付き合いの長い言語です。\nWebサイトの制作環境でも多く触れております。",
  },
  {
    id: 2,
    name: "CSS",
    image: "/logos/css3/css3-original.svg",
    alt: "CSS3ロゴ",
    description: "使用期間：8年\nこちらも昔から勉強し続けている言語です。\nこちらもサイト制作や現場先でも多く使用されており、\nkeyframes等使ったアニメーションなども行えます。",
  },
  {
    id: 3,
    name: "Javascript",
    image: "/logos/javascript/javascript-original.svg",
    alt: "JavaScriptロゴ",
    description: "使用期間：3年\n社会人になって転職してから勉強をしました。\nアニメーションや現場ではDBから取得した情報を\n画面に表示させるために使用しています。",
  },
  {
    id: 4,
    name: "TypeScript",
    image: "/logos/typescript/typescript-original.svg",
    alt: "TypeScriptロゴ",
    description:
      "使用期間：1.5年\nこちらも社会人になってから勉強をした分野です。\n職場では型定義で使用した経験があります。\nまだ経験が浅いので今後で伸ばしていきたい領域です。",
  },
  {
    id: 5,
    name: "React",
    image: "/logos/react/react-original.svg",
    alt: "Reactロゴ",
    description: "使用期間：2年\nこちらも社会人になって転職してから勉強をしました。\nコンポーネント管理、axiosによるAPIの通信、\nHooks(useState,useEffect)などの使用経験があります。",
  },
  {
    id: 6,
    name: "Next.js",
    image: "/logos/nextjs/nextjs-original.svg",
    alt: "Next.jsロゴ",
    description: "使用期間：2年\nこちらも社会人になって転職してから勉強をしました。\n開発の経験もあり、作品にもあるケーキのサイト制作と\nこのポートフォリオではNext.jsで作成しました。",
  },
  {
    id: 7,
    name: "Java",
    image: "/logos/java/java-original.svg",
    alt: "Javaロゴ",
    description: "使用期間：1年\n配属先の現場で使用しました。\nDBから値を取得して画面に出力したり一通り\nのWebアプリの開発に携わりました。",
  },
  {
    id: 8,
    name: "Spring",
    image: "/logos/spring/spring-original.svg",
    alt: "Springロゴ",
    description: "使用期間：1年\n配属先の現場で使用しました。\n通話の音声録音システムの開発に携わりました。\nCSVダウンロード機能、Excel出力などの実装をしました。",
  },
  {
    id: 9,
    name: "C",
    image: "/logos/c/c-original.svg",
    alt: "Cロゴ",
    description: "使用期間：3年\n大学の時に使用していました。\n一番初めに触れたプログラミング言語で、\n配列・関数や変数など基礎を身に着けました。",
  },
  {
    id: 10,
    name: "C#",
    image: "/logos/csharp/csharp-original.svg",
    alt: "C#ロゴ",
    description: "使用期間：1年\n現場先で使用しておりました。\nマンションの管理者と住民向けのブラウザアプリの開発を行いました。画面上に金額・土地面積等の表示、\n請求書の出力機能、ログイン機能、別のアカウントとの\n連携などを行う際に使用しました。",
  },
  {
    id: 11,
    name: "Figuma",
    image: "/logos/figma/figma-original.svg",
    alt: "figmaロゴ",
    description: "使用期間：5年\nwebデザインのプログラミングスクールから全ての\nwebデザインに使用しました。かなり独学で身に着けた技術で休日にデザインの勉強の際に使用しています。",
  },
  {
    id: 12,
    name: "Unity",
    image: "/logos/unity/unity-original.svg",
    alt: "Unityロゴ",
    description: "使用期間：1年\n大学の卒業研究で使用しました。\n「VRにおける視覚効果と身体動作の関係」という\nテーマでVR空間内で実験場を作りました。\n実験場・動かすアバター・対象物などを作りVR内で\n動いたり触ったりするのにC++を少々使いました。",
  },
];
export default skills;