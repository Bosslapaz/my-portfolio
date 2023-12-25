const logotext = "MARK";
const meta = {
    title: "Rey Mark's Portfolio",
    description: "I’m Rey Mark Lapaz, a programmer both Front-End and Back-End working from Pagadian City, Philippines.",
};

const introdata = {
    title: "I’m Rey Mark Lapaz",
    animated: {
        first: "I love coding and scripting",
        second: "I make softwares and systems",
        third: "I develop mobile apps and web apps",
    },
    description: "As a versatile programmer proficient in both [Language 1] and [Language 2], I leverage my deep understanding of [specific features or frameworks] in [Language 1] and [specific skills or libraries] in [Language 2] to develop scalable, efficient, and innovative solutions that meet and exceed project requirements, demonstrating a dynamic and adaptable approach to software development.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "About my self",
    aboutme: "As a skilled and versatile programmer, I excel in leveraging the power of multiple programming languages to create robust and efficient solutions. My expertise spans across [Language 1], where I demonstrate a deep understanding of [specific features or frameworks] to build scalable and maintainable applications. Additionally, my proficiency extends to [Language 2], where I employ [specific skills or libraries] to develop innovative solutions that meet and exceed project requirements. With a passion for continuous learning and a commitment to staying updated on the latest industry trends, I bring a dynamic and adaptable approach to software development, ensuring the delivery of high-quality code and driving the success of diverse projects.",
};
const worktimeline = [{
        jobtitle: "PHP Inventory and POS Management",
        where: "Pagadian City",
        date: "October 10-27, 2023",
    },
    {
        jobtitle: "Online Dental Appointment",
        where: "Pagadian City",
        date: "November 7-19, 2023",
    },
    {
        jobtitle: "Baddict Badminton POS",
        where: "Pagadian City",
        date: "November 17- 30, 2023",
    },
    {
        jobtitle: "Monitoring System(Web App)",
        where: "Pagadian City",
        date: "September 8- 29, 2023",
    },
    {
        jobtitle: "Monitoring System(Mobile App)",
        where: "Pagadian City",
        date: "December 8, 2023",
    },
];

const skills = [{
        name: "Python",
        value: 80,
    },
    {
        name: "Angular",
        value: 85,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "Mobile(Java)",
        value: 90,
    },
    {
        name: "Mobile(Kotlin)",
        value: 85,
    },
    {
        name: "PHP",
        value: 85,
    },
    {
        name: "Javascript",
        value: 95,
    },
    {
        name: "CSS",
        value: 95,
    },
    {
        name: "HTML",
        value: 100,
    },
    {
        name: "C#",
        value: 100,
    },
    {
        name: "Java",
        value: 80,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Providing comprehensive UX/UI design services, I craft visually engaging and intuitively functional digital experiences that seamlessly merge creativity with user-centric design principles, ensuring optimal usability and aesthetic appeal.",
    },
    {
        title: "Mobile Apps",
        description: "In the realm of mobile app design, I specialize in delivering seamless and visually captivating user experiences, blending intuitive navigation, sleek interface design, and optimal functionality to create engaging and user-friendly mobile applications.",
    },
    {
        title: "Web Apps",
        description: "As a dedicated web app designer, I focus on creating immersive user experiences through a combination of sleek interface design, intuitive navigation, and responsive functionality, ensuring that every web application I design delivers both visual appeal and user satisfaction.",
    },
    {
        title: "Desktop Applications",
        description: "In the realm of desktop app design, I specialize in crafting user-centric experiences characterized by intuitive interfaces, efficient workflows, and a seamless blend of functionality and aesthetics, ensuring optimal usability and satisfaction for desktop users.",
    },
    {
        title: "Scripting",
        description: "As a scripting specialist, I bring expertise in developing efficient and tailored scripts to automate processes, enhance functionality, and optimize workflows, ensuring streamlined and effective solutions for a diverse range of applications and systems.",
    },
];

const mobileMonitoringImage = require('./img/mobileMonitoring.jpg');
const dental = require('./img/dental.png');
const bbc = require('./img/bbc.png');

const dataportfolio = [{
        img: mobileMonitoringImage,
        description: "An Attendance Monitoring System in Mobile Version",
        link: "#",
    },
    {
        img: dental,
        description: "An online appointment system in dental clinic",
        link: "#",
    },
    {
        img: bbc,
        description: "Baddict Badminton Center is an inventory and POS system.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "reymark.lapaz@sccpag.edu.ph",
    YOUR_FONE: "09063468219",
    description: "As your dedicated contact professional, I am committed to fostering strong and meaningful connections, providing prompt and effective communication, and ensuring a positive and collaborative experience, aiming to be your reliable point of contact for any inquiries, support, or collaboration needs.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Bosslapaz",
    facebook: "https://www.facebook.com/reymark.lapaz.39",
    linkedin: "https://www.linkedin.com/in/rey-mark-lapaz-8ba52b284",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};