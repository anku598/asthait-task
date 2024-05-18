import { Footer } from "./components/Footer/Footer";
import { GridSection } from "./components/GridSection/GridSection";
import { Header } from "./components/Header/Header";
import { StatsSection } from "./components/StatsSection/StatsSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <GridSection />
      <StatsSection />
      <Footer />
    </main>
  );
}
