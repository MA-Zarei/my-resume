import HTMLIcon from "../assets/icons/html icon.svg";
import CSSIcon from "../assets/icons/css icon.svg";
import JavaScriptIcon from "../assets/icons/javascript icon.svg";
import ReactJs from "../assets/icons/react icon.svg"
import WordPress from "../assets/icons/wordpress icon.svg"
import Git from "../assets/icons/git icon.svg"
import OmajShop from "../assets/icons/works/omajshop.png"
import NamatabShop from "../assets/icons/works/namatabshop.webp"
import CoverZhilo from "../assets/icons/works/coverzhilo.svg"
import Zhilo from "../assets/icons/works/Zhilo.png"
import ArioTV from "../assets/icons/works/ariotv.webp"


type Texts = {
    widgets: {
        availability: string,
    };
    about: {
        description: string,
        toolkits: [string, string][],
        publications: {
            description: string,
            papers: [string, string],
        },
        contact: {
            description: string,
            email: [string, string],
        },
    }
    works: {
        description: string,
        sites: [string, string, string, string, string][],
    }
};
export const texts: Texts = {
    widgets: {
        availability: "Fully booked till further notice",
    },
    about: {
        description: "Hi, I’m Mohammadamin Zarei — a front-end developer, web designer, and a lifelong tech enthusiast. I’ve always been fascinated by how computers “understand” us — especially when they beat us in games!\nIn high school, I coded in C++ and joined university-level programming contests. Later, I learned C# in my engineering studies, but technology remained my true passion.\nI built my first corporate website in 2017, and that opened the door to a new world. Today, I work with HTML, CSS, WordPress, and React.js. What I love most about web design is how it connects people to technology — even those with zero technical background. It’s a digital handshake between users and systems, whether it's for shopping, reading, or exploring services.\nI'm also passionate about automation. Learning Python allowed me to write simple scripts to streamline repetitive tasks. They weren't overly complex, but they gave me a clear edge in most of my work environments.\nOutside of code, I’m still that curious person — someone who wants to understand how things actually work.",
        toolkits: [
            ["HTML", HTMLIcon],
            ["CSS", CSSIcon],
            ["JavaScript", JavaScriptIcon],
            ["React", ReactJs],
            ["WordPress", WordPress],
            ["Git", Git],
        ],
        publications: {
            description: "Although my professional focus has shifted to web development, I hold a master's degree in Railway Engineering and have contributed to two international academic papers:",
            papers: [
                `M. A. Zarei et al., "Improvment of ballast behavior by inclusion of tire-derived aggregates with optimum size", Construction and Building Materials, vol. 417, p. 135299, 2024.`,
                `M. A. Zarei et al., "Studying the application of crumb rubber in ballast railway tracks", The 8th International Conference on Recent Advances in Railway Engineering (ICRARE 2023), Tehran, Iran, 2023.`,
            ]
        },
        contact: {
            description: "The best way to reach me right now is via email. Whether you have a project in mind or just want to connect, feel free to get in touch:",
            email: ["zarei[dot]mohammad[dot]am[at]gmail[dot]com", "zarei.mohammad.am@gmail.com"],
        },
    },
    works: {
        description: "This section features a curated selection of projects I’ve designed and implemented—born from real needs, shaped with user experience and aesthetics in mind. Instead of describing them in words, I’ve chosen to let each project speak for itself—just like moonlight, seen only when it touches the ground.",
        sites: [
            [ArioTV, 'ario TV - streaming platform', 'wordpress implementer', 'completed', 'https://omajshop.com'],
            [OmajShop, 'omaj food inc. - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://omajshop.com'],
            [NamatabShop, 'namatab co. - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://namatabshop.ir'],
            [CoverZhilo, 'cover zhilo® - e-commerce website', 'Administrator | UI design | wordpress implementer', 'under redesign', 'https://coverzhilo.ir'],
            [Zhilo, 'zhilo® - e-commerce website', 'Administrator | UI design | wordpress implementer', 'initial version launched', 'http://zhilo.co'],
        ]
    }
};
