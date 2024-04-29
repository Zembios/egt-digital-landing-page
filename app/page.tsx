import HomePageCarousel from "@/app/components/HomePageCarousel";
import InfoBlocks from "@/app/components/InfoBlocks";
import ProductLines from "@/app/components/ProductLines";
import GlobalServerBasedSolution from "@/app/components/GlobalServerBasedSolution";
import Header from "@/app/components/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <HomePageCarousel/>
      <InfoBlocks/>
      <ProductLines/>
      <GlobalServerBasedSolution/>
      <footer></footer>
    </main>
  );
}
