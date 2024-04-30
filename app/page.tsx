import HomePageCarousel from "@/app/components/HomePageCarousel";
import InfoBlocks from "@/app/components/InfoBlocks";
import ProductLines from "@/app/components/ProductLines";
import GlobalServerBasedSolution from "@/app/components/GlobalServerBasedSolution";
import Header from "@/app/components/header";
import { InfoBlockType } from "@/utils/models";
import {
  faBullhorn, faCalendar, faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import SocialNetworksWidget from "@/app/components/SocialNetworksWidget";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <HomePageCarousel/>
      <InfoBlocks infoBlocks={[
        {
          type: InfoBlockType.NEWS,
          icon: faBullhorn,
          img: 'https://fastly.picsum.photos/id/931/300/200.jpg?hmac=QOlhAo_HCYotJnIlWPJ6LKAoQAX5p5JRE3P0-2WrCkA',
          title: 'EGT is expecting FADJA Colombia 2017',
          subtitle: 'April 4, 2017',
          description: '“We’re expecting FADJA Colombia 2017 to continue our success from the 2016’s event,” ...',
          actionBtnTxt: 'READ MORE'
        },
        {
          type: InfoBlockType.EVENTS,
          icon: faCalendar,
          img: 'https://fastly.picsum.photos/id/931/300/200.jpg?hmac=QOlhAo_HCYotJnIlWPJ6LKAoQAX5p5JRE3P0-2WrCkA',
          title: 'Indian Gaming Show',
          subtitle: 'San Diego, April 10-13, 2017 Stand 1833',
          description: '',
          actionBtnTxt: 'READ MORE'
        },
        {
          type: InfoBlockType.PRESS_RELEASES,
          icon: faNewspaper,
          img: 'https://fastly.picsum.photos/id/931/300/200.jpg?hmac=QOlhAo_HCYotJnIlWPJ6LKAoQAX5p5JRE3P0-2WrCkA',
          title: 'True Leader accolade for Bulgarian firm',
          subtitle: 'February 10, 2017',
          description: 'Euro Games technologies has been awarded the True Leader 2015 Accolade. The company...',
          actionBtnTxt: 'READ MORE'
        },
      ]}/>
      <ProductLines/>
      <GlobalServerBasedSolution/>
      <Footer/>

      <SocialNetworksWidget/>
    </main>
  );
}
