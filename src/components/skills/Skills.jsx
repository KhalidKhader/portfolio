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
import { GiComputing, GiCircuitry } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { VscRegex, VscGraph } from "react-icons/vsc";
import { DiJava } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  const theme = useTheme();

  const skillCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: <GiComputing />,
      skills: [
        { name: "Python", icon: <FaPython />, level: "Advanced" },
        { name: "Java", icon: <DiJava />, level: "Intermediate" },
        { name: "Javascript", icon: <SiJavascript />, level: "Intermediate" },
        { name: "C++", icon: <TbBrandCpp />, level: "Intermediate" },
        { name: "PL/SQL", icon: <SiOracle />, level: "Intermediate" },
        { name: "HTML", icon: <ImHtmlFive />, level: "Intermediate" },
        { name: "CSS", icon: <SiCss3 />, level: "Beginner" },
      ],
    },
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Machine Learning",
      icon: <FaBrain />,
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, level: "Advanced" },
        { name: "Keras", icon: <SiKeras />, level: "Advanced" },
        { name: "PyTorch", icon: <SiPytorch />, level: "Advanced" },
        { name: "OpenCV", icon: <SiOpencv />, level: "Advanced" },
        { name: "LangChain", icon: <FaLanguage />, level: "Advanced" },
        { name: "LangGraph", icon: <FaLanguage />, level: "Intermediate" },
        { name: "LangFuse", icon: <FaNetworkWired />, level: "Intermediate" },
        { name: "Neo4j Graph ML", icon: <FaDatabase />, level: "Intermediate" },
        { name: "RAG Systems", icon: <FaDatabase />, level: "Advanced" },
        { name: "FastAPI AI APIs", icon: <SiFastapi />, level: "Advanced" },
      ],
    },
    {
      id: "cloud-ai",
      title: "Cloud AI & Infrastructure",
      icon: <FaCloud />,
      skills: [
        { name: "Google Cloud (GCP)", icon: <SiGooglecloud />, level: "Advanced" },
        { name: "Vertex AI", icon: <SiGooglecloud />, level: "Intermediate" },
        { name: "AWS Bedrock", icon: <SiAmazonec2 />, level: "Intermediate" },
        { name: "AWS S3", icon: <SiAmazons3 />, level: "Intermediate" },
        { name: "AWS ECS", icon: <SiAmazonecs />, level: "Intermediate" },
        { name: "AWS EC2", icon: <SiAmazonec2 />, level: "Intermediate" },
        { name: "AWS SageMaker", icon: <SiAmazonec2 />, level: "Intermediate" },
        { name: "Redis Caching", icon: <SiRedis />, level: "Intermediate" },
        { name: "Docker", icon: <FaDocker />, level: "Advanced" },
        { name: "Poetry", icon: <SiPoetry />, level: "Intermediate" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Microservices",
      icon: <SiSpringboot />,
      skills: [
        { name: "FastAPI", icon: <SiFastapi />, level: "Advanced" },
        { name: "Flask", icon: <SiFlask />, level: "Advanced" },
        { name: "Spring Boot", icon: <SiSpringboot />, level: "Intermediate" },
        { name: "Django", icon: <SiDjango />, level: "Intermediate" },
        { name: "Neo4j", icon: <FaDatabase />, level: "Intermediate" },
        { name: "Redis", icon: <SiRedis />, level: "Intermediate" },
      ],
    },
    {
      id: "security-devops",
      title: "Security, DevOps & Compliance",
      icon: <BsGithub />,
      skills: [
        { name: "HIPAA/PIPEDA Compliance", icon: <AiFillCheckCircle />, level: "Advanced" },
        { name: "AES-256 Encryption", icon: <AiFillCheckCircle />, level: "Advanced" },
        { name: "Docker Compose", icon: <SiDocker />, level: "Advanced" },
        { name: "Git/GitHub", icon: <BsGithub />, level: "Advanced" },
        { name: "Linux", icon: <FaLinux />, level: "Intermediate" },
        { name: "Postman", icon: <SiPostman />, level: "Advanced" },
      ],
    },
  ];

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default' }}>
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
              <Card elevation={3} sx={{
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
              }}>
                <CardHeader
                  avatar={<Avatar sx={{ bgcolor: 'rgba(100, 255, 218, 0.2)', color: 'primary.main', fontSize: '1.5rem' }}>{category.icon}</Avatar>}
                  title={<Typography variant="h5" component="h3" fontWeight={600} color="text.primary">{category.title}</Typography>}
                  sx={{ pb: 1 }}
                />
                <Divider sx={{ mx: 2, borderColor: 'rgba(100, 255, 218, 0.1)' }} />
                <CardContent sx={{ pt: 2 }}>
                  <Grid container spacing={2}>
                    {category.skills.map((skill, index) => (
                      <Grid item xs={12} key={index}>
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box sx={{ mr: 1.5, color: theme.palette.primary.main, fontSize: '1.3rem' }}>{skill.icon}</Box>
                            <Typography variant="body1" sx={{ flexGrow: 1 }}>{skill.name}</Typography>
                            <Chip label={skill.level} size="small" sx={{ fontSize: '0.7rem', bgcolor: 'rgba(100, 255, 218, 0.1)', color: theme.palette.primary.main, fontWeight: 500 }} />
                          </Box>
                          <LinearProgress variant="determinate" value={skill.level === "Advanced" ? 90 : skill.level === "Intermediate" ? 70 : 40} sx={{ height: 6, borderRadius: 5, mb: 2 }} />
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
