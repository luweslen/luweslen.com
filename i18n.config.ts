export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'pt-BR',
  messages: {
    'en-US': {
      profession: 'Software Developer',
      current: 'Current',
      experience: {
        title: 'Experience',
        companies: {
          tilit: 'tilit / UIRD',
          zrp: 'ZRP',
        },
        positions: {
          intern: 'Internship Software Developer',
          junior: 'Junior Software Developer',
          developer: 'Software Developer'
        }
      },
      education: {
        title: 'Education',
        institutions: {
          ifpr: 'Instituto Federal do Paraná'
        },
        courses: {
          technician: 'Computer Technician',
          analysis: 'Analysis and systems development'
        }
      },
      skills: {
        title: 'Skills',
        indicators: {
          title: 'Indicators',
          used: 'Used',
          often: 'Often',
          occasionally: 'Occasionally',
          sometimes: 'Sometimes'
        },
        categories: {
          languages: 'Languages',
          programming: 'Programming',
          technologies: 'Technologies',
          tools: 'Tools',
          soft: 'Soft'
        },
        subcategories: {
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
          ui: 'UI/UX',
          database: 'Database',
          code: 'Code',
          general: 'General'
        },
        teamWork: 'Team Work',
        communication: 'Communication',
        creativity: 'Creativity',
        leadership: 'Leadership',
        proactivity: 'Proactivity',
      }
    },
    'pt-BR': {
      profession: 'Desenvolvedor de Software',
      current: 'Atualmente',
      experience: {
        title: 'Experiência',
        companies: {
          tilit: 'tilit / UIRD',
          zrp: 'ZRP',
        },
        positions: {
          intern: 'Estagiário de Desenvolvimento de Software',
          junior: 'Desenvolvedor de Software Júnior',
          developer: 'Desenvolvedor de Software Pleno'
        }
      },
      education: {
        title: 'Educação',
        institutions: {
          ifpr: 'Instituto Federal do Paraná'
        },
        courses: {
          technician: 'Técnico de Informática Integrado ao Ensino Médio',
          analysis: 'Análise e desenvolvimento de sistemas'
        }
      },
      skills: {
        title: 'Habilidades',
        indicators: {
          title: 'Indicadores',
          used: 'Usado',
          often: 'Frequentemente',
          occasionally: 'Ocasionalmente',
          sometimes: 'Às vezes'
        },
        categories: {
          programming: 'Programação',
          languages: 'Linguagens',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          soft: 'Interpessoais'
        },
        subcategories: {
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
          ui: 'UI/UX',
          database: 'Banco de dados',
          code: 'Código',
          general: 'Geral'
        },
        teamWork: 'Trabalho em equipe',
        creativity: 'Criatividade',
        communication: 'Comunicação',
        proactivity: 'Proatividade',
        leadership: 'Liderança',
      }
    }
  },
  datetimeFormats: {
    'en-US': {
      short: {
        year: 'numeric',
        month: 'short'
      }
    },
    'pt-BR': {
      short: {
        year: 'numeric',
        month: 'short'
      }
    }
  }
}))