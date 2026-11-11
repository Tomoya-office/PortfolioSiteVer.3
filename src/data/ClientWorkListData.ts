export type ClientWorkListItem = {
  id: number;
  image: string;
  alt: string;
  height: number;
  width: number;
};

const ClientWorkListData: ClientWorkListItem[] = [
  {
    id: 1,
    image: "/ClientWork/ApartmentManagementSystem.svg",
    alt: "マンションの管理システム",
    height: 230,
    width: 280,
  },
  {
    id: 2,
    image: "/ClientWork/RailwayApplication.svg",
    alt: "鉄道の係員・ユーザー向けのアプリケーションの開発",
    height: 230,
    width: 280,
  },
  {
    id: 3,
    image: "/ClientWork/CallRecordingSystem.svg",
    alt: "通話の録音システム開発",
    height: 230,
    width: 280,
  },
  {
    id: 4,
    image: "/ClientWork/InternalSystems.svg",
    alt: "社内の受託開発向けの案内サイトのLP改修",
    height: 230,
    width: 280,
  },
];

export default ClientWorkListData;