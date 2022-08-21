import {
  Header,
  Avatar,
  Skills,
  Contact,
  Projects,
  NavBar,
} from "src/components";

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="mb-10">
        <NavBar />
      </div>

      <div className="mb-10 flex flex-col">
        <div className="mx-auto w-fit m-auto  text-center flex flex-col justify-between items-center ">
          <div className="mb-3 lg:mb-5">
            <Avatar className="inline-block rounded-full w-14 h-14 lg:w-28 lg:h-28 " />
          </div>
          <div id="about">
            <h5 className="mb-5 text-sm lg:text-lg text-white font-medium">
              Hey, I'm Alonso Diaz
            </h5>
          </div>
          <Header />
          <div className=" mt-20 lg:mt-40 flex flex-col items-center justify-center">
            <div
              id="projects"
              className=" w-64 lg:w-full mt-16 lg:mt-24   lg:items-start lg:ml-12 "
            >
              <h1 className="text-center lg:text-left text-2xl lg:text-2xl text-white font-semibold">
                Here are a few of my personal projects:
              </h1>
            </div>
            <div className="w-[100vw] lg:w-[63rem] mt-16">
              <Projects />
            </div>

            <div className="flex flex-col items-center  lg:items-start mt-16 lg:mt-24">
              <div className=" w-64 lg:w-96">
                <h1 className="text-2xl text-white font-semibold lg:text-justify ">
                  I got the experience.
                </h1>
                <h1 className="text-2xl text-white font-semibold lg:text-justify ">
                  Here is my toolbelt for success:
                </h1>
              </div>

              <div
                id="skills"
                className="flex w-full mt-16 lg:mt-14 lg:ml-5 justify-center items-center"
              >
                <Skills />
              </div>
            </div>

            <div id="contact" className="flex flex-col  lg:ml-3 mt-16 lg:mb-6 ">
              <h1 className="text-xl lg:text-2xl text-white font-semibold mb-10">
                Interested in contacting me?
              </h1>
            </div>
            <Contact />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10">
        <div className=" w-[80vw] pt-8 mt-8 text-center border-t border-gray-500 flex flex-col gap-1">
          <span className="items-center uppercase text-xs font-bold tracking-widest text-gray-500 ">
            Made by Alonso Diaz
          </span>
          <span className=" items-center uppercase text-xs font-bold tracking-widest text-gray-500">
            Whit
          </span>
          <div className="flex gap-3 w-full justify-center ">
            <img src="/images/react.svg" alt="react" className="w-5" />
            <img src="/images/typescript.svg" alt="react" className="w-5" />
            <img src="/images/tailwind.svg" alt="react" className="w-5" />
          </div>
        </div>
      </div>
    </>
  );
};

/* border-2 lg:border-red-500 lg:border-yellow-500 xl:border-blue-500 2xl:border-green-500  lg:ml-96 lg:ml-96 xl:ml-72 2xl:ml-96*/
