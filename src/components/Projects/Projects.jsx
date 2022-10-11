import './projects.css';
import portfolio from '../assets/item1.png';
import Amazon from '../assets/item2.png';
import admin from '../assets/admin.png';
import netflex from '../assets/item3.png';
import landing from '../assets/landing.png';
import game from '../assets/sello-templet.png';
const Projects = () => {
  const data = [
    {
      name: 'Amazon clone',
      demo: 'https://amazon-clone-front-end-five.vercel.app/',
      code: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd',
      img: `${Amazon}`,
    },
    {
      name: 'Portfolio',
      demo: 'https://github.com/Enas-Sello/animated-portfolio',
      code: 'https://github.com/Enas-Sello/animated-portfolio',
      img: `${portfolio}`,
    },
    {
      name: 'Netflex clone',
      demo: 'https://github.com/Enas-Sello/Netflix_clone',
      code: 'https://github.com/Enas-Sello/Netflix_clone',
      img: `${netflex}`,
    },
    {
      name: 'Admin dashbord',
      demo: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd/tree/main/src/Components/Dashboard',
      code: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd',
      img: `${admin}`,
    },
    // {
    //   name: 'langing page',
    //   demo: 'https://github.com/Enas-Sello/landing',
    //   code: 'https://github.com/Enas-Sello/landing',
    //   img: `${landing}`,
    // },
    {
      name: 'gameing landing page',
      demo: 'https://enas-sello.github.io/sello-template/',
      code: 'https://github.com/Enas-Sello/landing',
      img: `${game}`,
    },
  ];
  return (
    <>
      <div
        name="Projects"
        className="w-full md:h-screen text-white capitalize "
      >
        <div className="cotainer max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="p-b-8   text-center">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400 ">
              work
            </p>
            <p className="py-6 text-2xl">my recent </p>
          </div>

          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-3"
          >
            {data.map((x) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card-item shadow-lg group container rounded-md flex
              justify-center items-center mx-auto"
                style={{
                  backgroundImage: `url(${x.img})`,
                  backgroundSize: 'cover',
                  height: '300px',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100 justify-center ">
                  <span className="text-4xl font-bold text-yellow-400 tracing-wider">
                    {x.name}
                  </span>
                  <div className=" pt-8 ">
                    <a href={x.demo} target="#">
                      <button className="text=center rounded-lg px-4 m-2 bg-[#4c2da2] font-bold text-lg ">
                        Dmo
                      </button>
                    </a>
                    <a href={x.code} target="#">
                      <button className="text=center rounded-lg px-4 m-2  bg-[#4c2da2] font-bold text-lg ">
                        code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* هنا */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
