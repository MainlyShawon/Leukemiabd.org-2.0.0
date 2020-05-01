const path = require(`path`);


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  
      createPage({
        path:  `/`,
        component: path.resolve("./src/templates/homepage.js"),
       
       
      });
   
 
};
