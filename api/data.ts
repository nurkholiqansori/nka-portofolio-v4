import * as allIcons from "simple-icons/icons"

export const data = {
  myName: 'NUR KHOLIQ ANSORI',
  birthPlace: 'Bekasi, 25 April 2001',
  address: 'Kota Bekasi, Jawa Barat, Indonesia',
  contact: [
    {
      id: 1,
      name: 'nurkholiqansori8@gmail.com',
      color: '000000',
      link: 'mailto:nurkholiqansori8@gmail.com',
      path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    }
  ],
  socMed: [
    {
      id: 1,
      name: 'LinkedIn',
      color: '0A66C2',
      link: 'http://www.linkedin.com/in/nurkholiqansori',
    },
    {
      id: 2,
      name: 'Github',
      color: '181717',
      link: 'https://github.com/nurkholiqansori',
    },
    {
      id: 3,
      name: 'Sololearn',
      color: '149EF2',
      link: 'https://www.sololearn.com/profile/3200321',
    },
  ],

  description: "I've been a part time worker in several agencies as a wordpress developer. I usually use ReactJS and NextJS to make a company profile web. You can find me on my LinkedIn. I study on SoloLearn, Youtube, Google and Stackoverflow. I'm currently learning TypeScript, FullStack NextJS, Firebase and Headless CMS such as GhostCMS.",

  experience: [
    {
      id: 7,
      title: 'Web Developer',
      com: 'Jasa Pembuatan Website Bekasi',
      date: 'Jan 2022',
      status: 'From Internship',
      address: 'https://www.jasapembuatanwebsitebekasi.net/',
      logo: '/doc/Logo/jasapembuatanwebsitebekasi.png',
      img: '/doc/jasapembuatanwebsitebekasi..png',
      build: allIcons.siWordpress,
    },
    {
      id: 7,
      title: 'Web Developer',
      com: 'Karunia Kitchen Set',
      date: 'Des 2021',
      status: 'From Intership',
      address: 'https://www.karuniakitchensetbekasi.com/',
      logo: '/doc/Logo/karuniakitchenset.png',
      img: '/doc/karuniakitchensetbekasi.png',
      build: allIcons.siWordpress,
    },
    {
      id: 5,
      title: 'Web Developer',
      com: 'Mitra Java Sinergi',
      date: 'Des 2021',
      status: 'From Intership',
      address: 'https://www.mitraboltingrental.com/',
      logo: '/doc/Logo/mitrajavasinergi.png',
      img: '/doc/mitraboltingrental.png',
      build: allIcons.siWordpress,
    },
    {
      id: 4,
      title: 'Web Developer',
      com: 'Jasa Sedot WC Medan',
      date: 'Okt 2021',
      status: 'From Intership',
      address: 'https://www.jasasedotwc-medan.com',
      logo: '/doc/Logo/sedotwc.png',
      img: '/doc/jasasedotwc.png',
      build: allIcons.siWordpress,
    },
    {
      id: 3,
      title: 'Web Developer',
      com: 'YASSIN',
      date: 'Okt 2021',
      status: 'Freelance',
      address: 'https://www.yassin.or.id',
      logo: '/doc/Logo/yassin.png',
      img: '/doc/yassin.png',
      build: allIcons.siWordpress,
    },
    {
      id: 2,
      title: 'Web Developer',
      com: 'SMA FG Putri FDS',
      date: 'Agu 2021',
      status: 'Freelance',
      address: 'https://smafgputrifds.sch.id',
      logo: '/doc/Logo/smafgputri.png',
      img: '/doc/smafgputrifds.png',
      build: allIcons.siWordpress,
    },
    {
      id: 1,
      title: 'Web Developer',
      com: 'Ta\’limy Ali bin Abi Thalib',
      date: 'Sep 2020 hingga Mar 2021',
      status: 'Freelance',
      address: 'https://talimyabat.id',
      logo: '/doc/Logo/At-Talimy.png',
      img: '/doc/talimyabat.png',
      build: allIcons.siWordpress,
    },
  ],
  study: [
    {
      id: 1,
      title: 'Bachelor Degree of Computer Science',
      sch: 'Mitra Karya University',
      date: 'Aug 2019 until Present',
    },
  ],
  personalProjects: [
    // {
    //   id: 6,
    //   title: 'MERN (Mongo Express.js React.js Node.js) Course',
    //   address: 'https://mern-lecturer.vercel.app/',
    //   img: '/doc/project/mern.png',
    //   date: 'Mar. 2022',
    //   repo: 'https://github.com/nurkholiqansori/MERN-Lecturer'
    // },
    {
      id: 5,
      title: 'MyAnimeList Gallery',
      address: 'https://simple-gallery-my-anime-list.vercel.app/',
      img: '/doc/project/anime.png',
      date: 'Jan. 2022',
      repo: 'https://github.com/nurkholiqansori/simpleGalleryMyAnimeList',
      build: [
        {
          name: allIcons.siNextdotjs,
        },
        {
          name: allIcons.siStyledcomponents,
        },
        {
          name: allIcons.siMui
        },
      ],
    },
    {
      id: 4,
      title: 'Personal Website v1',
      address: 'https://my-cv-new.vercel.app/',
      img: '/doc/project/nka-portofolio-v1.png',
      date: 'Dec. 2022',
      repo: 'https://github.com/nurkholiqansori/myProfile',
      build: [
        {
          name: allIcons.siNextdotjs,
        },
        {
          name: allIcons.siTailwindcss
        }
      ]
    },
    {
      id: 3,
      title: 'Final Project at NGOding BAReng (NGOBAR) workshop',
      address: 'http://nurkholiqansori.github.io/myProfile',
      img: '/doc/project/ngobar.png',
      date: 'Agu. 2022',
      repo: 'https://github.com/nurkholiqansori/myProfile',
      build: [
        {
          name: allIcons.siHtml5
        },
        {
          name: allIcons.siCss3
        },
        {
          name: allIcons.siJavascript
        }
      ]
    },
    {
      id: 2,
      title: 'Personal Website v2',
      address: 'https://mern-lecturer.vercel.app/',
      img: '/doc/project/nka-portofolio-v2.png',
      date: 'Mar. 2022',
      repo: 'https://github.com/nurkholiqansori/MERN-Lecturer',
      build: [
        {
          name: allIcons.siNextdotjs
        },
        {
          name: allIcons.siTypescript
        },
        {
          name: allIcons.siTailwindcss
        },
      ],
    },
    {
      id: 1,
      title: 'MERN (Mongo Express.js React.js Node.js) Lecturer',
      address: 'https://mern-lecturer.vercel.app/',
      img: '/doc/project/mern.png',
      date: 'Mar. 2022',
      repo: 'https://github.com/nurkholiqansori/MERN-Lecturer',
      build: [
        {
          name: allIcons.siReact
        },
        {
          name: allIcons.siExpress
        },
        {
          name: allIcons.siTailwindcss
        },
        {
          name: allIcons.siReactrouter
        },
        {
          name: allIcons.siMongodb
        },
        {
          name: allIcons.siNodedotjs
        }
      ],
    },
  ],
  skill: [
    {
      id: 1,
      title: 'HTML Course',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/Certificate/1014-3200321/jpg/',
      date: 'Mar 2017',
      img: '',
    },
    {
      id: 2,
      title: 'CSS Course',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/Certificate/1023-3200321/jpg/',
      date: 'Mar 2017',
      img: '',
    },
    {
      id: 3,
      title: 'PHP Course',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/Certificate/1059-3200321/jpg/',
      date: 'Apr 2017',
      img: '',
    },
    {
      id: 4,
      title: 'Responsive Web Design Course',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/Certificate/1162-3200321/jpg/',
      date: 'Aug 2021',
      img: '',
    },
    {
      id: 5,
      title: 'SQL',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/certificates/course/en/3200321/1060/landscape/png',
      date: 'Sep 2021',
      img: '',
    },
    {
      id: 6,
      title: 'Javascript',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/certificates/course/en/3200321/1024/landscape/png',
      date: 'Sep 2021',
      img: '',
    },
    {
      id: 7,
      title: 'Coding for Marketers Course',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/Certificate/1165-3200321/jpg/',
      date: 'Sep 2021',
      img: '',
    },
    {
      id: 8,
      title: 'React + Redux Course',
      company: 'Sololearn',
      credential: 'https://www.sololearn.com/Certificate/1097-3200321/jpg',
      date: 'Des 2021',
      img: '',
    },
    {
      id: 9,
      title: 'React (Basic)',
      company: 'HackerRank',
      credential: 'https://www.hackerrank.com/certificates/efe6010e191a',
      date: 'Jan 2022',
      img: '',
    },
    {
      id: 10,
      title: 'Typescript Certification Course',
      company: 'Programming Hub',
      credential: 'https://storage.googleapis.com/programminghub/certificate%2F1643210793967.jpg',
      date: 'Jan 2022',
      img: '',
    },
    {
      id: 11,
      title: 'Next JS Certification Course',
      company: 'Programming Hub',
      credential: 'https://storage.googleapis.com/programminghub/certificate%2F1643330654852.jpg',
      date: 'Jan 2022',
      img: '',
    },
    {
      id: 12,
      title: 'Web Development Lessons (Node.js)',
      company: 'Progate',
      credential: 'https://progate.com/path_certificate/c3fe8a29r7hxfp',
      date: 'Feb 2022',
      img: '',
    },
    {
      id: 13,
      title: 'Sass Course',
      company: 'Progate',
      credential: 'https://progate.com/course_certificate/5b86ae37r7hzy7',
      date: 'Feb 2022',
      img: '',
    },
    {
      id: 14,
      title: 'SQL Course',
      company: 'Progate',
      credential: 'https://progate.com/course_certificate/20d39f45r7iet9',
      date: 'Feb 2022',
      img: '',
    },
    {
      id: 15,
      title: 'React Course',
      company: 'Progate',
      credential: 'https://progate.com/course_certificate/8dba3e32r7awxm',
      date: 'Feb 2022',
      img: '',
    },
    {
      id: 16,
      title: 'Python Course',
      company: 'Progate',
      credential: 'https://progate.com/course_certificate/141d39e5r7frpy',
      date: 'Feb 2022',
      img: '',
    },
    {
      id: 17,
      title: 'Node.js Course',
      company: 'Progate',
      credential: 'https://progate.com/course_certificate/c7352ecfr7i8uz',
      date: 'Feb 2022',
      img: '',
    },
    {
      id: 18,
      title: 'HTML & CSS Course',
      company: 'Progate',
      credential: 'https://progate.com/course_certificate/bfec56bbr7hrwo',
      date: 'Feb 2022',
      img: '',
    },
    {
      id: 19,
      title: 'MERN Stack with Blog Project',
      company: 'Udemy',
      credential: 'https://www.udemy.com/certificate/UC-056595b7-9ea6-4ca3-aa80-6313def6e575/',
      date: 'Feb 2022',
      img: '',
    }
  ],
  project: [
    {
      id: 1,
      name: 'SIAKAD (Sistem Informasi Akademik)',
      description: '',
      tools: [
        {
          id: 1,
          name: 'NextJS',
          svg: '',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          svg: '',
        },
        {
          id: 3,
          name: 'Recoil',
          svg: '',
        },
        {
          id: 4,
          name: 'Firebase',
          svg: '',
        },
      ],
      preview: '',
      startTime: 'Nov 2021',
    },
    {
      id: 2,
      name: 'SIAKAD (Sistem Informasi Akademik) App',
      description: '',
      tools: [
        {
          id: 1,
          name: 'React Native',
          svg: '',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          svg: '',
        },
        {
          id: 3,
          name: 'Firebase',
          svg: '',
        }
      ],
      preview: '',
      startTime: 'Dec 2021',
    },
  ],
}
