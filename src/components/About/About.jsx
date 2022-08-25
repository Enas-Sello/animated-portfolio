import React from 'react';
import Button from '../button/Button';

const About = () => {
  const about = {
    name: 'Enas awad',
  };
  return (
    <div name="About" className=" w-full h-screen  text-white capitalize">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="container 
                max-[1000px] w-full grid grid-cols-2 gap-8"
        >
          <div data-aos="fade-in-zome" className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              about
            </p>
          </div>
          <div></div>
        </div>

        <div
          className="
                max-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
        >
          <div
            data-aos="fade-down-left"
            className="sm:text-right text-4xl font-bold mt-5"
          >
            <p className=" text-center">
              hi i'm <br />
              {about.name}
              <br /> take a look around
            </p>
          </div>
          <div data-aos="fade-down-right">
            <p className=' text-l'>
              I have started web design with Figma and Adobe XD then I joined
              ITI ( information technology institute ) MERN Stack. Here are some
              technologies I have learned with ITI MERN (HTML ,CSS , JavaScript,
              EcmaScript ,Mongo db , mongoose React js , Angulr , React native,
              node js , express js , Next js , nest, Bootstrap, tailwind.)
              #online courses I have taken - Frontend web development with FWD
              technologies and codeing language's ( HTML , Css , JavaScript ) -
              UX design process with google growth " Google UX Design
              Professional"
            </p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default About;
