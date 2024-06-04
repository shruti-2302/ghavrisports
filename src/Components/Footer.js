import { Link } from "react-scroll";

export default () => {

    const footerNavs = [
        {
            label: "Important link",
            items: [
                {
                    href: '/',
                    name: 'Home',
                    target: "home"
                },
                {
                    href: '/about',
                    name: 'About',
                    target: "about"
                },
                {
                    href: '/gallery',
                    name: 'Gallery', target: "gallery"
                },
                {
                    href: '/achievements',
                    name: 'Achivements', target: "achivements"
                },
                {
                    href: '/players',
                    name: 'Players', target: "players"
                },
                {
                    href: '/contact',
                    name: 'Contact', target: "contact"
                }
            ],
        }, {
            label: "Address",
            items: [
                {
                    name: 'address'
                },
                {
                    name: 'contact number'
                },
                {
                    name: 'email'
                },
                {
                    href: '/admin',
                    name: 'Admin',

                }

            ],
        }
    ]
    const handleClick = (targetId, href) => {
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                let offsetTop = 0;

                let currentElement = element;
                // Traverse the offsetParent chain to calculate accurate offsetTop
                while (currentElement) {
                    offsetTop += currentElement.offsetTop;
                    currentElement = currentElement.offsetParent;
                }
                window.scrollTo({
                    behavior: 'smooth',
                    top: offsetTop,
                });
            }
        } else if (href) {
            window.location.href = href;
        }
    };

    return (
        <footer className="pt-10 ">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="justify-between items-center gap-12 md:flex">
                    <div className="flex-1 max-w-lg">
                        <h3 className="text-white text-2xl font-bold">
                            Get our beautiful newsletter straight to your inbox.
                        </h3>
                    </div>
                    <div className="flex-1 mt-6 md:mt-0">

                    </div>
                </div>
                <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4 text-gray-300"
                                key={idx}
                            >
                                <h4 className="text-gray-200 font-semibold sm:pb-2">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={el.href}
                                                className="duration-150 hover:text-blue-400 text-white no-underline"
                                                onClick={() => handleClick(el.target, el.href)}
                                            >
                                                {el.name}
                                            </Link>

                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex">
                    <p className="text-gray-300">Copyright ©2024 Design by Rishus Infotech. All rights reserved
                    </p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                        <a href="javascript:void()">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 48 48"><g clip-path="url(#a)"><path fill="currentColor" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>

                        <a href="https://www.linkedin.com/" target="_blank">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.19 20.45H3.56V9h3.63v11.45zm-1.82-13a2.11 2.11 0 1 1 0-4.22 2.11 2.11 0 0 1 0 4.22zm14.09 13H17v-5.56c0-3.32-4-3.07-4 0v5.56h-3.63V9h3.63v1.69c1.69-3.12 8.18-3.37 8.18 2.94v6.82z" />
                            </svg>
                        </a>
                        <a href="javascript:void()">
                            <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_63)"><path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" /><path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" /></g><defs><clipPath id="clip0_17_63"><path d="M0 0h48v48H0z" /></clipPath></defs></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}