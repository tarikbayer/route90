import Image from "next/image";
import styles from "./page.module.css";
import Stadiums, { stadiums } from "./data/grounds";
import { MainHeading } from "./data/Header";

export default function Home() {
  return (
    <>
      <main>
        <MainHeading />
      </main>
      <div>
        <Stadiums />
      </div>
    </>
  );
}
