import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl:pb-6">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-xl font-semibold">Software Developer</h1>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-accent">Danish Tamboli</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at breaking code and building it better.
            </p>

            <div className="flex flex-col xl:flex-row items-center ">
              <Button variant="outline" size="lg">
                <a
                  href="/resume.pdf"
                  download
                  className=" mb-1 uppercase flex items-center gap-2">

                  <span>Download CV</span>
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 xl:ml-6">
                <Social containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 ml-2  mt-3 xl:m-0 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>


        </div>
        <Stats />
      </div>

    </section>
  )
}

export default Home