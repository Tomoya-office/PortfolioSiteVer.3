import styles from "./index.module.css";
import HTMLFlipBook from "react-pageflip";
import clsx from "clsx";
import { useRef, useState, type ComponentRef } from "react";
import Image from "next/image";

export default function ProfileBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const lastPage = 5;
  const bookRef = useRef<ComponentRef<typeof HTMLFlipBook>>(null);

  const openBook = async () => {
    const book = bookRef.current;

    if (!book) return;
    const pageFlip = book.pageFlip();
    pageFlip.flipNext();

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 2600);
    });

    // 続きのページをパラパラめくる
    for (let i = 0; i < 2; i++) {
      pageFlip.flipNext();

      await new Promise<void>((resolve) => {
        setTimeout(resolve, 1600);
      });
    }
  };
  return (
    <div
      className={clsx(
        styles.BookPosition,
        currentPage === 0 && styles.BookClosedFront,
        currentPage === 5 && styles.BookClosedBack,
      )}
    >
      <div className={styles.BookThickness}></div>
      <HTMLFlipBook
        className="book"
        style={{}}
        startPage={0}
        size="fixed"
        width={400}
        height={600}
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        drawShadow={true}
        flippingTime={2500}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.8}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={150}
        showPageCorners={true}
        disableFlipByClick={true}
        ref={bookRef}
        onFlip={(e) => setCurrentPage(e.data)}
      >
        <div
          className={styles.BookCover}
          data-density="hard"
          onClick={openBook}
        >
          <span className={styles.BookSolid}></span>
          <h3 className={styles.BookTitle}>井草朋也</h3>
        </div>

        {/* 中身 */}
        <div className={styles.BookPage}>
          <Image
            src="/top/HighSchoolPhoto.png"
            alt="portfolioスクロール画像"
            className={styles.ProfilePhoto}
            width={320}
            height={482}
          ></Image>
        </div>

        <div className={styles.BookPage}>
          <h2 className={styles.Titele}>My Profile</h2>
          <div className={styles.AboutProfilePosition}>
            <div className={styles.AboutProfileleft}>
              <p>web designer</p>
              <p>web programmer</p>
              <p>Illustrator</p>
            </div>
            <div className={styles.AboutProfileright}>
              <p>born : 1999.12.1</p>
              <p>Age : 24</p>
              <p>blood type : O</p>
              <p>hometown : Tokyo</p>
            </div>
          </div>
          <div className={styles.MessageTextPosition}>
            <p>
              人の夢を応援する。
              <br />
              万に通じるようなクリエイターを
              <br />
              目指します。 子供の頃から誰かの
              <br />
              役に立つことが好きで誰かの夢を背中から推せるようにとwebデザイナーを目指していました。
              今もデザインをすることは好きですが、それだけでは理想を叶えられない。
              <br />
              今は様々なプログラミングのことについて勉強を行っています。
              <br />
              システムを使えば人の生活が豊かになる。
              <br />
              豊かになれば人の心に余裕が生まれる。
              <br />
              余裕が生まれれば今度は自分が他の人に手を差し伸べるようになる。
              <br />
              人の役に立つシステムを作ることが
              <br />
              明日の平和につながることと考えています。
              <br />
            </p>
          </div>
        </div>

        <div className={styles.BookPage}>
          <Image
            src="/top/BaseBallPhoto.JPG"
            alt="portfolioスクロール画像"
            className={styles.CareerPhoto}
            width={320}
            height={482}
          ></Image>
        </div>

        <div className={styles.BookPage}>
          <h2 className={styles.Titele}>Career</h2>
          <p>
            ・1999.12 母型の祖父母がいる埼玉県の病院で誕生
            <br />
            ・2003 その後神奈川県横浜市青葉台で数年過ごす。
            <br />
            ・2006.4 小学校に上がるとき父型の実家のある東京都 府中市に移り住む。
            <br />
            ・2007.9 妹誕生
            <br />
            ・2008.4 野球チームに所属。ポジションは外野。
            <br />
            ・2013.4 地元の中学に上がり野球部へ
            <br />
            「内野ならどこできる？」
            <br />
            「練習でセカンドならやったことが…」
            <br />
            「じゃあ今日からセカンドね」
            <br />
            という会話があり内野手に転向
            <br />
            ・2015.4 高校進学。テニスをはじめる。
            <br />
            ・2018.4 大学進学。情報学部にて様々な
            <br />
            プログラム言語を学習する。
            <br />
            VRと人体の錯覚についての論文を書き上げる。
          </p>
        </div>

        <div className={styles.BookPage}>
          <h2>Message</h2>
          <p>最後のプロフィールページです。</p>
        </div>

        <div className={styles.BookPage}>
          <h2>Message</h2>
          <p>最後のプロフィールページです。</p>
        </div>

        {/* 裏表紙 */}
        <div className={styles.BookCoverEND} data-density="hard">
          <span className={styles.BookSolidEND}></span>
          <h4 className={styles.BookTitle}>裏表紙</h4>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
