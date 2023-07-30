const fs = require("fs");

const text = `import React from 'react'
import styles from "../../roadmapsAssets/topics.module.css";
import PaginationButtons from "../../roadmapComponents/PaginationButtons";
import TaskStateButtons from "../../roadmapComponents/TaskStateButtons";
import TopicVideoPlayer from "../../roadmapComponents/TopicVideoPlayer";
const nameOfFile = () => {
  const recommendedReading = [
    {
      id: 1,
      title: "frontend How does the Internet Work?",
      url: "https://cs.fyi/guide/how-does-internet-work",
    },
    {
      id: 2,
      title: "How Does the Internet Work? MDN Docs",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
    },
    {
      id: 3,
      title: "Introduction to Internet",
      url: "https://youtu.be/Dxcc6ycZ73M",
    },
    {
      id: 4,
      title: "How does the Internet work?",
      url: "https://www.youtube.com/watch?v=TNQsmPf24go",
    },
  ];
  return (
    <div className={styles.topicContainer}>
      <div className={styles.topicWrapper}>
        <h1>nameOfTopic</h1>

        <PaginationButtons
          prevTo="/roadmaps/frontend/prevToPath"
          nextTo="/roadmaps/frontend/nextToPath"
        />
        <hr />

        <h2>nameOfFile</h2>
        <p>
        nameOfTopic is currently under development. Please check back soon for updates.
        </p>

        <TopicVideoPlayer
          videoTitle=""
          videoSrc=""
        />

        <hr />

        <div className={styles.topicResources}>
          <h2>Recommended Reading</h2>
          <ul>
            {recommendedReading.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <TaskStateButtons
          topicName= "nameOfFile"
          topicId={topicId}
          roadmapName="rcfrontend"
        />

        <hr />

        <PaginationButtons
          prevTo="/roadmaps/frontend/prevToPath"
          nextTo="/roadmaps/frontend/nextToPath"
        />
      </div>
    </div>
  )
}

export default nameOfFile;`;

