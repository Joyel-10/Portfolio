import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {
  const listProjects = [
    {
      id: 1,
      image: "/waste.jpg",
      title: "Project 1",
      description: "Waste Mangement System",
      link: "https://waste-management-frontend-opal.vercel.app/",
    },
    {
      id: 2,
      image: "/inventry.jpg",
      title: "Project 2",
      description: "Inventory Managemnt",
      link: "https://inventory-management-beta-weld.vercel.app/",
    },
    {
      id: 3,
      image: "/Movie.png",
      title: "Project 3",
      description: "Movie Review",
      link:"https://movie-review-mocha-gamma.vercel.app/",
    },
    {
      id: 4,
      image: "/Articles.jpg",
      title: "Project 4",
      description: "Article Creation",
      link:"https://article-creation-frontend.vercel.app/",
    },
    {
      id: 5,
      image: "/Travel.png",
      title: "Project 5",
      description: "Travel Website",
      link:"https://vinodhayatra-travels.vercel.app/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-delay="400"
        id="projects"
        className="relative overflow-hidden flex flex-col text-white body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

          <Slider {...settings}>
            {listProjects.map((project) => (
              <div key={project.id} className="p-4">
                <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                      {project.title}
                    </h2>
                    <p className="leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Project;
