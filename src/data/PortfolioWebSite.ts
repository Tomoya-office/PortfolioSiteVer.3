export type PortfolioWebSite = {
  id: number;
  image: string;
  alt: string;
  height: number;
  width: number;
};

const PortfolioWebSite: PortfolioWebSite[] = [
  {
    id: 1,
    image: "/WebPortfolioPhotos/ECSitePhoto.svg",
    alt: "ケーキショップのECサイト",
    height: 230,
    width: 280,
  },
  {
    id: 2,
    image: "/WebPortfolioPhotos/CakeShopSite.svg",
    alt: "ケーキショップのLPサイト",
    height: 230,
    width: 280,
  },
  {
    id: 3,
    image: "/WebPortfolioPhotos/AsakusaPC.svg",
    alt: "浅草旅行サイト PC表示",
    height: 230,
    width: 280,
  },
  {
    id: 4,
    image: "/WebPortfolioPhotos/MyNaviPC.svg",
    alt: "マイナビのLP制作",
    height: 230,
    width: 280,
  },
  {
    id: 5,
    image: "/WebPortfolioPhotos/PortofolioSiteOldPC.svg",
    alt: "旧・ポートフォリオサイト",
    height: 230,
    width: 280,
  },
];

export default PortfolioWebSite;