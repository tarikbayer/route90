import Image from "next/image";
import styles from "./page.module.css";
import { grounds } from "./data/grounds";
import { GroundCard } from "./components/GroundCard";
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
        <GroundCard
          ground={{
            id: "fenerbahce-stadi",
            name: "Fenerbahçe Stadı",
            city: "İstanbul",
            country: "Turkey",
            yearOpened: 1907,
            isUEFAApproved: true,
          }}
        />
        <element />
      </div>
    </>
  );
}
