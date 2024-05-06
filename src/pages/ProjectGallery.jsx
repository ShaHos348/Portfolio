import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { makeStyles } from '@material-ui/core/styles';
import Multiselect from 'multiselect-react-dropdown';
import projectData from './data/projectData'; // Import projectData array

const useStyles = makeStyles((theme) => ({
  searchBar: {
    // Your custom styles for the SearchBar component
    backgroundColor: 'lightgray',
    borderRadius: '8px',
    padding: '8px',
    '& input': {
      // Custom styles for the input element
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '16px',
    },
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '3vh',
    margin: '30px'
  },
}));

const ProjectGallery = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State variable for search query
  const [selectedContributors, setSelectedContributors] = useState([]);
  const classes = useStyles();

  const handleContributorChange = (selectedList, selectedItem) => {
    // Set the selected contributors when a change occurs
    setSelectedContributors(selectedList);
  };

  // Filter projects based on the searchQuery
  const filteredProjects = projectData.filter((project) => {
    // Check if project.name and searchQuery are defined before applying toLowerCase
    return (
      ((project.name &&
        project.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (project.description &&
          project.description.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (!selectedContributors.length || // Check if any contributors are selected
        selectedContributors.some((contributor) => project.attributes.some(attr => attr.username === contributor)))
    );
  });

  // Define a custom search bar component or element
  const customSearchBar = (
    <input
      type="text"
      placeholder="Search"
      className={classes.searchBar}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );

  return (
    <div>
      <div className={classes.searchContainer}>
      <Multiselect
          options={[]} // Pass contributors array here if needed
          onSelect={handleContributorChange}
          onRemove={handleContributorChange}
          displayValue="username"
          closeOnSelect={false}
          placeholder="Select contributors"
        />
      {customSearchBar}
      </div>
      
      <div
        className="project-gallery"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
