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
    title: 'Bem-vindo ao meu Portfólio',
    selectLanguage: 'Selecione seu idioma',
  },
  nav: {
    return: 'Voltar',
    about: 'Sobre',
    timeline: 'Trajetória',
    projects: 'Projetos',
    contact: 'Contato',
  },
  about: {
    title: 'Gustavo Brito',
    description: 'Desenvolvedor de Software apaixonado por criar soluções eficientes e inovadoras. Com experiência em JavaScript, Python, React, mas principalmente em C# e Oracle, busco transformar ideias em projetos funcionais e de alta qualidade. Sempre em busca de aprendizado contínuo e novos desafios para expandir minhas habilidades e contribuir com soluções que impactem positivamente.',
  },
  projects: {
    title: 'Meus Projetos',
    viewDemo: 'Aplicativo',
    viewCode: 'Ver Código',
  },
  contact: {
    title: 'Contato',
    name: 'Quem é você ?',
    email: 'Qual seu Email ?',
    message: 'Mande sua mensagem',
    send: 'Enviar Mensagem',
    success: 'Mensagem enviada com sucesso!', 
    error: 'Erro ao enviar a mensagem.', 
    whatsMessage: 'Digite sua mensagem para WhatsApp:' 
  },
  Timeline: [
    {
      id: 1,
      date: 'Setembro/2024 - Presente',
      title: 'Estágio de Desenvolvimento de Software',
      description: 'Na empresa Confiança Supermercados, venho desenvolvendo aplicações com diversas linguagens com frameworks variados, desde elas: C#, Python, SQL, Flask, Oracle, React, desde outros.',
    },
    {
      id: 2,
      date: 'Janeiro/2024 - Setembro/2024',
      title: 'Assistente de Manutenção de Máquinas',
      description: 'Especialização no funcionamento e manutenção de máquinas seladoras/envolvedoras/arqueadores de caixas e embalagens.',
    },
    {
      id: 3,
      date: 'Julho/2022 - Setembro/2023',
      title: 'Assistente de Direção',
      description: 'Papel de supervisão e gerência em uma gelateria na Irlanda, com o papel de cuidar do treinamento e trabalho em equipe, qualidade de atendimento e perecíveis, limpeza e reestoque de produtos.',
    },
    {
      id: 4,
      date: 'Março/2021 - Setembro/2022',
      title: 'Formação de Nível C1 - City Language School / Irlanda',
      description: 'Formação da lingua Inglesa para nível avançado ( Nível C1 ). ',
    },
    {
      id: 5,
      date: 'Janeiro/2019 - Julho/2019',
      title: 'Gestão de Pessoas e Vendas na Empresa Júnior - Gaia / UTFPR',
      description: 'Durante a faculdade, atuei na área de vendas para atrair clientes e oferecer serviços na área de engenharia ambiental. Também fiz trabalhos de gestão de pessoas na equipe geral.',
    },
    {
      id: 6,
      date: 'Fevereiro/2015 - Dezembro/2018',
      title: 'Ensino médio com tecnólogo em informática - Etec Rodrigues de Abreu',
      description: 'Formação no ensimo médio com tecnologo em Informática, tendo contato com mais de 13 linguagens e estrutura de hardware.',
    },
  ],
  Projects: [
    {
      id: 1,
      title: 'HacknSlash - Secret Wave',
      description: 'Trabalho da faculdade Uninter para a criação de um jogo em Python',
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
      title: 'Portifolio pessoal',
      description: 'Portifolio construido em React, partes em Javascript, TypeScript e CSS. O objetivo é mostrar funcionalidades e me apresentar com meu primeiro portifolio.',
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
      title: 'Venda-Estorno',
      description: 'Aplicativo Desktop desenvolvido em C# .NET 8.0. Aplicativo basico para demonstrar aplicações CRUD, importação/exportação de arquivos e uso de banco de dados (Antes Oracle, mas adaptado para SQLite)',
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
      title: 'Previsão do Tempo',
      description: 'Aplicativo Desktop desenvolvido em C# .NET 5.0. O objetivo seria mostrar o uso de APIs para desenvolvimento do Projeto. O aplicativo, no momento, apenas obtem os dados do Brasil.',
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
      title: 'Conversor de Moedas',
      description: 'Aplicativo Desktop desenvolvido em C# .NET 5.0. O objetivo seria mostrar o uso de APIs para desenvolvimento do Projeto. O aplicativo tem o objetivo de converter a maioria das moedas entre si em tempo real.',
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
      title: 'Gerador de Senha',
      description: 'Aplicativo Desktop desenvolvido em C# .NET 5.0. O aplicativo usa uma estrutura para geração de senhas conforme voce vai definindo como você deseja ela.',
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
      title: 'Jogo da Velha',
      description: 'Aplicativo Desktop desenvolvido em C# .NET 5.0. Aplicativo bem simples, com sistema de turnos e pontuação para emular um jogo da velha.',
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
      title: 'Calculadora Simples',
      description: 'Aplicativo Desktop desenvolvido em C# .NET 5.0. O que não poderia faltar, seria uma calculadora simples com sistema de atalhos para teclas, funcionamento de boto~es, como se fosse uma calculadora em sua versão mais simples.',
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
