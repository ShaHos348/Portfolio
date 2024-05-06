import * as React from "react";
import Card from "@mui/material/Card";
//import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import { useNavigate } from "react-router-dom";
import "./styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { id, name, attributes, description, imageUrl } = project;
  /*const navigate = useNavigate();
  const handleLearnMoreClick = () => {
    navigate(`/projects/${project.id}`);
  };*/

  return (
    <Card className="project-card">
      <CardMedia
        className="project-card-media"
        image={require(`../assets/projectPics/${imageUrl}`)}
        title={name}
        projectid={id}
      />
      <CardContent className="project-card-content">
        <Typography className="project-card-name">
          {name}
        </Typography>
        <Typography className="project-card-description">
          {description}
        </Typography>
        <div className="project-attributes-container">
          <div className="project-languages project-attributes">
          {attributes.languages.map((language, index) => (
            <Typography className="project-language" key={index}>{language}</Typography>
          ))}
          </div>
          <Typography className="project-attributes">{attributes.IDE}</Typography>
          <Typography className="project-attributes" sx={{marginRight: "auto"}}>{attributes.Type}</Typography>
        </div>

        {/*<CardActions>
          <Button
            sx={{ marginLeft: "auto", marginRight: "auto", color: "blue" }}
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Button>
        </CardActions>*/}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
