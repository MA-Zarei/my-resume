import PlaceHolder from "../assets/icons/Pic Placeholder.svg"
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
import UAV_Publications from "../assets/icons/works/uav publication.webp"
import Decoryar from "../assets/icons/works/decoyar.webp"
import Webfarsi from "../assets/icons/works/webfarsi.webp"
import KarenTabanMelal from "../assets/icons/works/karentabanmelal.webp"
import Loopet from "../assets/icons/works/loopet.webp"
import My_Resume from "../assets/resume/M. Amin Zarei - Resume - EN.pdf"


type Texts = {
    Menu:{
        resume: string,
        github: string,
    };
    widgets: {
        availability: string,
    };
    home:{
        first_name: string,
        last_name: string,
        description: string,
        brief: string,
        freelance_title: string,
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
    };
    works: {
        description: string,
        sites: [string, string, string, string, string][],
    };
    notFound:{
        title: string,
        description: string,
        btnText: string,
    };
};
export const texts: Texts = {
    Menu:{
        resume: My_Resume,
        github: "https://github.com/MA-Zarei",
    },
    widgets: {
        availability: "Fully booked till further notice",
    },
    home:{
        first_name: "m .amin",
        last_name: "zarei",
        description: "web designer & front-end developer",
        brief: "I'm MohammadAmin Zarei - a web designer and fron-end developer. I love crafting interacive, fast and optimized experiences using WordPress and React.",
        freelance_title: "freelancer availability",
    },
    about: {
        description: "Hi, I’m Mohammadamin Zarei - a front-end implementer with a background in civil and railway engineering. My path into web development wasn’t traditional: I began my career in engineering, but my lifelong interest in computers and automation gradually pulled me toward technology. What started with curiosity about how games worked turned into writing C++ in high school, C# at university, and eventually Python to automate repetitive work.\nOver time, I realized that the web - especially front-end design - is where my analytical mind and visual intuition meet. I’ve been building WordPress websites for 4+ years and enjoy designing interfaces that feel purposeful, intuitive, and clear.\nI may not be a full-stack developer by training, but I’ve learned how to build practical, people-friendly solutions. Whether I’m working with WordPress, custom code, or modern frameworks like React, I try to balance structure and simplicity - creating websites that are not only usable but feel good to use.",
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
            email: ["zarei[dot]mohammad[dot]am[at]gmail.com", "zarei.mohammad.am@gmail.com"],
        },
    },
    works: {
        description: "This section features a curated selection of projects I’ve designed and implemented born from real needs, shaped with user experience and aesthetics in mind. Instead of describing them in words, I’ve chosen to let each project speak for itself just like moonlight, seen only when it touches the ground.",
        sites: [
            [UAV_Publications, 'UAV publications', 'wordpress implementer', 'completed', 'https://uavpub.com/'],
            [ArioTV, 'ario TV - streaming platform', 'wordpress implementer', 'completed', 'https://ariotv.com/'],
            [Decoryar, 'Decroyar - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://decoryar.com/'],
            [OmajShop, 'omaj food inc. - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://omajshop.com'],
            [Webfarsi, 'Web Farsi', 'wordpress implementer', 'completed', 'http://pwgp.ir/'],
            [NamatabShop, 'namatab co. - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://namatabshop.ir'],
            [KarenTabanMelal, 'Karen Taban Melal', 'UI design | wordpress implementer', 'completed', 'https://karentaban.com/'],
            [CoverZhilo, 'cover zhilo® - e-commerce website', 'Administrator | UI design | wordpress implementer', 'under redesign', 'https://coverzhilo.ir'],
            [Zhilo, 'zhilo® - e-commerce website', 'Administrator | UI design | wordpress implementer', 'initial version launched', 'http://zhilo.co'],
            [Loopet, 'Loopet - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://loo.pet/'],
            [PlaceHolder, 'personal portfolio website', 'UI designer | front-end developer (react)', 'live', '#'],
        ]
    },
    notFound:{
        title: "page not\nfound",
        description: "The page you are looking for doesn't exist or has been moved",
        btnText: "go home",
    },
};
