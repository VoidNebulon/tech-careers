export interface Resource {
  label: string;
  url?: string;
}

export interface CareerTab {
  id: string; // e.g., 'tab-01'
  label: string; // e.g., 'Skills'
  content: (string | Resource)[]; // Strings for simple lists, Resource objects for links
  type: "list" | "links";
}

export interface CareerStep {
  title: string;
  description: string;
  icon: string; // path to image
  roles: string[];
  tabs: CareerTab[];
}

export const careerData: CareerStep[] = [
  {
    title: "Planning & Requirements",
    description:
      "This phase typically includes creating a requirement specification document for the software development and defining the essential features and functionalities specified by several stakeholders.",
    icon: "https://pgc.edu/wp-content/uploads/2024/09/search-icon.png",
    roles: ["Business Analyst", "Product Owner", "Project Manager"],
    tabs: [
      {
        id: "tab-01",
        label: "Skills",
        type: "list",
        content: [
          "Organizational Skills",
          "Communication Skills",
          "Problem-Solving",
          "Analytical Thinking",
          "Project Management Frameworks",
          "Technical Documentation",
        ],
      },
      {
        id: "tab-02",
        label: "Degrees",
        type: "list",
        content: [
          "Computer Science - BS (CS)",
          "Business Administration – BBA",
          "Information Technology - BS (IT)",
          "Business & Information Technology - BBIT",
        ],
      },
      {
        id: "tab-03",
        label: "Tools",
        type: "list",
        content: [
          "MS Office",
          "MS Project",
          "Jira",
          "Confluence",
          "Slack",
          "Monday.com",
          "Trello",
        ],
      },
      {
        id: "tab-04",
        label: "Free Resources",
        type: "links",
        content: [
          {
            label: "Critical Thinking & Problem Solving",
            url: "https://www.edx.org/learn/critical-thinking-skills/rochester-institute-of-technology-critical-thinking-problem-solving?index=product&objectID=course-772eb266-036a-4248-ac03-c3c0bac56c70&webview=false&campaign=Critical+Thinking+%26+Problem+Solving&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fcritical-thinking-skills",
          },
          {
            label: "Slack! Getting Started Guide",
            url: "https://www.udemy.com/course/slack-getting-started-guide/",
          },
          {
            label: "Jira (YouTube)",
            url: "https://www.youtube.com/watch?v=ma7KTNK9ntg",
          },
          {
            label: "Confluence (YouTube)",
            url: "https://www.youtube.com/watch?v=sjh1yIOf35o",
          },
          { label: "Monday.com", url: "https://monday.com/" },
          {
            label: "Trello (YouTube)",
            url: "https://www.youtube.com/watch?v=khdE1CVk33M",
          },
          {
            label: "College Wallah (YouTube)",
            url: "https://www.youtube.com/watch?si=81pMwm4hzhS_A06Y&v=rCFQukS8Org&feature=youtu.be",
          },
          {
            label: "Simplilearn (YouTube)",
            url: "https://www.youtube.com/watch?v=UBVzucVpG7k",
          },
          {
            label: "Great Learning (YouTube)",
            url: "https://www.youtube.com/watch?v=ravLfnYuqmA",
          },
        ],
      },
      {
        id: "tab-05",
        label: "Paid Resources",
        type: "links",
        content: [
          {
            label: "Agile Software Development (Coursera)",
            url: "https://www.coursera.org/learn/agile-software-development",
          },
          {
            label:
              "The Complete Product Management Fundamentals Course (Udemy)",
            url: "https://www.udemy.com/course/product-management-training/?couponCode=24T4MT92724B",
          },
          {
            label: "Digital Product Management: Modern Fundamentals (Coursera)",
            url: "https://www.coursera.org/learn/uva-darden-digital-product-management",
          },
          {
            label:
              "Project Management Principles and Practices Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/project-management",
          },
        ],
      },
    ],
  },
  {
    title: "Software Design (UI/UX)",
    description:
      "While designing the software, the requirements are translated into the system's architecture and design, outlining how the software will be structured and how its components will interact.",
    icon: "https://pgc.edu/wp-content/uploads/2024/09/paint-icon.png",
    roles: ["UI Designer", "UX Designer", "Graphic Designer"],
    tabs: [
      {
        id: "tab-11",
        label: "Skills",
        type: "list",
        content: [
          "User-Centered Design",
          "Proficiency in Design Tools",
          "Creativity",
          "Attention to Detail",
        ],
      },
      {
        id: "tab-12",
        label: "Degrees",
        type: "list",
        content: [
          "Bachelor of Multimedia Arts Degree (NCA)",
          "Product Design (4 yrs Degree)",
          "Visual Communication Design",
          "BS Computer Sciences (CS)",
          "BS Information Technology (IT)",
        ],
      },
      {
        id: "tab-13",
        label: "Tools",
        type: "list",
        content: [
          "Figma",
          "Adobe Photoshop",
          "Adobe XD",
          "Adobe Illustrator",
          "Sketch",
          "Canva",
          "Invision",
        ],
      },
      {
        id: "tab-14",
        label: "Free Resources",
        type: "links",
        content: [
          {
            label: "Fundamentals of Figma",
            url: "https://www.edx.org/learn/design/edx-try-it-fundamentals-of-figma?index=product&queryID=2a650800e991fa98fb4f2d212e508d39&position=1&results_level=first-level-results&term=Figma&objectID=course-c87ede93-a32e-42f4-a380-7852d2ce547b&campaign=Try+It%3A+Fundamentals+of+Figma&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch",
          },
          {
            label: "Figma Design Basics and Features",
            url: "https://alison.com/course/figma-design-basics-and-features",
          },
          {
            label: "Introduction to Illustrator",
            url: "https://www.edx.org/learn/design/lci-education-introduction-to-illustrator?index=product&queryID=7ee3b0caf75acdf6895fe0d38c961e3e&position=1&results_level=first-level-results&term=adobe&objectID=course-e4ef6680-1128-4c26-95a0-56826921a20b&campaign=Introduction+to+Illustrator&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch",
          },
          {
            label: "UI/UX Design using Adobe XD",
            url: "https://alison.com/course/ui-ux-design-using-adobe-xd",
          },
          {
            label: "Figma (YouTube)",
            url: "https://www.youtube.com/watch?v=MJTjEeGEVWQ",
          },
          {
            label: "Adobe Photoshop (YouTube)",
            url: "https://www.youtube.com/watch?v=ZByhs9mDtDg&list=PLW-zSkCnZ-gA5Jn6gZtUa6-aG0OoRZyb6",
          },
          {
            label: "Adobe XD (YouTube)",
            url: "https://www.youtube.com/watch?v=hRTi1Elkz3U&list=PLuRPummNMvIN43IBo1EltezV2ngqYz5T6",
          },
          {
            label: "Adobe Illustrator (YouTube)",
            url: "https://www.youtube.com/watch?v=vd1vRpoWC3M&list=PLW-zSkCnZ-gCq0DjkzY-YapCBEk0lA6lR",
          },
          {
            label: "Canva (YouTube)",
            url: "https://www.youtube.com/watch?v=CB3MS-OjSc0&list=PLfAJSU55p-wtp0BgI7hZgyDIbeEshcyfv",
          },
          {
            label: "Invision (YouTube)",
            url: "https://www.youtube.com/watch?v=v10t2azNaFs",
          },
          {
            label: "Flux (YouTube)",
            url: "https://www.youtube.com/c/FluxWithRanSegall",
          },
          {
            label: "CharliMarieTV (YouTube)",
            url: "https://www.youtube.com/c/CharliMarieTV",
          },
          {
            label: "Freecodecamp.org (YouTube)",
            url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
          },
          {
            label: "Lets Uncover (YouTube)",
            url: "https://www.youtube.com/watch?v=e_dv7GBHka8",
          },
        ],
      },
      {
        id: "tab-15",
        label: "Paid Resources",
        type: "links",
        content: [
          {
            label: "Google UX Design Professional Certificate (Coursera)",
            url: "https://www.coursera.org/professional-certificates/google-ux-design",
          },
          {
            label: "Canva Design School",
            url: "https://www.canva.com/designschool/courses/",
          },
        ],
      },
    ],
  },
  {
    title: "Software Development",
    description:
      "The actual coding begins in this phase. The software developers write the code turning the design into a functioning product or software system.",
    icon: "https://pgc.edu/wp-content/uploads/2024/09/code-snippet-icon.png",
    roles: [
      "Software / Full Stack Developer",
      "Software Architect",
      "Front-End Developer",
      "Back-End Developer",
    ],
    tabs: [
      {
        id: "tab-21",
        label: "Skills",
        type: "list",
        content: [
          "Proficiency in Coding Languages",
          "Analytical Thinking",
          "Algorithm Design",
          "SDLC Frameworks",
          "Collaboration",
        ],
      },
      {
        id: "tab-22",
        label: "Degrees",
        type: "list",
        content: [
          "Computer Science - BS (CS)",
          "Software Engineering - BS (SE)",
          "Computer Engineering - BS (CE)",
        ],
      },
      {
        id: "tab-23",
        label: "Tools",
        type: "list",
        content: [
          "Programming Languages (HTML, JavaScript, PHP, .NET, Java, C#, etc.)",
          "Git",
          "Jira",
          "Web Development / E-commerce",
          "WordPress, Shopify, etc.",
          "Postman",
        ],
      },
      {
        id: "tab-24",
        label: "Free Resources",
        type: "links",
        content: [
          {
            label: "Introduction to HTML and CSS",
            url: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
          },
          {
            label: "Intro to JavaScript",
            url: "https://www.udacity.com/course/intro-to-javascript--ud803",
          },
          { label: "Learn php", url: "https://www.learn-php.org" },
          {
            label: "C# Fundamentals for Absolute Beginners",
            url: "https://learn.microsoft.com/en-us/shows/csharp-fundamentals-for-absolute-beginners/",
          },
          {
            label: "Critical Thinking & Problem Solving",
            url: "https://www.edx.org/learn/critical-thinking-skills/rochester-institute-of-technology-critical-thinking-problem-solving?index=product&objectID=course-772eb266-036a-4248-ac03-c3c0bac56c70&webview=false&campaign=Critical+Thinking+%26+Problem+Solving&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fcritical-thinking-skills",
          },
          {
            label: "Algorithms",
            url: "https://www.coursera.org/learn/algorithms-part1",
          },
          {
            label: "Software, Programming, and Database Basics",
            url: "https://www.edx.org/learn/software-development/ibm-software-programming-and-database-basics?index=product&objectID=course-ebc77e49-de08-453f-bc83-dbc966847c4b&webview=false&campaign=Software%2C+Programming%2C+and+Database+Basics&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fsoftware-development-life-cycle",
          },
          {
            label: "Git and GitHub Version Control",
            url: "https://alison.com/course/git-github-and-version-control?utm_source=google&utm_medium=cpc&utm_campaign=Performance-Max_Tier-5_Alison-Profiles&gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ijVlATm-UsgCpVbpIYDckkpHfoEb2WuY5gG28bQis3XBsWAmzE00NFhoC8mIQAvD_BwE",
          },
          {
            label: "Shopify Course For Beginners",
            url: "https://www.udemy.com/course/shopify-course-for-beginners-creating-a-store-from-scratch/",
          },
          {
            label: "Shopify Course",
            url: "https://www.wscubetech.com/resources/shopify/free-course",
          },
          {
            label: "Introduction to Postman API",
            url: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-postman-api",
          },
          {
            label: "Postman API Fundamentals",
            url: "https://academy.postman.com/postman-api-fundamentals-student-expert-certification-1",
          },
          {
            label: "Git (YouTube)",
            url: "https://www.youtube.com/watch?v=8JJ101D3knE",
          },
          {
            label: "C# (YouTube)",
            url: "https://www.youtube.com/watch?v=gfkTfcpWqAY",
          },
          {
            label: "JavaScript (YouTube)",
            url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          },
          {
            label: "HTML (YouTube)",
            url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
          },
          {
            label: "freeCodeCamp.org (YouTube)",
            url: "https://www.youtube.com/c/Freecodecamp",
          },
          {
            label: "Programming with Mosh (YouTube)",
            url: "https://www.youtube.com/c/programmingwithmosh",
          },
          {
            label: "Traversy Media (YouTube)",
            url: "https://www.youtube.com/c/TraversyMedia",
          },
          {
            label: "Gatesmashers (YouTube)",
            url: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
          },
          {
            label: "The AI Advantage (YouTube)",
            url: "https://www.youtube.com/@aiadvantage",
          },
          {
            label: "Kryll.io (YouTube)",
            url: "https://www.youtube.com/c/Kryllio",
          },
        ],
      },
      {
        id: "tab-25",
        label: "Paid Resources",
        type: "links",
        content: [
          {
            label: "CS50’s Introduction to Computer Science (edX)",
            url: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science",
          },
          {
            label: "Python for Everybody (Coursera)",
            url: "https://www.coursera.org/specializations/python",
          },
          {
            label: "Database Management Essentials (Coursera)",
            url: "https://www.coursera.org/learn/database-management",
          },
          {
            label: "Introduction to AI (Coursera)",
            url: "https://www.coursera.org/learn/ai-for-everyone",
          },
        ],
      },
    ],
  },
  {
    title: "Networking & DevOps",
    description:
      "Networking & DevOps includes setting up and managing the infrastructure needed to support the software, including servers, networks, and deployment pipelines.",
    icon: "https://pgc.edu/wp-content/uploads/2024/09/signal-icon.png",
    roles: [
      "DevOps Engineer",
      "Network Administrator",
      "Systems Engineer",
      "Cloud Engineer",
      "Database Administrator (DBA)",
      "Information Security Engineer",
    ],
    tabs: [
      {
        id: "tab-31",
        label: "Skills",
        type: "list",
        content: [
          "Collaboration",
          "Scripting and Automation",
          "Version Controlling",
          "Infrastructure as a Code",
          "Containerization",
          "Monitoring and Logging",
          "Firewall and Security",
        ],
      },
      {
        id: "tab-32",
        label: "Degrees",
        type: "list",
        content: [
          "Computer Science - BS (CS)",
          "Software Engineering - BS (SE)",
          "Computer Engineering - BS (CE)",
          "Cyber Security - BS (CY)",
          "BS Computer Network and Security",
        ],
      },
      {
        id: "tab-33",
        label: "Tools",
        type: "list",
        content: [
          "CI/CD Pipelines (Jenkins)",
          "Git",
          "Containerization (Docker, Kubernetes)",
          "Cloud Infrastructure (AWS, Azure)",
          "VMware",
          "Windows / Linux",
        ],
      },
      {
        id: "tab-34",
        label: "Free Resources",
        type: "links",
        content: [
          {
            label: "The Big Book of Small Python Projects",
            url: "https://automatetheboringstuff.com/",
          },
          {
            label: "Introduction to AWS Cloud Computing",
            url: "https://www.udemy.com/course/introduction-to-aws-cloud-computing/?ranMID=39197&ranEAID=SAyYsTvLiGQ&ranSiteID=SAyYsTvLiGQ-RUCIH7B6x2BVGLo1hPEblg&LSNPUBID=SAyYsTvLiGQ&utm_source=aff-campaign&utm_medium=udemyads",
          },
          {
            label: "Docker Essentials",
            url: "https://www.udemy.com/course/docker-essentials/",
          },
          {
            label: "AWS Cloud Technical Essentials",
            url: "https://www.edx.org/learn/amazon-web-services-aws/amazon-web-services-aws-cloud-technical-essentials?index=product&queryID=9dfb64abf1c0c198c9c578b706001c98&position=2&results_level=first-level-results&term=AWS&objectID=course-1598bd52-f62f-4596-808d-4bc993da4929&campaign=AWS+Cloud+Technical+Essentials&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch",
          },
          {
            label: "AWS Cloud Practitioner Essentials",
            url: "https://www.edx.org/learn/amazon-web-services-aws/amazon-web-services-aws-cloud-practitioner-essentials?index=product&queryID=9dfb64abf1c0c198c9c578b706001c98&position=1&results_level=first-level-results&term=AWS&objectID=course-d2267506-5343-454c-b084-f72636db6bd1&campaign=AWS+Cloud+Practitioner+Essentials&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fsearch",
          },
          {
            label: "Microsoft Azure Fundamentals",
            url: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
          },
          {
            label: "LinuxFoundationX: Introduction to Linux",
            url: "https://www.edx.org/learn/linux/the-linux-foundation-introduction-to-linux?index=product&objectID=course-5a631d1c-cb20-4cfc-9b49-1cc9c8fc981e&webview=false&campaign=Introduction+to+Linux&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Flinux",
          },
          {
            label: "edureka! (Jenkins) (YouTube)",
            url: "https://www.youtube.com/watch?v=3a8KsB5wJDE",
          },
          {
            label: "FreeCodeCamp (AWS) (YouTube)",
            url: "https://www.youtube.com/watch?v=NhDYbskXRgc",
          },
          {
            label: "Edureka (DevOps) (YouTube)",
            url: "https://www.youtube.com/watch?v=hQcFE0RD0cQ",
          },
          {
            label: "Gatesmashers (YouTube)",
            url: "https://www.youtube.com/watch?v=JFF2vJaN0Cw",
          },
          {
            label: "Simplilearn (YouTube)",
            url: "https://www.youtube.com/watch?v=EN4fEbcFZ_E",
          },
        ],
      },
      {
        id: "tab-35",
        label: "Paid Resources",
        type: "links",
        content: [
          {
            label: "DevOps on AWS Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/aws-devops",
          },
          {
            label: "Google Cloud Fundamentals (Coursera)",
            url: "https://www.coursera.org/learn/gcp-fundamentals",
          },
        ],
      },
    ],
  },
  {
    title: "Quality Assurance (QA) & Support",
    description:
      "QA & Support phase includes the rigorous testing of the developed software to identify and fix any bugs or issues, ensuring that the product is stable, secure and meets the defined requirements.",
    icon: "https://pgc.edu/wp-content/uploads/2024/09/Shield-icon.png",
    roles: [
      "QA Engineer",
      "Test Automation Engineer",
      "Quality Assurance Analyst",
    ],
    tabs: [
      {
        id: "tab-41",
        label: "Skills",
        type: "list",
        content: [
          "Knowledge of SDLC",
          "Multiple Testing Techniques (Test Case, Regression, Smoke, Integration, Stress, API)",
          "Critical & Analytical Thinking",
          "Programming Skills",
          "Test Case Writing",
        ],
      },
      {
        id: "tab-42",
        label: "Degrees",
        type: "list",
        content: [
          "Computer Science - BS (CS)",
          "Software Engineering - BS (SE)",
          "Computer Engineering - BS (CE)",
          "Information Technology – BS (IT)",
        ],
      },
      {
        id: "tab-43",
        label: "Tools",
        type: "list",
        content: [
          "Selenium",
          "Jira / Slack",
          "Cypress",
          "Postman / Jmeter",
          "Appium",
          "Confluence",
        ],
      },
      {
        id: "tab-44",
        label: "Free Resources",
        type: "links",
        content: [
          {
            label: "Python for Everybody",
            url: "https://online.umich.edu/series/python-for-everybody/",
          },
          {
            label: "JMeter Tutorial for Beginners",
            url: "https://www.guru99.com/jmeter-tutorials.html",
          },
          {
            label: "Software Testing Training Summary",
            url: "https://www.guru99.com/software-testing.html",
          },
          {
            label: "Selenium Webdriver",
            url: "https://testautomationu.applitools.com/selenium-webdriver-tutorial-java/",
          },
          {
            label: "The basics of using Python 3",
            url: "https://www.freecodecamp.org/learn/python-for-everybody/",
          },
          {
            label: "JSON and Natural Language Processing",
            url: "https://www.edx.org/learn/natural-language-processing/the-university-of-michigan-json-and-natural-language-processing-in-postgresql?objectID=course-ea0fab0b-8b59-4daf-8af3-c1600d54e171&webview=false&campaign=JSON+and+Natural+Language+Processing+in+PostgreSQL&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fbio%2Fcharles-severance",
          },
          {
            label: "Mobile Automation with Appium in JavaScript",
            url: "https://testautomationu.applitools.com/appium-java-tutorial-1/",
          },
          {
            label: "Automation Step by Step (YouTube)",
            url: "https://www.youtube.com/watch?v=tRI5ruE7yCA",
          },
          {
            label: "JMeter - Automation Step by Step (YouTube)",
            url: "https://www.youtube.com/watch?v=SoW2pBak1_Q",
          },
          {
            label: "Confluence (YouTube)",
            url: "https://www.youtube.com/watch?v=sjh1yIOf35o",
          },
          {
            label: "Software Engineering (YouTube)",
            url: "https://www.youtube.com/watch?v=wDCZiq-d_PQ",
          },
          {
            label: "Edureka (YouTube)",
            url: "https://www.youtube.com/live/sO8eGL6SFsA",
          },
        ],
      },
      {
        id: "tab-45",
        label: "Paid Resources",
        type: "links",
        content: [
          {
            label: "Software Testing and Automation Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/software-testing-automation",
          },
        ],
      },
    ],
  },
  {
    title: "Data Management",
    description:
      "Data Management involves creating and managing databases and leveraging data for insights and decision-making.",
    icon: "https://pgc.edu/wp-content/uploads/2024/09/data-icon.png",
    roles: ["Data Engineer", "Data Analyst", "Machine Learning / AI Engineer"],
    tabs: [
      {
        id: "tab-51",
        label: "Skills",
        type: "list",
        content: [
          "Critical & Analytical Thinking",
          "Programming Skills",
          "Database Skills",
          "Statistics and Mathematical Skills",
          "Deep Learning / Neural Network",
          "Data Representation",
        ],
      },
      {
        id: "tab-52",
        label: "Degrees",
        type: "list",
        content: [
          "Artificial Intelligence - BS (AI)",
          "Data Sciences – BS (DS)",
          "Computer Science - BS (CS)",
          "Software Engineering - BS (SE)",
          "Computer Engineering - BS (CE)",
        ],
      },
      {
        id: "tab-53",
        label: "Tools",
        type: "list",
        content: [
          "Programming Languages (Python, R, JavaScript, SQL, etc.)",
          "Cloud Computing (AWS, Azure, GCP)",
          "Kafka",
          "Hadoop",
        ],
      },
      {
        id: "tab-54",
        label: "Free Resources",
        type: "links",
        content: [
          {
            label: "Python for Everybody",
            url: "https://online.umich.edu/series/python-for-everybody/",
          },
          {
            label: "The basics of using Python 3",
            url: "https://www.freecodecamp.org/learn/python-for-everybody/",
          },
          {
            label: "Database Design and Basic SQL",
            url: "https://www.edx.org/learn/databases/the-university-of-michigan-database-design-and-basic-sql-in-postgresql?objectID=course-a5bf69bb-7de0-4bc5-b46d-a5f607fe1529&webview=false&campaign=Database+Design+and+Basic+SQL+in+PostgreSQL&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fbio%2Fcharles-severance",
          },
          {
            label: "R Programming Language Introduction",
            url: "https://www.udemy.com/course/r-basics/",
          },
          {
            label: "R - for Programmers",
            url: "https://www.codecademy.com/learn/r-for-programmers",
          },
          {
            label: "Microsoft Azure Fundamentals",
            url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/",
          },
          {
            label: "Google Cloud Skills Boost",
            url: "https://www.cloudskillsboost.google/?utm_source=cgc&utm_medium=website&utm_campaign=evergreen",
          },
          {
            label: "Edureka (Azure) (YouTube)",
            url: "https://www.youtube.com/watch?app=desktop&v=GAy9ChcM4Z0",
          },
          {
            label: "Edureka ( Google Cloud Platform) (YouTube)",
            url: "https://www.youtube.com/watch?v=IUU6OR8yHCc",
          },
          {
            label: "Conduktor (Kafka) (YouTube)",
            url: "https://www.youtube.com/watch?v=q2N3gMhfjBs",
          },
          {
            label: "Simplilearn (Hadoop) (YouTube)",
            url: "https://www.youtube.com/watch?v=UcU8XiqL7MA&ab_channel=Simplilearn",
          },
          {
            label: "Freecodecamp.org (YouTube)",
            url: "https://www.youtube.com/watch?si=uvj_0xcRxW9FA2LT&v=PHsC_t0j1dU&feature=youtu.be",
          },
          {
            label: "Edureka (YouTube)",
            url: "https://www.youtube.com/watch?v=IUU6OR8yHCc",
          },
          {
            label: "Data Engineering (YouTube)",
            url: "https://www.youtube.com/watch?v=rsOSrEbK7sU",
          },
          {
            label: "Introduction to AI (Coursera)",
            url: "https://www.coursera.org/learn/ai-for-everyone",
          },
          {
            label: "The AI Advantage (YouTube)",
            url: "https://www.youtube.com/@aiadvantage",
          },
          {
            label: "Kryll.io (YouTube)",
            url: "https://www.youtube.com/c/Kryllio",
          },
        ],
      },
      {
        id: "tab-55",
        label: "Paid Resources",
        type: "links",
        content: [
          {
            label: "Applied Data Science with Python Specialization (Coursera)",
            url: "https://www.coursera.org/specializations/data-science-python",
          },
          {
            label: "Cloud Data Engineer (Coursera)",
            url: "https://www.coursera.org/professional-certificates/gcp-data-engineering",
          },
          {
            label: "Data Analyst (Udacity)",
            url: "https://www.udacity.com/course/data-analyst-nanodegree--nd002",
          },
        ],
      },
    ],
  },
];
