// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Kashish Singh",
  firstName: "Kashish",
  role: "Computer Science student",
  headline: "I build web apps and solve problems with code.",
  summary:
    "Computer Science student with 220+ DSA problems solved and hands-on full-stack web development experience. I work in Java, JavaScript and Python, and I enjoy building efficient, scalable solutions while sharpening my problem-solving every day.",
  email: "kashishsingh802103@gmail.com",
  phone: "+91-9153808293",
  resume: "./Kashish_Singh_CV.pdf",
  photo: "./profile.jpg", // replace public/profile.jpg to change your photo
  // TODO: replace these with your real profile URLs
  links: {
    GitHub: "https://github.com/your-Kashishsingh05",
    LinkedIn: "https://www.linkedin.com/in/kashish-singh-7a7373282/",
    LeetCode: "https://leetcode.com/u/kashishsingh05/",
    github: "https://github.com/Kashishsingh05/Portfolio",
    live: "https://kashishsingh05.github.io/Portfolio/",
  },
};

export const codeCard = [
  'public class Kashish {',
  '  String degree = "B.Tech CSE";',
  '  String college = "Galgotias University";',
  '  int graduation = 2027;',
  '  String[] stack = {"Java", "React", "Node.js"};',
  '  int dsaSolved = 220;',
  '}',
];

export const education = [
  { school: "Galgotias University", detail: "B.Tech in Computer Science and Engineering", score: "CGPA 8.1/10", period: "Expected June 2027" },
  { school: "M P High School", detail: "Class XII", score: "79%", period: "2023" },
  { school: "D B Public School", detail: "Class X", score: "77.6%", period: "2021" },
];

export const skills = {
  Languages: ["Java", "Python", "JavaScript"],
  "Web technologies": ["HTML", "CSS", "React", "Node.js"],
  Databases: ["MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code"],
  "CS fundamentals": ["Data Structures & Algorithms", "OOPs", "DBMS", "Operating Systems", "Computer Networks"],
};

export const projects = [
  {
    title: "Smart Campus Complaint Management System",
    category: "Full-stack",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    points: [
      "Web platform where users file complaints and administrators manage them.",
      "Complaint tracking and status updates.",
      "Responsive interface connected to a MySQL database.",
    ],
    github: "", // add repo link
    live: "",   // add live demo link
  },
  {
    title: "Responsive Portfolio Website",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    points: [
      "Mobile-first, cross-browser layout with smooth navigation.",
      "Project filtering and a contact form with validation.",
      "Performance work: lazy loading and accessible, reduced-motion-friendly animation.",
    ],
    github: "https://github.com/Kashishsingh05/Portfolio",
    live: "https://kashishsingh05.github.io/Portfolio/",
  },
];

export const achievements = [
  "Solved 350+ DSA problems across LeetCode, GeeksforGeeks and CodeChef.",
  "Participated in coding contests and technical events.",
  "Built multiple academic and personal projects using Java, Python and web technologies.",
];

export const certifications = [
  "Java Programming Certification",
  "AWS Academy Graduate: Cloud Foundations",
  "Java Full Stack Developer Certification",

];
