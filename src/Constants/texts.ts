// import PlaceHolder from "../assets/icons/Pic Placeholder.svg"
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
import myLogo from "/m-amin zarei logo.svg"
import Chenco from "../assets/icons/works/chenco.webp"
import Abzareno from "../assets/icons/works/abzareno.webp"
import My_Resume from "../assets/resume/M. Amin Zarei - Resume - EN.pdf"


type Texts = {
    Menu: {
        resume: string,
        github: string,
    };
    widgets: {
        availability: string,
    };
    home: {
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
            email: [string],
        },
    };
    works: {
        description: string,
        sites: [string, string, string, string, string][],
    };
    notFound: {
        title: string,
        description: string,
        btnText: string,
    };
};
export const texts: Texts = {
    Menu: {
        resume: My_Resume,
        github: "https://github.com/MA-Zarei",
    },
    widgets: {
        availability: "Fully booked till Novamber 7th",
    },
    home: {
        first_name: "m .amin",
        last_name: "zarei",
        description: "wordPress & front-end developer",
        brief: "I’m a WordPress and Front-end Developer passionate about crafting beautiful, fast, and user-focused web experiences using modern technologies like React and custom WordPress solutions.",
        freelance_title: "freelancer availability",
    },
    about: {
        description: "Hi, I’m MohammadAmin Zarei, a WordPress and Front-end Developer with a background in civil and railway engineering. My journey into web development began with curiosity about how things work, which led me from experimenting with C++ in high school, to C# at university, and later Python for automating repetitive tasks. Over time, I found that the web, especially front-end development, is where analytical thinking meets visual intuition.\nFor more than four years, I have crafted WordPress websites and interfaces that guide users effortlessly, balancing clarity, performance and purpose.\nI prefer not to explain every detail in words. The value of my work is best discovered as you interact with it. Whether using WordPress, custom code, or modern frameworks like React, I aim to create experiences that speak for themselves, intuitive and satisfying to explore.",
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
            email: ["emFyZWkubW9oYW1tYWQuYW0="],
        },
    },
    works: {
        description: "This section showcases a curated selection of WordPress and frontend projects I’ve designed and developed. Each was crafted to address real needs with clarity, performance and a focus on experience. I prefer not to describe them; like the moonlight, they reveal themselves only when you notice their reflection.",
        sites: [
            [UAV_Publications, 'UAV publications', 'wordpress implementer', 'completed', 'https://uavpub.com/'],
            [ArioTV, 'ario TV - streaming platform', 'custom wordPress developer', 'completed', 'https://ariotv.com/'],
            [Decoryar, 'Decroyar - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://decoryar.com/'],
            [OmajShop, 'omaj food inc. - e-commerce website', 'UI design | wordPress front-end developer', 'completed', 'https://omajshop.com'],
            [Webfarsi, 'Web Farsi', 'wordpress implementer', 'completed', 'http://pwgp.ir/'],
            [NamatabShop, 'namatab co. - e-commerce website', 'UI design | wordPress front-end developer', 'completed', 'https://namatabshop.ir'],
            [KarenTabanMelal, 'Karen Taban Melal', 'UI design | wordpress implementer', 'completed', 'https://karentaban.com/'],
            [CoverZhilo, 'cover zhilo® - e-commerce website', 'Administrator | UI design | wordPress front-end developer', 'under redesign', 'https://coverzhilo.ir'],
            [Zhilo, 'zhilo® - e-commerce website', 'Administrator | UI design | wordpress implementer', 'initial version launched', 'http://zhilo.co'],
            [Loopet, 'Loopet - e-commerce website', 'UI design | wordpress implementer', 'completed', 'https://loo.pet/'],
            [Chenco, 'Chenco - e-commerce website', 'wordpress implementer', 'completed', 'https://chenco.ir/'],
            [Abzareno, 'Abzareno - e-commerce website', 'wordpress implementer', 'completed', 'https://abzareno.com/'],
            [myLogo, 'personal portfolio website', 'UI designer | front-end developer, react developer', 'live', '/'],
        ]
    },
    notFound: {
        title: "page not\nfound",
        description: "The page you are looking for doesn't exist or has been moved",
        btnText: "go home",
    },
};
