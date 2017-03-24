// // Create Your Project Team
// -Enter Project Name
// -Enter Project Description
// -Add Project Tags (Tech stack, techonologies, industry, etc)
//

// if 1) Submit (update Team data for User model)

// else if 2) Add Members
//
// 1: Submit Team to Database (1 member -- curentUser), redirect to Project Home
// 2: Populate field with users -- linkedin/githubFinder style, searchable by username;
//   - Invite to Project
//
//
import React, { Component } from 'react';

import ProjectForm from '../components/forms/ProjectForm.jsx';
class NewProject extends Component {

	render(){
   return(
      <ProjectForm
         open={this.props.openModalT}
         close={this.props.closeModalT}
         show={this.props.teamModal}
         create={this.props.createTeam}
      />
   )
   }
}

export default NewProject;
