import ChatyBee from "./assets/images/projects/chatybee.png";
import ChatWeb from "./assets/images/projects/chatweb.png";
import Cliko from "./assets/images/projects/cliko.png";
import StopWatch from "./assets/images/projects/stopwatch.png";
import SortingVisualizer from "./assets/images/projects/sorting-visualizer.png";
import NewsApp from "./assets/images/projects/newsapp.png";
import HTMLEditor from "./assets/images/projects/htmleditor.png";
import Seasons from "./assets/images/projects/dayandnight.png";
import { IProjects } from "./interfaces";

export const featuredProjects: IProjects[] = [
  {
    title: "ChatyBee",
    description: (
      <>
        <p>
          A Flutter-Firebase real-time Chat application with multiple features
          like pinned chats, delete chats.
        </p>
        <p>
          In chat section we have options to upload files, swipe to reply to
          specific chats, show online status and add emojis.
        </p>
        <p>
          Login process is done using the phone number and contacts are synced
          from local devices and hence every contact on the platform is
          accessible to chat to.
        </p>
      </>
    ),
    techStack: ["Flutter", "Firebase", "MobX"],
    urls: [{ type: "github", link: "https://github.com/KylixMedusa/chatybee" }],
    image: ChatyBee,
  },
  {
    title: "Cliko",
    description: (
      <>
        <p>
          Worked with{" "}
          <a
            href="https://www.dipanroy.com"
            target="_blank"
            rel="noreferrer"
            className="section-link"
          >
            Dipan Roy
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/singhayushh"
            target="_blank"
            rel="noreferrer"
            className="section-link"
          >
            Ayush Singh
          </a>{" "}
          to create a URL shortening service for users and admins.
        </p>
        <p>
          {" "}
          It’s currently in beta version. It has features like API keys for
          integration with other products, custom domains, support chats for any
          problems faced and many more, with custom analytics added to each
          shortened link.
        </p>
      </>
    ),
    techStack: ["Angular", "NodeJS", "Express", "MongoDB"],
    urls: [{ type: "website", link: "https://cliko.in" }],
    image: Cliko,
  },
  {
    title: "ChatWeb",
    description: (
      <>
        <p>
          A clone of WhatsApp web mostly the frontend part with some basic
          improvements. It’s a project on the frontend animations and designs
          using React. It has MobX to manage state management all throughout the
          app for features like theme, snackbars etc.
        </p>
        <p>
          It has profile picture selections, emojis, list modals, theme toggle
          with chat wallpaper change and a lott more all custom made..
        </p>
      </>
    ),
    techStack: ["React", "MobX"],
    urls: [
      { type: "github", link: "https://github.com/Kylixmedusa/chat-web" },
      { type: "website", link: "https://chatapp-web.netlify.app" },
    ],
    image: ChatWeb,
  },
  {
    title: "TapTimer",
    description: (
      <>
        <p>
          Worked with{" "}
          <a
            href="https://www.dipanroy.com"
            target="_blank"
            rel="noreferrer"
            className="section-link"
          >
            Dipan Roy
          </a>{" "}
          and{" "}
          <a
            href="https://www.ayushmanbthakur.com/"
            target="_blank"
            rel="noreferrer"
            className="section-link"
          >
            Ayushman Bilas Thakur
          </a>{" "}
          to create a time management app.
        </p>
        <p>
          {" "}
          Here we can add the tasks we want to do and keep track of time spent
          in each of them helping in keeping track of productivity. It also has
          Jio Saavn built in with random playlists.
        </p>
      </>
    ),
    techStack: ["Angular"],
    urls: [
      { type: "github", link: "https://github.com/dipan29/Prod-Watch" },
      { type: "website", link: "https://productivity-stopwatch.netlify.app" },
    ],
    image: StopWatch,
  },
  {
    title: "Sorting Visualizer",
    description:
      "It can be used to visualize several sorting algorithms. The sorting algorithms used are Bubble Sort, Selection Sort, Merge Sort, Quick Sort, Heap Sort. There are options to change the sizes of arrays used and it uses a bar method to show rearrangement for sorting.",
    techStack: ["Angular", "Algorithms"],
    urls: [
      {
        type: "github",
        link: "https://github.com/Kylixmedusa/sorting-visualizer-app",
      },
      { type: "website", link: "https://sortingvisualizerapp.netlify.app/" },
    ],
    image: SortingVisualizer,
  },
];

