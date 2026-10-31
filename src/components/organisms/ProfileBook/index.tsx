import styles from "./index.module.css";
import HTMLFlipBook from "react-pageflip";
import clsx from "clsx";
import { useRef, useState, type ComponentRef } from "react";

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
          <h2>Profile</h2>
          <p>ここにプロフィールを書きます。</p>
        </div>

        <div className={styles.BookPage}>
          <h2>Skills</h2>
          <p>HTML / CSS / JavaScript</p>
        </div>

        <div className={styles.BookPage}>
          <h2>Career</h2>
          <p>これまでの経歴を書きます。</p>
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
