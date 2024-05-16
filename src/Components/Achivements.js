import React from "react";

const Achivements = () => {
  const posts = [
    {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
      img: "img/IMG_2031.JPG",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
      img: "img/IMG_2024.JPG",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: "img/IMG_2026.PNG",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational.",
      img: "img/IMG_2025.JPG",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "What is SaaS? Software as a Service Explained",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
      img: "img/IMG_1912.jpg",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
      img: "img/IMG_2346.JPG",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: "img/IMG_2347.JPG",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
      img: "img/IMG_2348.JPG",
      date: "Jan 4 2022",
      href: "/",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: "img/IMG_2349.JPG",
      date: "Jan 4 2022",
      href: "/",
    },
  ];
  return (
    <>
      <section id="achivements">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-white text-3xl font-extrabold sm:text-4xl">
              Latest blog posts
            </h1>
            <p className="text-white">
              Blogs that are loved by the community. Updated every hour.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((items, key) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                <a className="no-underline" href={items.href}>
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <span className="block text-white text-sm">
                      {items.date}
                    </span>
                    <h3 className="text-lg text-white duration-150 group-hover:text-black font-semibold">
                      {items.title}
                    </h3>
                    <p className="text-white text-sm duration-150 group-hover:text-black">
                      {items.desc}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Achivements;