export const minorProjects: IProjects[] = [
  {
    title: "News App",
    description:
      "A all round news app, with top news and filters based on tags. Also it has custom paginated feed.",
    techStack: ["Angular", "News API"],
    urls: [
      {
        type: "github",
        link: "https://github.com/Kylixmedusa/triveous-news-app",
      },
    ],
    image: NewsApp,
  },
  {
    title: "HTML Live Editor",
    description:
      "A HTML Editor with all editor features and live mode, themes, download feature etc.",
    techStack: ["React", "Ace Editor"],
    urls: [
      {
        type: "github",
        link: "https://github.com/Kylixmedusa/html-editor-live",
      },
      { type: "website", link: "https://html-editor-live.netlify.app/" },
    ],
    image: HTMLEditor,
  },
  {
    title: "Seasons",
    description:
      "A graphic and animation full website with seasons of rain, snow at day and night.",
    techStack: ["HTML", "CSS", "JS"],
    urls: [
      {
        type: "github",
        link: "https://github.com/Kylixmedusa/front1",
      },
      { type: "website", link: "https://kylixmedusa.github.io/front1" },
    ],
    image: Seasons,
  },
];

export const experiences = [
  {
    company: "TagMango",
    url: "https://tagmango.com/",
    roles: [
      {
        title: "Software Developer",
        date: "Jul 2021 - Present",
        type: "Internship",
        descriptions: [
          "Working on React Native App for developing UI, integrating REST API.",
          "Working on web using React for replicating high fidelity designs and integrating logic with backend integration with REST API.",
        ],
      },
    ],
  },
  {
    company: "Google DSC",
    url: "https://dsck.in/",
    roles: [
      {
        title: "Lead",
        date: "Aug 2020 - Nov 2020",
        type: "KGEC",
        descriptions: [
          "Lead the google developer students club in our college.",
          "Developing projects for the community.",
          "Organize events, take part in community work and facilitate development culture within our college.",
        ],
      },
      {
        title: "Web Development Lead",
        date: "Aug 2020 - Nov 2020",
        type: "KGEC",
        descriptions: [
          "Work and lead team for web projects, websites and give tutorials and seminars on web development.",
          "Organize events, take part in community work and facilitate development culture within our college.",
        ],
      },
    ],
  },
  {
    company: "MindWebs",
    url: "https://mindwebs.org/",
    roles: [
      {
        title: "Software Developer, UI/UX Designer",
        date: "Jul 2020 - Present",
        type: "Part Time",
        descriptions: [
          "Developing and ideating several products in MERN and MEAN stacks for Mindwebs as well as other companies.",
          "Working on client project on web and app(using Flutter).",
          "Participated in organizing Hacktoberfest-2020.",
        ],
      },
      {
        title: "Full Stack Developer",
        date: "May 2020 - Jul 2020",
        type: "Internship",
        descriptions: [
          "Developing several products in MEAN stacks.",
          "Participated in Hackathon to make an event management app.",
          "Made a project to integrate machine learning models into web.",
        ],
      },
    ],
  },
  {
    company: "Topleap",
    url: "https://topleap.co/",
    roles: [
      {
        title: "Software Developer",
        date: "Dec 2021 - Mar 2021",
        type: "Internship",
        descriptions: [
          "Frontend developer- Wrote code for resume building app in React framework.",
          "Built blogs sections and web pages for product demonstration.",
          "Worked on a resume building app using Flutter with referral and profile sections.",
          "Participated in deploying it in Google App Engine.",
        ],
      },
    ],
  },
  {
    company: "Triveous",
    url: "https://triveous.com/",
    roles: [
      {
        title: "Software Developer",
        date: "Aug 2020 - Nov 2020",
        type: "Internship",
        descriptions: [
          "Developing the web app in React. Integrating Firebase Cloud Messaging(FCM) to get real time notifications.",
          "Developing Chrome extensions for the same.",
          "Developing algorithms for the product( highlights, notes etc.)",
        ],
      },
    ],
  },
  {
    company: "Shutterbug",
    url: "https://shutterbugkgec.in/",
    roles: [
      {
        title: "Graphic Designer",
        date: "Nov 2019 - Present",
        type: "KGEC",
        descriptions: [
          "Designing posters on national holidays , making templates for events, logo designs, cover page designs etc.",
          "Taking part in group activities with organizing events.",
        ],
      },
    ],
  },
];

export const urlIconMap = {
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-github"
    >
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  website: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-external-link"
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
};
