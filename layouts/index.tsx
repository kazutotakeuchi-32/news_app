import Header from "../components/header";
import styles from "./index.module.scss";


type LayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}
export default MainLayout
