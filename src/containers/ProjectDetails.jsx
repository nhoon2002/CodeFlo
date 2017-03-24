import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentteam: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var id = this.props.location.pathname;
    axios.get(id)
      .then(res => {
        console.log(res);
        const currentteam = res.data[0];
        console.log(currentteam);
        this.setState({ currentteam });
      });
  }

  // handleClick(e) {
  //   var id = e.target.dataset.mid;
  //   console.log(id);
  //   this.props.router.push('/newProject/'+id)
  //   // KEEP IN MIND, THIS ONLY WORKS WHEN CLICKING ON THE DIV SPACES, NOT THE TEXT.
  //   // <div className='container'>
  //   //   <Header type="posts_show" postId={this.props.params.id}/>
  //   //   <PostDetailsContainer id={this.props.params.id}/>
  //   // </div>
  // }

  render() {

    return (
      <div className='container'>



            <div className='jumbotron teams' data-mid={this.state.currentteam._id}>
              <h1>{this.state.currentteam.teamname}</h1>
              <h2>{this.state.currentteam.tech}</h2>
              <h3>{this.state.currentteam.description}</h3>
            </div>


      </div>
    );
  }
}

export default ProjectDetails;
