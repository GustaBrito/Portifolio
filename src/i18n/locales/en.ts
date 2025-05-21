import SecretWave from '../../images/Secret Wave.png';
import Desenvolvimento from '../../images/Em desenvolvimento.png';
import ProjetoPortifolio from '../../images/ProjetoPortifolio.png';
import CalculadoraSimples from '../../images/CalculadoraSimples.png';
import ConversorMoeda from '../../images/ConversorMoeda.png';
import GeradorSenha from '../../images/GeradorSenha.png';
import JogoDaVelha from '../../images/JogoDaVelhaPlay.png';
import PrevisaoTempo from '../../images/PrevisaoTempo.png';
import VendaEstorno from '../../images/VendaEstorno.png';

export default {
  welcome: {
    title: 'Welcome to my Portfolio',
    selectLanguage: 'Select your language',
  },
  nav: {
    return: 'Back',
    about: 'About',
    timeline: 'Timeline',
    projects: 'Projects',
    contact: 'Contact',
  },
  about: {
    title: 'Gustavo Brito',
    description: 'Software Developer passionate about building efficient and innovative solutions. With experience in JavaScript, Python, and React—but specializing in C# and Oracle—I strive to turn ideas into functional, high-quality projects. Always seeking continuous learning and new challenges to expand my skills and deliver impactful solutions.',
  },
  projects: {
    title: 'My Projects',
    viewDemo: 'App',
    viewCode: 'View Code',
  },
  contact: {
    title: 'Contact Me',
    name: 'Who are you ?',
    email: 'Whats your Email ?',
    message: 'Send me a message',
    send: 'Send Message',
    success: 'Message sent successfully!',
    error: 'Error sending message.',
    whatsMessage: 'Type your WhatsApp message:'
  },
  Timeline: [
    {
      id: 1,
      date: 'September/2024 - Present',
      title: 'Software Development Internship',
      description: 'At Confiança Supermercados, I have been developing applications using various languages and frameworks, including C#, Python, SQL, Flask, Oracle, React, among others.',
    },
    {
      id: 2,
      date: 'January/2024 - September/2024',
      title: 'Machine Maintenance Assistant',
      description: 'Specialized in the operation and maintenance of machines for sealing, wrapping, and carton and packaging erection.',
    },
    {
      id: 3,
      date: 'July/2022 - September/2023',
      title: 'Executive Assistant',
      description: 'Served in a supervisory and managerial role at an ice cream parlor in Ireland, responsible for overseeing team training, customer service quality, perishable goods, cleanliness, and product restocking.',
    },
    {
      id: 4,
      date: 'March/2021 - September/2022',
      title: 'C1 Level Training - City Language School / Ireland',
      description: 'Advanced English language training (C1 Level).',
    },
    {
      id: 5,
      date: 'January/2019 - July/2019',
      title: 'People Management and Sales at the Junior Company - Gaia / UTFPR',
      description: 'During college, I worked in sales to attract clients and offer services in the field of environmental engineering. I also undertook responsibilities in team management.',
    },
    {
      id: 6,
      date: 'February/2015 - December/2018',
      title: 'High School with a Technologist in Information Technology - Etec Rodrigues de Abreu',
      description: 'Completed high school along with a technologist program in Information Technology, gaining exposure to more than 13 programming languages and hardware architecture.',
    },
  ],
  Projects: [
    {
      id: 1,
      title: 'HacknSlash - Secret Wave',
      description: 'College project for Uninter to create a game in Python',
      deployUrl: 'https://github.com/GustaBrito/HacknSlash-Python/releases/tag/v1.0',
      githubUrl: 'https://github.com/GustaBrito/HacknSlash-Python',
      image: SecretWave,
      badges: [
        'https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54',
        'https://img.shields.io/badge/Vscode-007ACC?style=flat&logo=visual-studio-code&logoColor=white',
        'https://img.shields.io/badge/Pygame-10B3BB?style=flat&logo=pygame&logoColor=white'
    ]
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      description: 'Portfolio built with React, with parts in JavaScript, TypeScript and CSS. The goal is to showcase features and introduce myself with my first portfolio.',
      githubUrl: 'https://github.com/GustaBrito/Portifolio',
      image: ProjetoPortifolio,
      badges: [
        'https://img.shields.io/badge/Vscode-007ACC?style=flat&logo=visual-studio-code&logoColor=white',
        'https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white',
        'https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white'
    ]
    },
    {
      id: 3,
      title: 'Sale-Reversal',
      description: 'Desktop application developed in C# .NET 8.0. Basic application to demonstrate CRUD operations, file import/export and database usage (formerly Oracle, but adapted to SQLite)',
      deployUrl: 'https://github.com/GustaBrito/PrjVendaEstorno/releases/tag/v1.0',
      githubUrl: 'https://github.com/GustaBrito/PrjVendaEstorno',
      image: VendaEstorno,
      badges: [
        'https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white',
        'https://img.shields.io/badge/.NET-8.0-512BD4?style=flat&logo=dot-net&logoColor=white',
        'https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat&logo=visual-studio&logoColor=white',
        'https://img.shields.io/badge/Windows%20Forms-0078D7?style=flat&logo=windows&logoColor=white'
    ]
    },
    {
      id: 4,
      title: 'Weather Forecast',
      description: 'Desktop application developed in C# .NET 5.0. The goal was to show API usage for project development. The application currently only retrieves data for Brazil.',
      deployUrl: 'https://github.com/GustaBrito/PrjPrevisaoTempo/releases/tag/v1.0',
      githubUrl: 'https://github.com/GustaBrito/PrjPrevisaoTempo',
      image: PrevisaoTempo,
      badges: [
        'https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white',
        'https://img.shields.io/badge/.NET-5.0-512BD4?style=flat&logo=dot-net&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat&logo=visual-studio&logoColor=white',
        'https://img.shields.io/badge/API-6C757D?style=flat&logo=api&logoColor=white'
    ]
    },
    {
      id: 5,
      title: 'Currency Converter',
      description: 'Desktop application developed in C# .NET 5.0. The goal was to show API usage for project development. The application aims to convert most currencies between each other in real time.',
      deployUrl: 'https://github.com/GustaBrito/PrjConversorMoeda/releases/tag/v1.0',
      githubUrl: 'https://github.com/GustaBrito/PrjConversorMoeda',
      image: ConversorMoeda,
      badges: [
        'https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white',
        'https://img.shields.io/badge/.NET-5.0-512BD4?style=flat&logo=dot-net&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat&logo=visual-studio&logoColor=white',
        'https://img.shields.io/badge/API-6C757D?style=flat&logo=api&logoColor=white'
    ]
    },
    {
      id: 6,
      title: 'Password Generator',
      description: 'Desktop application developed in C# .NET 5.0. The application uses a structure to generate passwords as you define how you want them.',
      deployUrl: 'https://github.com/GustaBrito/PrjGeradorSenha/releases/tag/v1.0',
      githubUrl: 'https://github.com/GustaBrito/PrjGeradorSenha',
      image: GeradorSenha,
      badges: [
        'https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white',
        'https://img.shields.io/badge/.NET-5.0-512BD4?style=flat&logo=dot-net&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat&logo=visual-studio&logoColor=white'
    ]
    },
    {
      id: 7,
      title: 'Tic-Tac-Toe',
      description: 'Desktop application developed in C# .NET 5.0. Very simple application, with turn system and scoring to emulate a tic-tac-toe game.',
      deployUrl: 'https://github.com/GustaBrito/PrjJogoDaVelha/releases/tag/v1.0',
      githubUrl: 'https://github.com/GustaBrito/PrjJogoDaVelha',
      image: JogoDaVelha,
      badges: [
        'https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white',
        'https://img.shields.io/badge/.NET-5.0-512BD4?style=flat&logo=dot-net&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat&logo=visual-studio&logoColor=white'
    ]
    },
    {
      id: 8,
      title: 'Simple Calculator',
      description: 'Desktop application developed in C# .NET 5.0. The essential project - a simple calculator with keyboard shortcut system, button functionality, like a calculator in its simplest version.',
      deployUrl: 'https://github.com/GustaBrito/CalculadoraSimples/releases/tag/v1.0',
      githubUrl: 'https://github.com/GustaBrito/CalculadoraSimples',
      image: CalculadoraSimples,
      badges: [
        'https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white',
        'https://img.shields.io/badge/.NET-5.0-512BD4?style=flat&logo=dot-net&logoColor=white',
        'https://img.shields.io/badge/Visual%20Studio-5C2D91?style=flat&logo=visual-studio&logoColor=white'
    ]
    },
    {
      id: 9,
      title: 'Em construção',
      description: '',
      // deployUrl: 'https://example.com',
      // githubUrl: 'https://github.com',
      image: Desenvolvimento,

    }
  ],
};