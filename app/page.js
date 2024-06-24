import About from "@/components-root/About";
import Discover from "@/components-root/Discover";
import Experience from "@/components-root/Experience";
import Homes from "@/components-root/Homes";
import Place from "@/components-root/Place";
import Sponsers from "@/components-root/Sponsers";
import Subscribe from "@/components-root/Subscribe";
import Video from "@/components-root/Video";


export default function Home() {
  return (
    <>
      <Homes />
      <About />
      <Discover />
      <Experience />
      <Video suppressHydrationWarning={true}/>
      <Place />
      <Subscribe />
      <Sponsers />
    </>
  );
}
