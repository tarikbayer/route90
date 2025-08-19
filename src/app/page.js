import Image from "next/image";
import styles from "./page.module.css";
import { stadiums } from "./data/stadiums";
import { StadiumCard } from "./components/StadiumCard";
import { MainHeading } from "./data/Header";
import { MainNav } from "./components/MainNav";
import { WelcomeBanner } from "./components/WelcomeBanner";

export default function Home() {
  const istanbulStadiums = stadiums.filter(
    (stadium) => stadium.city === "İstanbul"
  );
  const count = istanbulStadiums.length;

  return (
    <>
      <main>
        <MainHeading />
      </main>
      <MainNav />
      <div>
        <WelcomeBanner />
        {count > 0 && <p>{count} stadiums</p>}
        <ul>
          {istanbulStadiums.map((stadium) => (
            <StadiumCard key={stadium.id} stadium={stadium}>
              <em>Located in: {stadium.city}.</em>
            </StadiumCard>
          ))}
        </ul>
        <button>More info</button>
      </div>
    </>
  );
}
