import React from 'react'

const Team = () => {

    const team = [
        {
            avatar: "img/harsh (1).jpeg",
            name: "Harsh Ghavri",
            title: "Head Coach",
            desc: "IDCA Certified Umpires and Scorer",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
         avatar: "img/coach 1.jpeg",
            name: "Aman Sharma",
            title: "Cricket Coordinator",
            desc: "certified fitness trainer who specializes in cricket-specific fitness programs",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        
        {
           avatar: "img/coach 2.jpeg",
            name: "Prashant Pathroad",
            title: "Batting Coach",
            desc: "certified cricket coach who has trained numerous aspiring cricketers",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        // {
        //     avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        //     name: "Lysa sandiago",
        //     title: "Head of designers",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        //     name: "Daniel martin",
        //     title: "Product designer",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        // },
        // {
        //     avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        //     name: "Vicky tanson",
        //     title: "Product manager",
        //     desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
        //     linkedin: "javascript:void(0)",
        //     twitter: "javascript:void(0)",
        // },
    ]

  return (
    <>
    <section className="py-14" >
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-white mt-3">
                    we have a dedicated support staff that includes physiotherapists, managers, and administrative personnel, all working together to ensure the smooth functioning of our academy and the well-being of our players.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                             className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-white font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-white mt-2">{item.desc}</p>
                                       
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Team