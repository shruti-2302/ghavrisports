export default () => {

  const team = [
      {
          avatar: "img/harsh (1).jpeg",
          name: "Martiana dialan",
          title: "Product designer",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
          linkedin: "javascript:void(0)",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
          avatar: "img/prashant.jpeg",
          name: "Micheal colorand",
          title: "Software engineer",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
          linkedin: "javascript:void(0)",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
         avatar: "img/anshuman.jpeg",
          name: "Daniel martin",
          title: "Product designer",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
          linkedin: "javascript:void(0)",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
      {
         avatar: "img/aman.jpeg",
          name: "Vicky tanson",
          title: "Product manager",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
          linkedin: "javascript:void(0)",
          twitter: "javascript:void(0)",
          github: "javascript:void(0)"
      },
  ]

  return (
      <section className="py-14" id="players">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              <div className="max-w-xl">
                  <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                      Meet our talent players
                  </h3>
                  <p className="text-white mt-3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                  </p>
              </div>
              <div className="mt-12">
                  <ul className="grid gap-8 lg:grid-cols-2">
                      {
                          team.map((item, idx) => (
                              <li key={idx} className="gap-8 sm:flex">
                                  <div className="w-full h-60">
                                      <img
                                          src={item.avatar}
                                          className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                          alt=""
                                      />
                                  </div>
                                  <div className="mt-4 sm:mt-0">
                                      <h4 className="text-lg text-white font-semibold">{item.name}</h4>
                                      <p className="text-white">{item.title}</p>
                                      <p className="text-white mt-2">{item.desc}</p>
                                    
                                  </div>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
      </section>
  )
}