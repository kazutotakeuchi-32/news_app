import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon} >
          <Image
            src="/img/headerIcon/menu.png"
            alt="menu icon"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div>
        <h1 className={styles.h1}>
          <Link href="/">
            <a>
              <span >Simple</span>
              <span >News</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  )
}
export default Header
