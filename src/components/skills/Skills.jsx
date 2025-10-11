import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Tooltip,
  Chip,
  Divider,
  LinearProgress,
  useTheme,
  alpha,
  Card,
  CardContent,
  CardHeader,
  Avatar
} from "@mui/material";
import { ImHtmlFive } from "react-icons/im";
import {
  AiFillCheckCircle,
  AiOutlineConsoleSql,
  AiOutlinePartition,
} from "react-icons/ai";
import {
  SiJavascript,
  SiCss3,
  SiMysql,
  SiCisco,
  SiOracle,
  SiFirebase,
  SiSpringboot,
  SiFlask,
  SiDjango,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiTensorflow,
  SiKeras,
  SiTableau,
  SiPython,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiOpencv,
  SiDocker,
  SiMacos,
  SiPostman,
  SiGooglecolab,
  SiJupyter,
  SiWebpack,
  SiAzuredevops,
  SiPytorch,
  SiPowerbi,
  SiMicrosoftazure,
  SiDatabricks,
  SiApacheairflow,
  SiStreamlit,
  SiScikitlearn,
  SiOpenai,
  SiGooglecloud,
  SiAmazonec2,
  SiAmazons3,
  SiAmazonecs,
  SiRedis,
  SiFastapi,
  SiPoetry,
  SiNeo4J,
} from "react-icons/si";
import { FaPython, FaReact, FaLinux, FaAngular, FaDocker, FaDatabase, FaLanguage, FaRobot, FaNetworkWired, FaBrain, FaChartLine, FaCloud } from "react-icons/fa";
import { GiComputing, GiCircuitry, GiAutoRepair } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { VscRegex, VscGraph } from "react-icons/vsc";
import { DiJava } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";

// Helper function to get progress value based on skill level
const getProgressValue = (level) => {
  switch (level) {
    case "Advanced":
      return 90;
    case "Intermediate":
      return 70;
    case "Beginner":
      return 40;
    default:
      return 50;
  }
};

// Helper function to get skill level color
const getLevelColor = (level, theme) => {
  switch (level) {
    case "Advanced":
      return theme.palette.primary.main;
    case "Intermediate":
      return theme.palette.primary.light;
    case "Beginner":
      return alpha(theme.palette.primary.main, 0.6);
    default:
      return theme.palette.text.secondary;
  }
};

