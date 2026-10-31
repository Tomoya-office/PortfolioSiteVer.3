export type ClientWork = {
  id: number;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  description: string;
  languages: string[];
  database: string[];
  tools: string[];
  role: string;
  responsibilities: string[];
  learning: string;
};

const ClientWorks: ClientWork[] = [
  {
    id: 1,
    title: "マンション管理会社向けシステム",
    image: "/ClientWork/ApartmentManagementSystem.svg",
    alt: "マンション管理会社向けシステム",
    width: 400,
    height: 330,
    description: "システムの概要を記載",
    languages: ["HTML", "CSS", "Javascript", "jQuery", "C#"],
    database: ["SQL Server"],
    tools: ["Visual Studio 2017", "Git", "Slack"],
    role: "PG（プログラマー）",
    responsibilities: ["マンションの管理者と住民向けのブラウザアプリの開発", "を行いました。複数のクライアント向けにカスタムして", "リリースの作業を繰り返していました。", "期間は約半年間で", "・Excel出力機能・ログイン機能の実装", "・スタイル調整・DBからの一覧取得", "・管理・ユーザー向けアプリケーションとの連携", "など多岐にわたる機能を担当致しました。", "webデザイン経験者としてUI/UXについても", "ご助力できたかと思います。"],
    learning: "フロント・バックエンド・SQLなど幅広く対応する現場でした。\nフルスタックエンジニアを目指す身としては学びの多い現場でした。それと同じく、ここまでの現場でもバックの技術を扱ってきましたが\n最新の技術やツールを使ってみたい、そんな現場に行きたいという\n思いが強くなりました。",
  }, 
];

export default ClientWorks;