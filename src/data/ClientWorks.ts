export type ClientWork = {
  id: number;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  description: string[];
  languages: string[];
  database: string[];
  tools: string[];
  role: string;
  responsibilities: string[];
  learning: string[];
};

const ClientWorks: ClientWork[] = [
  {
    id: 1,
    title: "マンション管理会社向けシステム",
    image: "/ClientWork/ApartmentManagementSystem.svg",
    alt: "マンション管理会社向けシステム",
    width: 400,
    height: 330,
    description: [
      "住宅・不動産業界向けのクラウド型業務管理システム。",
      "物件や顧客、契約、問い合わせなどの情報を一元管理し、業務効率化を支援する。"
    ],
    languages: ["HTML", "CSS", "Javascript", "jQuery", "C#"],
    database: ["SQL Server"],
    tools: ["Visual Studio 2017", "Git", "Slack", "Copilot"],
    role: "PG（プログラマー）",
    responsibilities: [
      "マンションの管理者と住民向けのブラウザアプリの開発を行いました。",
      "複数のクライアント向けにカスタムしてリリースの作業を繰り返していました。",
      "期間は約半年間です。",
      "・Excel出力機能・ログイン機能の実装",
      "・スタイル調整・DBからの一覧取得",
      "・管理者・ユーザー向けアプリケーションとの連携",
      "など多岐にわたる機能を担当しました。",
      "Webデザイン経験を活かし、UI/UXについても改善に協力しました。",
    ],
    learning: [
      "フロント・バックエンド・SQLなど幅広く対応する現場でした。",
      "フルスタックエンジニアを目指す身としては学びの多い現場でした。",
      "それと同じく、ここまでの現場でもバックの技術を扱ってきましたが",
      "最新の技術やツールを使ってみたい、そんな現場に行きたいという",
      "思いが強くなりました。",
    ],
  },

  {
    id: 2,
    title: "鉄道の係員・ユーザー向けのアプリケーションの開発",
    image: "/ClientWork/RailwayApplication.svg",
    alt: "鉄道の係員・ユーザー向けのアプリケーションの開発",
    width: 400,
    height: 330,
    description: [
      "鉄道の駅員間で乗客の乗降に関する情報を共有し、円滑な案内・対応を支援するシステム。",
      "車椅子を利用するお客様など、乗降時にサポートが必要な方の乗車・降車予定を",
      "駅員間で共有し、安全でスムーズな駅業務を支援する。"
    ],
    languages: ["HTML", "CSS", "Javascript", "VB.net"],
    database: ["pgAdmin4"],
    tools: ["Visual Studio 2017", "SVN", "MicrosoftTeams", "Excel"],
    role: "PG（プログラマー）/ テスター",
    responsibilities: [
      "鉄道の係員が使用するアプリケーション作成を行いました。",
      "例えば電車の利用者に障害のある方が乗車する時、そのアプリで「何駅先で車椅子の",
      "お客様が降ります」といった通知を送り、駅員間で共有が出来ます。",
      "テスト項目作りから実際にテストを行い、コードの修正を担当しました。",
      "コード修正は主にjsによる処理を担当しました。出力されない部分の修正や、",
      "データが間違っていた時は、PgAdminを使用してDBを操作を行うこともありました。",
    ],
    learning: [
      "フロント・バックエンド・SQLなど幅広く対応する現場でした。",
      "派遣業務を始めてから2つ目の現場で、テスト用紙作成からコード修正",
      "設計書の確認などエンジニアとしてできる事が沢山経験できたそんな現場でした。",
      "期間も年末までと短かったので何ができるかと考えて精一杯業務に順次致しました。",
    ],
  },

    {
    id: 3,
    title: "通話の録音システム開発",
    image: "/ClientWork/CallRecordingSystem.svg",
    alt: "通話の録音システム開発",
    width: 400,
    height: 330,
    description: [
      "通話の音声システムの開発。",
      "音声認識・音声合成・通話録音・音声分析などの技術を活用したシステム",
      "電話での会話を録音・文字化・分析することで、コールセンターや企業の",
      "電話対応業務の効率化と品質向上を支援"
    ],
    languages: ["HTML", "CSS", "Javascript", "Spring(Java)"],
    database: ["pgAdmin4"],
    tools: ["Spring", "SVN", "MicrosoftTeams", "Excel"],
    role: "PG（プログラマー）/ テスター",
    responsibilities: [
      "通話の音声システムの開発に順次しました。",
      "アプリのテスターとして派遣されましたが、課題表にあるアプリの不具合の",
      "修正なども担当しました。",
      "・サーバーのセッティング、セットしたアプリのテスト",
      "・課題管理表の課題の修正。レイアウトの調整、音声波形グラフの調整など",
      "・アプリの新機能の実装案の提案",
      "・DBの修正、SQLの書き換え",
    ],
    learning: [
      "初めての派遣先での業務でした。",
      "今まではフロントの業務が多く、初めてバックの業務も担当するようになり、",
      "不安も多かったですが、多くの時間をとって下さり一つ一つ課題に取り組むことが",
      "できました。現場先の方もなるべく多くのことを経験させようという考えで",
      "段階を踏んでステップアップして下さり様々な意味で勉強をさせていただきました。",
      "ここでのバックでの基礎知識がのちのC#での開発業務でも役に立ちよい経験を得られました。",
    ],
  },
];

export default ClientWorks;