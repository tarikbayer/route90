import Image from "next/image";
import styles from "./page.module.css";
import Stadiums, { stadiums } from "./data/grounds";
import { MainHeading } from "./data/Header";
import element from "./data/search";
import { MainNav } from "./components/MainNav";

export default function Home() {
  return (
    <>
      <main>
        <MainHeading />
      </main>
      <MainNav />
      <div>
        <Stadiums />
        <element />
      </div>
    </>
  );
}
