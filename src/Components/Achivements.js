import React from "react";

const Achivements = () => {
  const posts = [
    {
      title: "Ghavri Academy won B grade cricket competition",
      desc: "Ghavri Academy won B grade cricket competition Indore Thanks to the half-century innings of Prasanna Panse (86), Ghawari Academy won the title of Nagendra Singh Thakur Memorial B Grade Cricket Competition.",
      img: "img/IMG_2031.JPG",
      href: "/",
    },
    {
      title: "Ghawari Sports Academy became champion",
      desc: " Ghawari Sports Academy won the title of Nagendra Singh Thakur Memorial B Grade one-day cricket competition organized by Reena Gaur Cricket Academy by defeating Mahadev Club from Dev. Ghavri Sports Academy scored 258 runs losing 9 wickets with the help of Prasanna Panse 86, Prashant Pathroad 40, Gaurav Ghavri 33 runs. Mohammad Faiz and Sandeep Chaudhary took 3-3 wickets. In reply, Dev Se Mahadev's team was reduced to 218 runs. Mohammad Faiz scored 50 runs. Harsh Ghavri took 3 wickets and Prasanna Panse was the man of the match Ankit Bess, Aditya Pawaiya have to sell 2-2 villa plots",
      img: "img/IMG_09.jpeg",
      href: "/",
    },
    {
      title: "Present with the players of the winning team",
      desc: "Courtesy Organizer in the B grade cricket competition organized by Gaur Cricket Academy under the auspices of IDCA, there was a match between Ghavri Sports Academy and Dev Se Mahadev, in which Ghavri Sports Academy batted first, Prasanna Panse 86 runs, Prashant Pathrod 40 runs, Gaurav Ghavri 33 runs. With the help of 258 runs were scored after losing nine wickets. There itself",
      img: "img/IMG_2026.PNG",
      href: "/",
    },
    {
      title: "Ghavri Sports Academy scored 258 runs",
      desc: "Ghavri Sports Academy, batting first, scored 258 runs by losing 9 wickets with the help of Prasanna Panse 86, Prashant Pathrod 40, Gaurav Ghavri 33 runs. Mohammad Faiz and Sandeep Chaudhary took 3-3 wickets. In reply, Dev Se Mahadev's team was reduced to 218 runs. Mohammad Faiz scored 50 runs. On behalf of Ghavri Sports Academy, Harsh Ghavri took 3 wickets, Ankit Bess and Aditya Pavaiya took 2-2 wickets. Prasanna Panse was the man of the match.",
      img: "img/IMG_2025.JPG",
      href: "/",
    },
    {
      title: "The first trophy is of the season 2023-24",
      desc: "Ghavri Sports Academy winnins first trophy of the season ",
      img: "img/IMG_1912.jpg",
      href: "/",
    },
    {
      title: "Top performrs of the match",
      desc: "In the match between LNCC VS GHAVRI SPORTS, GSA win the match and Mr.Prasanna Panse score 115 runs to 76 balls and Mr.Aditya Pawaiya took 6 wicket by giving 20 runs in the 8th over",
      img: "img/IMG_2346.JPG",
      href: "/",
    },
    {
      title: "IDCA B Grade elite local one day Tournament",
      desc: "Mr. Prashant Pathroad was the top performer of the match, he played 59 balls and scored 90 runs, this blockbuster inning consist 13 fours and 2 sixes.",
      img: "img/IMG_2347.JPG",
      href: "/",
    },
    {
      title: "IDCA B elite late rajaram ji mishra one day trophy",
      desc: "Mr. Harsh Ghavri was the top performer of the match, he clinched 5 wickets in just 8 overs and consided only 23 runs.",
      img: "img/IMG_2348.JPG",
      href: "/",
    },
    {
      title: "Late yuvraj singh thakur one day trophy NVCC VS ICON Academy",
      desc: "Mr.Ajay Ghavri was player of the match,he was the player of the match, he scored 20 runs and clinched 5 wickets in just 9 overs including 2 maiden overs",
      img: "img/IMG_9572.JPEG",
      href: "/",
    },
  ];
  return (
    <>
      <section id="achivements">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-white text-3xl font-extrabold sm:text-4xl">
              Our Achivements
            </h1>
            <p className="text-white">
              Achivements is the silent victory of persistent effort and unwavering dedication
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