const Skills = () => {
  const theme = useTheme();

  // Define skill categories
  const skillCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: <GiComputing />,
      skills: [
        { name: "Python", icon: <FaPython />, level: "Advanced" },
        { name: "JAVA", icon: <DiJava />, level: "Intermediate" },
        { name: "Javascript", icon: <SiJavascript />, level: "Intermediate" },
        { name: "C++", icon: <TbBrandCpp />, level: "Intermediate" },
        { name: "C", icon: <GiComputing />, level: "Intermediate" },
        { name: "HTML", icon: <ImHtmlFive />, level: "Intermediate" },
        { name: "CSS", icon: <SiCss3 />, level: "Beginner" },
        { name: "XML", icon: <GiComputing />, level: "Beginner" },
        { name: "PL/SQL", icon: <SiOracle />, level: "Intermediate" },
        { name: "Assembly", icon: <GiComputing />, level: "Intermediate" },
        { name: "C#", icon: <GiComputing />, level: "Beginner" },
        { name: "PHP", icon: <SiPhp />, level: "Beginner" },
      ],
    },
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Machine Learning",
      icon: <FaBrain />,
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, level: "Intermediate" },
        { name: "Keras", icon: <SiKeras />, level: "Intermediate" },
        { name: "PyTorch", icon: <SiPytorch />, level: "Intermediate" },
        { name: "OpenCV", icon: <SiOpencv />, level: "Intermediate" },
        { name: "Hugging Face", icon: <SiOpenai />, level: "Advanced" },
        { name: "LangChain", icon: <FaLanguage />, level: "Advanced" },
        { name: "LangGraph", icon: <FaLanguage />, level: "Intermediate" },
        { name: "LangFuse", icon: <FaNetworkWired />, level: "Intermediate" },
        { name: "SHAP & LIME", icon: <VscGraph />, level: "Intermediate" },
        { name: "Whisper", icon: <SiOpenai />, level: "Intermediate" },
        { name: "YOLO", icon: <SiOpencv />, level: "Intermediate" },
        { name: "DeepSeek", icon: <FaBrain />, level: "Intermediate" },
      ],
    },
     {
      id: "databases",
      title: "Databases & Graph Systems",
      icon: <SiMysql />,
      skills: [
        { name: "Oracle SQL", icon: <SiOracle />, level: "Intermediate" },
        { name: "MySQL", icon: <SiMysql />, level: "Advanced" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: "Intermediate" },
        { name: "MSSQL", icon: <AiOutlineConsoleSql />, level: "Intermediate" },
        { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
        { name: "SQLite", icon: <SiSqlite />, level: "Intermediate" },
        { name: "Neo4J", icon: <SiNeo4J />, level: "Intermediate" },
        { name: "Neo4j Graph ML", icon: <SiNeo4J />, level: "Intermediate" },
        { name: "Cypher Queries", icon: <SiNeo4J />, level: "Intermediate" },
        { name: "Firebase", icon: <SiFirebase />, level: "Intermediate" },
        { name: "Redis", icon: <SiRedis />, level: "Intermediate" },
      ],
    },
    {
      id: "nlp-gen-ai",
      title: "NLP & Generative AI",
      icon: <FaRobot />,
      skills: [
        { name: "OpenAI Studio", icon: <SiOpenai />, level: "Advanced" },
        { name: "Azure AI", icon: <SiMicrosoftazure />, level: "Intermediate" },
        { name: "NLTK", icon: <FaLanguage />, level: "Intermediate" },
        { name: "spaCy", icon: <FaLanguage />, level: "Intermediate" },
        { name: "Transformers", icon: <FaBrain />, level: "Intermediate" },
        { name: "LLM Tuning", icon: <FaBrain />, level: "Intermediate" },
        { name: "Prompt Engineering", icon: <SiOpenai />, level: "Intermediate" },
        { name: "RAG Systems", icon: <FaDatabase />, level: "Advanced" },
        { name: "Graph RAG", icon: <VscGraph />, level: "Advanced" },
        { name: "GANs", icon: <FaBrain />, level: "Intermediate" },
        { name: "Stable Diffusion", icon: <SiOpenai />, level: "Intermediate" },
      ],
    },
    {
      id: "datascience",
      title: "Data Science and Analytics",
      icon: <SiPython />,
      skills: [
        { name: "NumPy", icon: <SiNumpy />, level: "Intermediate" },
        { name: "Pandas", icon: <SiPandas />, level: "Advanced" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, level: "Advanced" },
        { name: "Matplotlib", icon: <VscGraph />, level: "Intermediate" },
        { name: "Seaborn", icon: <VscGraph />, level: "Intermediate" },
        { name: "XGBoost", icon: <FaChartLine />, level: "Intermediate" },
        { name: "LightGBM", icon: <SiPython />, level: "Intermediate" },
        { name: "Jupyter", icon: <SiJupyter />, level: "Intermediate" },
        { name: "Time Series Analysis", icon: <VscGraph />, level: "Intermediate" },
      ],
    },
    
    {
      id: "cloud-ai",
      title: "Cloud AI & Infrastructure",
      icon: <FaCloud />,
      skills: [
        { name: "Google Cloud (GCP)", icon: <SiGooglecloud />, level: "Intermediate" },
        { name: "Vertex AI", icon: <SiGooglecloud />, level: "Advanced" },
        { name: "Google AI Studio", icon: <SiGooglecloud />, level: "Advanced" },
        { name: "AWS Bedrock", icon: <SiAmazonec2 />, level: "Intermediate" },
        { name: "AWS S3", icon: <SiAmazons3 />, level: "Intermediate" },
        { name: "AWS ECS", icon: <SiAmazonecs />, level: "Intermediate" },
        { name: "AWS EC2", icon: <SiAmazonec2 />, level: "Intermediate" },
        { name: "AWS SageMaker", icon: <SiAmazonec2 />, level: "Intermediate" },
        { name: "Azure AI", icon: <SiMicrosoftazure />, level: "Intermediate" },
        
      ],
    },
    
    {
      id: "data-engineering",
      title: "Data Engineering & ETL",
      icon: <SiAzuredevops />,
      skills: [
        { name: "PySpark", icon: <FaPython />, level: "Intermediate" },
        { name: "Databricks", icon: <SiDatabricks />, level: "Intermediate" },
        { name: "Dask", icon: <FaPython />, level: "Intermediate" },
        { name: "Apache Airflow", icon: <SiApacheairflow />, level: "Intermediate" },
        { name: "Azure Data Factory", icon: <SiMicrosoftazure />, level: "Intermediate" },
        { name: "AutoML", icon: <SiMicrosoftazure />, level: "Intermediate" },
        { name: "Google Colab", icon: <SiGooglecolab />, level: "Advanced" },
        { name: "Poetry", icon: <SiPoetry />, level: "Intermediate" },
      ],
    },
    {
      id: "frontend",
      title: "Front-End Development",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact />, level: "Intermediate" },
        { name: "Angular", icon: <FaAngular />, level: "Beginner" },
        { name: "HTML/CSS/JS", icon: <ImHtmlFive />, level: "Intermediate" },
        { name: "AJAX", icon: <SiJavascript />, level: "Intermediate" },
        { name: "Regex", icon: <VscRegex />, level: "Intermediate" },
        { name: "jQuery", icon: <SiJavascript />, level: "Intermediate" },
      ],
    },
    {
      id: "backend",
      title: "Back-End Development",
      icon: <SiSpringboot />,
      skills: [
        { name: "FastAPI", icon: <SiFastapi />, level: "Intermediate" },
        { name: "Flask", icon: <SiFlask />, level: "Intermediate" },
        { name: "Django", icon: <SiDjango />, level: "Intermediate" },
        { name: "ASP.NET Core", icon: <GiComputing />, level: "Intermediate" },
        { name: "Express.js/Node.js", icon: <SiJavascript />, level: "Intermediate" },
        { name: "Spring Boot", icon: <SiSpringboot />, level: "Intermediate" },
        { name: "Oracle APEX", icon: <SiOracle />, level: "Intermediate" },
        { name: "Laravel", icon: <SiLaravel />, level: "Beginner" },
      ],
    },
   
    {
      id: "data-vis",
      title: "Data Visualization & BI",
      icon: <SiTableau />,
      skills: [
        { name: "Tableau", icon: <SiTableau />, level: "Intermediate" },
        { name: "Power BI", icon: <SiPowerbi />, level: "Intermediate" },
        { name: "Knime", icon: <VscGraph />, level: "Intermediate" },
        { name: "Oracle APEX", icon: <SiOracle />, level: "Intermediate" },
        { name: "Streamlit", icon: <SiStreamlit />, level: "Intermediate" },
        { name: "Plotly", icon: <SiPlotly />, level: "Intermediate" },
      ],
    },
    {
      id: "security-devops",
      title: "Security, DevOps & Compliance",
      icon: <BsGithub />,
      skills: [
        { name: "HIPAA/PIPEDA Compliance", icon: <AiFillCheckCircle />, level: "Intermediate" },
        { name: "AES-256 Encryption", icon: <AiFillCheckCircle />, level: "Intermediate" },
        { name: "Docker", icon: <FaDocker />, level: "Intermediate" },
        { name: "Git/GitHub", icon: <BsGithub />, level: "Intermediate" },
        { name: "Linux", icon: <FaLinux />, level: "Intermediate" },
        { name: "Postman", icon: <SiPostman />, level: "Intermediate" },
        { name: "REST APIs", icon: <FaNetworkWired />, level: "Intermediate" },
        { name: "Bitbucket/JIRA", icon: <BsGithub />, level: "Intermediate" },
      ],
    },
   
  ];

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'background.default'
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            What Skills I Have?
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            color="primary.main"
            sx={{
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: 'primary.main'
              }
            }}
          >
            My Skills
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid item xs={12} md={6} key={category.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  borderRadius: '15px',
                  backgroundColor: alpha(theme.palette.background.paper, 0.7),
                  border: '1px solid',
                  borderColor: 'rgba(100, 255, 218, 0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                    borderColor: 'primary.main'
                  }
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: 'rgba(100, 255, 218, 0.2)',
                        color: 'primary.main',
                        fontSize: '1.5rem'
                      }}
                    >
                      {category.icon}
                    </Avatar>
                  }
                  title={
                    <Typography variant="h5" component="h3" fontWeight={600} color="text.primary">
                      {category.title}
                    </Typography>
                  }
                  sx={{ pb: 1 }}
                />
                
                <Divider sx={{ mx: 2, borderColor: 'rgba(100, 255, 218, 0.1)' }} />
                
                <CardContent sx={{ pt: 2 }}>
                  <Grid container spacing={2}>
                    {category.skills.map((skill, index) => (
                      <Grid item xs={12} key={index}>
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box 
                              sx={{ 
                                mr: 1.5, 
                                color: getLevelColor(skill.level, theme),
                                fontSize: '1.3rem' 
                              }}
                            >
                              {skill.icon}
                            </Box>
                            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                              {skill.name}
                            </Typography>
                            <Chip 
                              label={skill.level} 
                              size="small"
                              sx={{ 
                                fontSize: '0.7rem',
                                bgcolor: 'rgba(100, 255, 218, 0.1)',
                                color: getLevelColor(skill.level, theme),
                                fontWeight: 500
                              }}
                            />
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={getProgressValue(skill.level)} 
                            sx={{
                              height: 6,
                              borderRadius: 5,
                              mb: 2,
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              '& .MuiLinearProgress-bar': {
                                bgcolor: getLevelColor(skill.level, theme),
                                borderRadius: 5
                              }
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
