import About from "@/common/module/About";
import Blog from "@/common/module/Blog";
import Feedback from "@/common/module/Feedback";
import Hero from "@/common/module/Hero";
import Service from "@/common/module/Service";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
    <Hero/>
    <Service />
    <Blog/>
    <Feedback/>
    {/* <About /> */}
    </div>
  )
}
