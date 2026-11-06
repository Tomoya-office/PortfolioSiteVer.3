export type ArtworkPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArtworkCategory = {
  id: string;
  label: string;
  icon: string;
  alt: string;
  photos: ArtworkPhoto[];
};

export type Artwork = {
  id: number;
  title: string;

  mainImage: string;
  mainImageAlt: string;

  concept: string[];
  target: string[];
  design: string[];
  position: string;
  episode: string[];

  categories: ArtworkCategory[];
};

const ArtworkData: Artwork[] = [
  {
    id: 1,
    title: "ケーキショップのECサイト",
    mainImage: "/ArtWorksPhotos/ECsiteTop.svg",
    mainImageAlt: "ECサイトのトップページ",

    concept: ["飛び切り明るくポップなデザインのECサイト"],
    target: ["若い女性20～30代"],

    design: [
      "ターゲットが若い女性なので自分の持てる手札全てを使い",
      "明るく可愛らしいサイトを作りました。",
      "サイト全体の統一感だけでなく、LPとのデザインも意識して",
      "作りました。",
    ],

    position: "PL・PG・デザイン",

    episode: [
      "前回のLP制作に続き、私が所属している会社で融資を募って",
      "大人数で制作するサイト制作でした。",
      "普段配属先でできないことを行うのが本プロジェクトの目的で、",
      "PL経験のない私も含めて慣れないことだらけでした。",
      "現在もまだ制作途中で私は",
      "・全体の監修、コードレビュー",
      "・サイト画面のデザイン",
      "・ログイン画面、購入画面制作",
      "などを担当しました。",
    ],

    categories: [
      {
        id: "login",
        label: "ログイン",
        icon: "/ArtWorksPhotos/Icons/LoginIcon.svg",
        alt: "ログインアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/ECSite/Login.svg",
            alt: "ログイン画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "cart",
        label: "カート",
        icon: "/ArtWorksPhotos/Icons/CartIcon.svg",
        alt: "カートアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/ECSite/Purchase.svg",
            alt: "カート画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "home",
        label: "ホーム",
        icon: "/ArtWorksPhotos/Icons/HomeIcon.svg",
        alt: "ホームアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/ECSite/ECsiteFull.svg",
            alt: "ECサイトのホーム画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "registration",
        label: "会員登録",
        icon: "/ArtWorksPhotos/Icons/RegistrationIcon.svg",
        alt: "会員登録アイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/ECSite/Registration1.svg",
            alt: "会員登録画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "management",
        label: "管理画面",
        icon: "/ArtWorksPhotos/Icons/managementIcon.svg",
        alt: "管理画面アイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/ECSite/Dashboard.svg",
            alt: "管理画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
    ],
  },



  {
    id: 2,
    title: "ケーキショップのLPサイト",
    mainImage: "/ArtWorksPhotos/LPsiteTop.svg",
    mainImageAlt: "LPサイトのトップページ",

    concept: ["飛び切り明るくポップなデザインのLPサイト"],
    target: ["若い女性20～30代"],

    design: [
      "ECサイトと並行して作っているサイトです。",
      "ECサイトとデザインが統一感が出るよう近いデザインにしました。",
      "同じく赤を基調に店のケーキの雰囲気をわかっていただけるよう目指しました。",
    ],

    position: "PL・PG・デザイン",

    episode: [
      "こちらのサイトも私が所属している会社で融資を募って",
      "制作をしております。",
      "",
    ],

    categories: [
      {
        id: "PC",
        label: "パソコン",
        icon: "/ArtWorksPhotos/Icons/PC.svg",
        alt: "PCアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/LPSite/LPSitePC.svg",
            alt: "LPサイトのPC画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "Mobile",
        label: "モバイル",
        icon: "/ArtWorksPhotos/Icons/MB.svg",
        alt: "Mobileアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/LPSite/LPSiteMB.svg",
            alt: "LPサイトのMobile画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
    ],


  },


  {
    id: 3,
    title: "デジハリの卒業制作",
    mainImage: "/ArtWorksPhotos/GraduationWorkPC.svg",
    mainImageAlt: "デジハリの卒業制作",

    concept: [
      "和風デザイン",
      "学生のための修学旅行ページ",
      "学びと訪れる場所をいっぺんに調べられるオリジナルサイト",
    ],
    target: ["東京を訪れた地方の修学旅行生"],

    design: [
      "今回ターゲットは学生なので文章ばかりのものでは見飽きてしまうので写真を多く使ったサイトとしました。",
      "自分が修学旅行生だった時を思い出しその時の自分だったらどんなサイト",
      "だったら目につくだろうという事を考えながらデザインしていきました。",
      "学生は授業での調べ学習時間は限られているので、一つ一つの文章が長くなりすぎないようにし",
      "一つの事に特化したサイトではなく、一度で色々なものを知れる学びのサイトを目指しました。",
    ],

    position: "PG・デザイン",

    episode: [
      "デジタルハリウッドスクールに通っていた時の卒業制作です。",
      "今回の卒業制作はクライアントなしの新規オリジナルサイトです。",
      "その為文章はすべて自分で考え写真は全部現地に行き撮影しました。",
      "食事やスイーツのページもありますが、日に食べれる量は限界があるので",
      "2～3日かけて取材許可を貰いながら作った為デザインを形にするのに時間がかかりました。",
      "恐らく自分で作りたいサイトは最初で最後になると思い、",
      "沢山苦労をして自分の思うサイトを作り上げることが出来ました。",
    ],

    categories: [
      {
        id: "Sweets",
        label: "スイーツ",
        icon: "/ArtWorksPhotos/Icons/SweetsIcon.svg",
        alt: "Sweetsアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/GraduationProject/Sweets.png",
            alt: "Sweets特集画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "Lunch",
        label: "ランチ",
        icon: "/ArtWorksPhotos/Icons/LunchIcon.svg",
        alt: "Lunchアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/GraduationProject/Lunch.png",
            alt: "Lunch特集画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "Home",
        label: "ホーム",
        icon: "/ArtWorksPhotos/Icons/HomeIcon.svg",
        alt: "Homeアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/GraduationProject/GraduationProjectPC.jpg",
            alt: "Homeのデザイン",
            width: 1440,
            height: 2500,
          },
        ],
      },

      {
        id: "Study",
        label: "ホーム",
        icon: "/ArtWorksPhotos/Icons/StudyIcon.svg",
        alt: "勉強アイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/GraduationProject/History.png",
            alt: "歴史ページのデザイン",
            width: 1440,
            height: 2500,
          },
        ],
      },

      {
        id: "Camera",
        label: "カメラ",
        icon: "/ArtWorksPhotos/Icons/CameraIcon.svg",
        alt: "カメラアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/GraduationProject/PhotoSpot.png",
            alt: "フォトスポットのページデザイン",
            width: 1440,
            height: 2500,
          },
        ],
      },


    ],
  },

  {
    id: 4,
    title: "マイナビのLPサイト",
    mainImage: "/ArtWorksPhotos/MyNaviPC.png",
    mainImageAlt: "マイナビのLPサイト",

    concept: [
      "自然調で優しさと清潔さをデザイン",
      "マイナビ転職情報事業部の求人を目的としているサイト。"
    ],
    target: [
      "30代女性",
      "・事務職へのキャリアチェンジをしたい人",
      "・サポートが充実している会社で仕事がしたい人",
      "・在宅ワークも織り交ぜながら働きたい人",
      "・もくもく仕事をしたい人など"
    ],
    design: [
      "こちらのサイトがデジハリ超実践クラスにて私が初めて依頼を頂き作った作品になります。",
      "マイナビは転職サイト・新卒サイトなど様々ありますがそれぞれサイトのイメージカラーが決まっており、",
      "今回は転職情報事業部のサイトなので自然調のサイトをデザインしてほしいという内容でした。",
      "トップページに空を見上げる女性の写真を使うことで明るい未来をイメージとし、",
      "流体シェイプで写真を型取り優しい印象にしています。",

      "私が新卒の会社探しの時、会社のイメージや働いている人の様子・言葉などを見てから",
      "事業内容を見ていました。なので、実際に働くスタッフの声やオフィスの様子を",
      "一番目立つようにしました。色のイメージ・視線の 流れ・モバイルページとの統一性など",
      "色々なことを意識して作り非常に勉強になりました。"
    ],

    position: "PL・PG・デザイン",

    episode: [
      "まず、予想外のアクシデントという意味で大変だったのはヒアリング当日にコロナウィルスに",
      "かかってしまった為、自分が聞きたかった質問を聞けなかったことと、",
      "一週間立っていることもままならない状態だった為、予定が大きく遅れてしまいました。",
      "技術面ではよくある質問で本当はアコーディオンにする予定でしたが、",
      "まだ技術的にJavascriptを導入することが出来なかった為このようなデザインになりました。",
      "ですが今回の反省を活かして卒業課題では自動スライドなどを導入することができました。"
    ],

    categories: [
      {
        id: "PC",
        label: "パソコン",
        icon: "/ArtWorksPhotos/Icons/PC.svg",
        alt: "PCアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/MyNavi/MyNaviPC.jpg",
            alt: "マイナビサイトのPC画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "Mobile",
        label: "モバイル",
        icon: "/ArtWorksPhotos/Icons/MB.svg",
        alt: "Mobileアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/MyNavi/MynaviMB.jpg",
            alt: "マイナビサイトのMobile画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
    ],
  },


  {
    id: 5,
    title: "旧・プロフィールサイト",
    mainImage: "/ArtWorksPhotos/OldProfileTop.svg",
    mainImageAlt: "旧・プロフィールサイト",

    concept: [
      "海をテーマにしたデザイン",
      "明るい青天のようなポートフォリオ"
    ],
    target: [
      "ポートフォリオサイトなので、ターゲットは面接官",
      "装飾は最低限とし、作品よりも目立たないよう",
      "Javascriptによるスライドモーションなどで変化をもたらす。",
    ],
    design: [
      "サイトは自分のイメージカラーである青とサイトを訪れた人に",
      "安心感を与えることを意識してデザインしました。",
      "しかし、ポートフォリオサイトなので、フォントで引き締めて",
      "堅実性も感じさせる様なサイトを目指しました。",
      "我が家は毎年夏に海へ行っているので海の写真が多かったこともあり",
      "今回は海をテーマとしたサイトにしました。",
    ],

    position: "PL・PG・デザイン",

    episode: [
      "今回のクライアントはある意味私自身な為、",
      "自分の中で納得するまでしっかりと纏めサイト制作に挑みました。",
      "卒業課題で苦戦したスライドモーションやナビゲーションメニューも",
      "入れることを想定してデザインしました。サイト自体はデザイン含めて",
      "一ヶ月もしない内に完成したのですが、Javascriptを読み込ませうまく動作",
      "しなかったり、文字が潰れたりなどして、一からそのプログラムを見直したりし",
      "改めて動きのあるサイトを作る難しさを知りました。"
    ],

    categories: [
      {
        id: "HOME",
        label: "ホーム",
        icon: "/ArtWorksPhotos/Icons/HomeIcon.svg",
        alt: "ホームアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/OldPortfolio/PortfolioOldPC.png",
            alt: "マイナビサイトのPC画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
      {
        id: "Mobile",
        label: "モバイル",
        icon: "/ArtWorksPhotos/Icons/MB.svg",
        alt: "Mobileアイコン",
        photos: [
          {
            src: "/ArtWorksPhotos/FullPage/MyNavi/MynaviMB.jpg",
            alt: "マイナビサイトのMobile画面",
            width: 1440,
            height: 2500,
          },
        ],
      },
    ],
  },


];

export default ArtworkData; 