const frontendTopicsWithQuotesNamesArray = [
  "JavaScript020",
  "JavaScriptSyntaxBasicsConstructs021",
  "LearnDOMManipulation022",
  "LearnAjaxAndAPIs023",
  "ES6AndModularJavaScript024",
  "UnderstandTheConcepts025",
  "VersionControlSystems026",
  "VCSBasicCommand027",
  "VCSBranching028",
  "VCSMerging029",
  "RepoHostinigServiceGithub030",
  "RepoHostinigServiceGitLab031",
  "RepoHostinigServiceBitbucket032",
  "HTTPS033",
  "ContentSecurityPolicy034",
  "CORS035",
  "OWASPSecurityRisks036",
  "PackageManagersNpm037",
  "PackageManagersYarn038",
  "PackageManagersPnpm039",
  "BEMBlockElementModifier040",
  "Sass041",
  "Less042",
  "PostCSS043",
  "HigherorderFunctions044",
  "Closures045",
  "Await046",
  "EventLoopConcurrency047",
  "PerformanceOptimization048",
  "Classes049",
  "Prototypes050",
  "Inheritance051",
  "BuildToolsLintersAndFormatters052",
  "BuildToolsPrettier053",
  "BuildToolsESLint054",
  "BuildToolsTaskRunners055",
  "BuildToolsNpmScripts056",
  "ModuleBundlersVite057",
  "ModuleBundlersEsbuild058",
  "ModuleBundlersWebpack059",
  "ModuleBundlersRollup060",
  "ModuleBundlersParcel061",
  "React062",
  "Angular063",
  "Vuejs064",
  "Svelte065",
  "SolidJS066",
  "StyledComponents067",
  "CSSModules068",
  "StyledJSX069",
  "Emotion070",
  "Mantine071",
  "Tailwind072",
  "ChakraUI073",
  "MaterialUI074",
  "DaisyUI075",
  "RadixUI076",
  "Bootstrap077",
  "Bulma078",
  "TestingYourApps079",
  "Jest080",
  "Reacttestinglibrary081",
  "Cypress082",
  "Playwright083",
  "AuthenticationStrategies084",
  "WebComponents085",
  "HTMLTemplates086",
  "CustomElements087",
  "ShadowDOM088",
  "TypeCheckerTypeScript089",
  "Storage090",
  "WebSockets091",
  "PServerSentEvents092",
  "ServiceWorkers093",
  "Location094",
  "Notifications095",
  "DeviceOrientation096",
  "Payments097",
  "Credentials098",
  "PRPLPattern099",
  "RAILModel100",
  "PerformanceMetrics101",
  "UsingLighthouse102",
  "UsingDevTools103",
  "ServerSideRenderingSSR104",
  "React105",
  "Angular106",
  "Vuejs107",
  "Svelte108",
  "Remix109",
  "Nextjs110",
  "Universal111",
  "Nuxtjs112",
  "SvelteKit113",
  "StaticSiteGenerators114",
  "Eleventy115",
  "Astro116",
  "Nextjs117",
  "GatsbyJS118",
  "Vuepress119",
  "Jekyll120",
  "Hugo121",
  "Nuxtjs122",
  "Remix123",
  "SvelteKit124",
  "GraphQL125",
  "Apollo126",
  "RelayModern127",
  "MobileApplications128",
  "ReactNative129",
  "Flutter130",
  "Ionic131",
  "NativeScript132",
  "DesktopApplications133",
  "Electron134",
  "Tauri135",
  "Flutter136",
];
const frontendTopicsData = [
  {
    topicId: 20,
    topicName: "JavaScript",
    topicPath: "/roadmaps/frontend/javascript-20",
  },
  {
    topicId: 21,
    topicName: "JavaScript - Syntax & Basics Constructs",
    topicPath: "/roadmaps/frontend/javascript-syntax-and-basics-constructs-21",
  },
  {
    topicId: 22,
    topicName: "Learn DOM Manipulation",
    topicPath: "/roadmaps/frontend/learn-dom-manipulation-22",
  },
  {
    topicId: 23,
    topicName: "Learn Ajax and APIs",
    topicPath: "/roadmaps/frontend/learn-ajax-and-apis-23",
  },
  {
    topicId: 24,
    topicName: "ES6 and Modular JavaScript",
    topicPath: "/roadmaps/frontend/es6-and-modular-javascript-24",
  },
  {
    topicId: 25,
    topicName: "Understand the concepts",
    topicPath: "/roadmaps/frontend/understand-the-concepts-25",
  },
  {
    topicId: 26,
    topicName: "Version Control Systems",
    topicPath: "/roadmaps/frontend/version-control-systems-26",
  },
  {
    topicId: 27,
    topicName: "VCS - Basic Command",
    topicPath: "/roadmaps/frontend/version-control-systems-basic-command-27",
  },
  {
    topicId: 28,
    topicName: "VCS - Branching",
    topicPath: "/roadmaps/frontend/version-control-systems-branching-28",
  },
  {
    topicId: 29,
    topicName: "VCS - Merging",
    topicPath: "/roadmaps/frontend/version-control-systems-merging-29",
  },
  {
    topicId: 30,
    topicName: "Repo Hostinig Service: Github",
    topicPath: "/roadmaps/frontend/repo-hosting-service-github-30",
  },
  {
    topicId: 31,
    topicName: "Repo Hostinig Service: GitLab",
    topicPath: "/roadmaps/frontend/repo-hosting-service-gitlab-31",
  },
  {
    topicId: 32,
    topicName: "Repo Hostinig Service: Bitbucket",
    topicPath: "/roadmaps/frontend/repo-hosting-service-bitbucket-32",
  },
  {
    topicId: 33,
    topicName: "HTTPS",
    topicPath: "/roadmaps/frontend/web-security-knowledge-https-33",
  },
  {
    topicId: 34,
    topicName: "Content Security Policy",
    topicPath:
      "/roadmaps/frontend/web-security-knowledge-content-security-policy-34",
  },
  {
    topicId: 35,
    topicName: "CORS",
    topicPath: "/roadmaps/frontend/web-security-knowledge-cors-35",
  },
  {
    topicId: 36,
    topicName: "OWASP Security Risks",
    topicPath:
      "/roadmaps/frontend/web-security-knowledge-owasp-security-risks-36",
  },
  {
    topicId: 37,
    topicName: "Package Managers - npm",
    topicPath: "/roadmaps/frontend/package-managers-npm-37",
  },
  {
    topicId: 38,
    topicName: "Package Managers - yarn",
    topicPath: "/roadmaps/frontend/package-managers-yarn-38",
  },
  {
    topicId: 39,
    topicName: "Package Managers - pnpm",
    topicPath: "/roadmaps/frontend/package-managers-pnpm-39",
  },
  {
    topicId: 40,
    topicName: "BEM (Block Element Modifier)",
    topicPath: "/roadmaps/frontend/css-architecture-bem-40",
  },
  {
    topicId: 41,
    topicName: "Sass",
    topicPath: "/roadmaps/frontend/css-preprocessors-sass-41",
  },
  {
    topicId: 42,
    topicName: "Less",
    topicPath: "/roadmaps/frontend/css-preprocessors-less-42",
  },
  {
    topicId: 43,
    topicName: "PostCSS",
    topicPath: "/roadmaps/frontend/css-preprocessors-postcss-43",
  },
  {
    topicId: 44,
    topicName: "Higher-order Functions",
    topicPath:
      "/roadmaps/frontend/advance-javascript-higher-order-functions-44",
  },
  {
    topicId: 45,
    topicName: "Closures",
    topicPath: "/roadmaps/frontend/advance-javascript-closures-45",
  },
  {
    topicId: 46,
    topicName: "Promises & Async/Await",
    topicPath: "/roadmaps/frontend/advance-javascript-promises-async-await-46",
  },
  {
    topicId: 47,
    topicName: "Event Loop & Concurrency",
    topicPath:
      "/roadmaps/frontend/advance-javascript-event-loop-concurrency-47",
  },
  {
    topicId: 48,
    topicName: "Performance Optimization",
    topicPath:
      "/roadmaps/frontend/advance-javascript-performance-optimization-48",
  },
  {
    topicId: 49,
    topicName: "Classes",
    topicPath: "/roadmaps/frontend/advance-javascript-classes-49",
  },
  {
    topicId: 50,
    topicName: "Prototypes",
    topicPath: "/roadmaps/frontend/advance-javascript-prototypes-50",
  },
  {
    topicId: 51,
    topicName: "Inheritance",
    topicPath: "/roadmaps/frontend/advance-javascript-inheritance-51",
  },
  {
    topicId: 52,
    topicName: "Build Tools - Linters and Formatters",
    topicPath: "/roadmaps/frontend/build-tools-linters-and-formatters-52",
  },
  {
    topicId: 53,
    topicName: "Build Tools - Prettier",
    topicPath: "/roadmaps/frontend/build-tools-prettier-53",
  },
  {
    topicId: 54,
    topicName: "Build Tools - ESLint",
    topicPath: "/roadmaps/frontend/build-tools-eslint-54",
  },
  {
    topicId: 55,
    topicName: "Build Tools - Task Runners",
    topicPath: "/roadmaps/frontend/build-tools-task-runners-55",
  },
  {
    topicId: 56,
    topicName: "Build Tools - npm scripts",
    topicPath: "/roadmaps/frontend/build-tools-npm-scripts-56",
  },
  {
    topicId: 57,
    topicName: "Module Bundlers - Vite",
    topicPath: "/roadmaps/frontend/build-tools-module-bundlers-vite-57",
  },
  {
    topicId: 58,
    topicName: "Module Bundlers - esbuild",
    topicPath: "/roadmaps/frontend/build-tools-module-bundlers-esbuild-58",
  },

  {
    topicId: 59,
    topicName: "Module Bundlers - webpack",
    topicPath: "/roadmaps/frontend/build-tools-module-bundlers-webpack-59",
  },
  {
    topicId: 60,
    topicName: "Module Bundlers - Rollup",
    topicPath: "/roadmaps/frontend/build-tools-module-bundlers-rollup-60",
  },

  {
    topicId: 61,
    topicName: "Module Bundlers - Parcel",
    topicPath: "/roadmaps/frontend/build-tools-module-bundlers-parcel-61",
  },
  {
    topicId: 62,
    topicName: "React",
    topicPath: "/roadmaps/frontend/pick-a-framework-react-62",
  },
  {
    topicId: 63,
    topicName: "Angular",
    topicPath: "/roadmaps/frontend/pick-a-framework-angular-63",
  },
  {
    topicId: 64,
    topicName: "Vue.js",
    topicPath: "/roadmaps/frontend/pick-a-framework-vuejs-64",
  },
  {
    topicId: 65,
    topicName: "Svelte",
    topicPath: "/roadmaps/frontend/pick-a-framework-svelte-65",
  },
  {
    topicId: 66,
    topicName: "Solid JS",
    topicPath: "/roadmaps/frontend/pick-a-framework-solid-js-66",
  },
  {
    topicId: 67,
    topicName: "Styled Components",
    topicPath: "/roadmaps/frontend/modern-css-styled-components-67",
  },
  {
    topicId: 68,
    topicName: "CSS Modules",
    topicPath: "/roadmaps/frontend/modern-css-css-modules-68",
  },
  {
    topicId: 69,
    topicName: "Styled JSX",
    topicPath: "/roadmaps/frontend/modern-css-styled-jsx-69",
  },
  {
    topicId: 70,
    topicName: "Emotion",
    topicPath: "/roadmaps/frontend/modern-css-emotion-70",
  },
  {
    topicId: 71,
    topicName: "Mantine",
    topicPath: "/roadmaps/frontend/css-frameworks-mantine-71",
  },

  {
    topicId: 72,
    topicName: "Tailwind",
    topicPath: "/roadmaps/frontend/css-frameworks-tailwind-72",
  },
  {
    topicId: 73,
    topicName: "Chakra UI",
    topicPath: "/roadmaps/frontend/css-frameworks-chakra-ui-73",
  },
  {
    topicId: 74,
    topicName: "Material UI",
    topicPath: "/roadmaps/frontend/css-frameworks-material-ui-74",
  },
  {
    topicId: 75,
    topicName: "DaisyUI",
    topicPath: "/roadmaps/frontend/css-frameworks-daisyui-75",
  },
  {
    topicId: 76,
    topicName: "Radix UI",
    topicPath: "/roadmaps/frontend/css-frameworks-radix-ui-76",
  },
  {
    topicId: 77,
    topicName: "Bootstrap",
    topicPath: "/roadmaps/frontend/css-frameworks-bootstrap-77",
  },
  {
    topicId: 78,
    topicName: "Bulma",
    topicPath: "/roadmaps/frontend/css-frameworks-bulma-78",
  },
  {
    topicId: 79,
    topicName: "Testing your Apps",
    topicPath: "/roadmaps/frontend/testing-your-apps-79",
  },
  {
    topicId: 80,
    topicName: "Jest",
    topicPath: "/roadmaps/frontend/testing-your-apps-jest-80",
  },
  {
    topicId: 81,
    topicName: "react-testing-library",
    topicPath: "/roadmaps/frontend/testing-your-apps-react-testing-library-81",
  },
  {
    topicId: 82,
    topicName: "Cypress",
    topicPath: "/roadmaps/frontend/testing-your-apps-cypress-82",
  },
  {
    topicId: 83,
    topicName: "Playwright",
    topicPath: "/roadmaps/frontend/testing-your-apps-playwright-83",
  },
  {
    topicId: 84,
    topicName: "Authentication Strategies",
    topicPath: "/roadmaps/frontend/authentication-strategies-84",
  },
  {
    topicId: 85,
    topicName: "Web Components",
    topicPath: "/roadmaps/frontend/web-components-85",
  },
  {
    topicId: 86,
    topicName: "HTML Templates",
    topicPath: "/roadmaps/frontend/wc-html-templates-86",
  },
  {
    topicId: 87,
    topicName: "Custom Elements",
    topicPath: "/roadmaps/frontend/wc-custom-elements-87",
  },
  {
    topicId: 88,
    topicName: "Shadow DOM",
    topicPath: "/roadmaps/frontend/wc-shadow-dom-88",
  },
  {
    topicId: 89,
    topicName: "Type Checker - TypeScript",
    topicPath: "/roadmaps/frontend/type-checker-typescript-89",
  },
  {
    topicId: 90,
    topicName: "Storage",
    topicPath: "/roadmaps/frontend/pwa-storage-90",
  },
  {
    topicId: 91,
    topicName: "Web Sockets",
    topicPath: "/roadmaps/frontend/pwa-web-sockets-91",
  },
  {
    topicId: 92,
    topicName: "PServer Sent Events",
    topicPath: "/roadmaps/frontend/pwa-server-sent-events-92",
  },
  {
    topicId: 93,
    topicName: "Service Workers",
    topicPath: "/roadmaps/frontend/pwa-service-workers-93",
  },
  {
    topicId: 94,
    topicName: "Location",
    topicPath: "/roadmaps/frontend/pwa-location-94",
  },
  {
    topicId: 95,
    topicName: "Notifications",
    topicPath: "/roadmaps/frontend/pwa-notifications-95",
  },
  {
    topicId: 96,
    topicName: "Device Orientation",
    topicPath: "/roadmaps/frontend/pwa-device-orientation-96",
  },
  {
    topicId: 97,
    topicName: "Payments",
    topicPath: "/roadmaps/frontend/pwa-payments-97",
  },
  {
    topicId: 98,
    topicName: "Credentials",
    topicPath: "/roadmaps/frontend/pwa-credentials-98",
  },
  {
    topicId: 99,
    topicName: "PRPL Pattern",
    topicPath: "/roadmaps/frontend/prpl-pattern-99",
  },
  {
    topicId: 100,
    topicName: "RAIL Model",
    topicPath: "/roadmaps/frontend/rail-model-100",
  },
  {
    topicId: 101,
    topicName: "Performance Metrics",
    topicPath: "/roadmaps/frontend/performance-metrics-101",
  },
  {
    topicId: 102,
    topicName: "Using Lighthouse",
    topicPath: "/roadmaps/frontend/using-lighthouse-102",
  },
  {
    topicId: 103,
    topicName: "Using DevTools",
    topicPath: "/roadmaps/frontend/using-devtools-103",
  },
  {
    topicId: 104,
    topicName: "Server Side Rendering (SSR)",
    topicPath: "/roadmaps/frontend/server-side-rendering-ssr-104",
  },
  {
    topicId: 105,
    topicName: "React",
    topicPath: "/roadmaps/frontend/react-server-side-rendering-ssr-105",
  },
  {
    topicId: 106,
    topicName: "Angular",
    topicPath: "/roadmaps/frontend/angular-server-side-rendering-ssr-106",
  },
  {
    topicId: 107,
    topicName: "Vue.js",
    topicPath: "/roadmaps/frontend/vuejs-server-side-rendering-ssr-107",
  },
  {
    topicId: 108,
    topicName: "Svelte",
    topicPath: "/roadmaps/frontend/svelte-server-side-rendering-ssr-108",
  },
  {
    topicId: 109,
    topicName: "Remix",
    topicPath: "/roadmaps/frontend/remix-server-side-rendering-ssr-109",
  },
  {
    topicId: 110,
    topicName: "Next.js",
    topicPath: "/roadmaps/frontend/nextjs-server-side-rendering-ssr-110",
  },
  {
    topicId: 111,
    topicName: "Universal",
    topicPath: "/roadmaps/frontend/universal-server-side-rendering-ssr-111",
  },
  {
    topicId: 112,
    topicName: "Nuxt.js",
    topicPath: "/roadmaps/frontend/nuxtjs-server-side-rendering-ssr-112",
  },
  {
    topicId: 113,
    topicName: "Svelte Kit",
    topicPath: "/roadmaps/frontend/svelte-kit-server-side-rendering-ssr-113",
  },
  {
    topicId: 114,
    topicName: "Static Site Generators",
    topicPath: "/roadmaps/frontend/static-site-generators-114",
  },
  {
    topicId: 115,
    topicName: "Eleventy",
    topicPath: "/roadmaps/frontend/eleventy-static-site-generation-115",
  },
  {
    topicId: 116,
    topicName: "Astro",
    topicPath: "/roadmaps/frontend/astro-static-site-generation-116",
  },
  {
    topicId: 117,
    topicName: "Next.js",
    topicPath: "/roadmaps/frontend/nextjs-static-site-generation-117",
  },
  {
    topicId: 118,
    topicName: "GatsbyJS",
    topicPath: "/roadmaps/frontend/gatsbyjs-static-site-generation-118",
  },
  {
    topicId: 119,
    topicName: "Vuepress",
    topicPath: "/roadmaps/frontend/vuepress-static-site-generation-119",
  },
  {
    topicId: 120,
    topicName: "Jekyll",
    topicPath: "/roadmaps/frontend/jekyll-static-site-generation-120",
  },
  {
    topicId: 121,
    topicName: "Hugo",
    topicPath: "/roadmaps/frontend/hugo-static-site-generation-121",
  },
  {
    topicId: 122,
    topicName: "Nuxt.js",
    topicPath: "/roadmaps/frontend/nuxtjs-static-site-generation-122",
  },
  {
    topicId: 123,
    topicName: "Remix",
    topicPath: "/roadmaps/frontend/remix-server-side-generation-123",
  },
  {
    topicId: 124,
    topicName: "Svelte Kit",
    topicPath: "/roadmaps/frontend/svelte-kit-server-side-rendering-ssr-124",
  },
  {
    topicId: 125,
    topicName: "GraphQL",
    topicPath: "/roadmaps/frontend/graphql-125",
  },
  {
    topicId: 126,
    topicName: "Apollo",
    topicPath: "/roadmaps/frontend/apollo-graph-126",
  },
  {
    topicId: 127,
    topicName: "Relay Modern",
    topicPath: "/roadmaps/frontend/relay-modern-graphql-127",
  },

  {
    topicId: 128,
    topicName: "Mobile Applications",
    topicPath: "/roadmaps/frontend/mobile-applications-react-native-128",
  },

  {
    topicId: 129,
    topicName: "React Native",
    topicPath: "/roadmaps/frontend/mobile-applications-react-native-129",
  },
  {
    topicId: 130,
    topicName: "Flutter",
    topicPath: "/roadmaps/frontend/mobile-applications-flutter-130",
  },
  {
    topicId: 131,
    topicName: "Ionic",
    topicPath: "/roadmaps/frontend/mobile-applications-ionic-131",
  },
  {
    topicId: 132,
    topicName: "NativeScript",
    topicPath: "/roadmaps/frontend/mobile-applications-nativescript-132",
  },

  {
    topicId: 133,
    topicName: "Desktop Applications",
    topicPath: "/roadmaps/frontend/desktop-applications-electron-133",
  },

  {
    topicId: 134,
    topicName: "Electron",
    topicPath: "/roadmaps/frontend/desktop-applications-electron-134",
  },
  {
    topicId: 135,
    topicName: "Tauri",
    topicPath: "/roadmaps/frontend/desktop-applications-tauri-135",
  },
  {
    topicId: 136,
    topicName: "Flutter",
    topicPath: "/roadmaps/frontend/desktop-applications-flutter-136",
  },
];


  for (let i = 0; i < frontendTopicsWithQuotesNamesArray.length; i++) {
    const fileName = `${frontendTopicsWithQuotesNamesArray[i]}.jsx`;
    const topicId = frontendTopicsWithQuotesNamesArray[i].match(/\d+$/)[0]; // Extract the number at the end of the string
    const prevToPath = frontendTopicsData[i - 1] ?  frontendTopicsData[i - 1].topicPath.split('/').pop() : "";
    const nextToPath = frontendTopicsData[i + 1] ?   frontendTopicsData[i + 1].topicPath.split('/').pop() : "";
    const nameInPascalCase = frontendTopicsWithQuotesNamesArray[i].replace(/(\d+)$/, '') // Remove the number at the end
    .replace(/([A-Z])/g, ' $1') // Add a space before each uppercase letter
    .trim(); // Remove leading and trailing spaces
    const fileContent = text
      .replace(/nameOfFile/g, frontendTopicsWithQuotesNamesArray[i])
      .replace(/nameOfTopic/g, nameInPascalCase)
      .replace(/prevToPath/g, prevToPath)
      .replace(/nextToPath/g, nextToPath)
      .replace(/\{topicId\}/g, `{${topicId}}`);
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) throw err;
    });
  }


