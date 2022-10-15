import './projects.css';
import portfolio from '../assets/item1.png';
import Amazon from '../assets/item2.png';
import admin from '../assets/admin.png';
import netflex from '../assets/item3.png';
// import landing from '../assets/landing.png';
import game from '../assets/sello-templet.png';
//hover

const Projects = () => {
  const data = [
    {
      name: 'Amazon clone',
      demo: 'https://amazon-clone-front-end-five.vercel.app/',
      code: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd',
      img: `${Amazon}`,
      lang: [
        'React',
        'bootstrap',
        'Redux tollkit',
        'node',
        'express',
        'mongodb',
      ],
    },
    {
      name: 'Portfolio',
      demo: 'https://github.com/Enas-Sello/animated-portfolio',
      code: 'https://github.com/Enas-Sello/animated-portfolio',
      img: `${portfolio}`,
      lang: ['React', 'taillwind'],
    },
    {
      name: 'Netflex clone',
      demo: 'https://github.com/Enas-Sello/Netflix_clone',
      code: 'https://github.com/Enas-Sello/Netflix_clone',
      img: `${netflex}`,
      lang: ['React', 'taillwind', 'firebase'],
    },
    {
      name: 'Admin dashbord',
      demo: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd/tree/main/src/Components/Dashboard',
      code: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd',
      img: `${admin}`,
      lang: [
        'React',
        'bootstrap',
        'Redux tollkit',
        'node',
        'express',
        'mongodb',
      ],
    },
    // {
    //   name: 'langing page',
    //   demo: 'https://github.com/Enas-Sello/landing',
    //   code: 'https://github.com/Enas-Sello/landing',
    //   img: `${landing}`,
    // lang: ['HTML','CSS','React'],

    // },
    {
      name: 'gameing landing page',
      demo: 'https://enas-sello.github.io/sello-template/',
      code: 'https://github.com/Enas-Sello/landing',
      img: `${game}`,
      lang: ['HTML', 'CSS', 'javaScript'],
    },
  ];
  console.log(data[0].lang[0]);
  return (
    <>
      <div
        name="Projects"
        className="w-full md:h-screen text-white capitalize "
      >
        <div className="cotainer max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="p-b-8  text-center">
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
                <div className="opacity-0 group-hover:opacity-100 justify-center bg-violet-200 w-full p-5 m-1 rounded-2xl">
                  <span className="text-4xl font-bold text-violet-800  tracing-wider">
                    {x.name}
                  </span>
                  <div className=" pt-8 ">
                    <a href={x.demo} target="#">
                      <button className="text-center rounded-lg px-6 m-4  bg-black font-bold text-xl ">
                        Dmo
                      </button>
                    </a>
                    <a href={x.code} target="#">
                      <button className="text-center rounded-lg px-6 m-4  bg-black font-bold text-xl">
                        code
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 text-violet-800 font-bold  text-center ">
                    {x.lang.map((a) => (
                      <p>{a}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
