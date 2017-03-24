import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/teams')
      .then(res => {
        console.log(res.data);
        const teams = res.data.map(obj => obj);
        this.setState({ teams });
      });
  }
  // shouldComponentUpdate(nextProps) {
	// 	if (this.props.teamModal !== nextProps.teamModal) {
	// 		console.log('ComponentUpdate Received');
	// 		this.forceUpdate();
	// 		return true;
	// 	}
	// 	return false;
	// }
  handleClick(e) {
    var id = e.target.dataset.mid;
    console.log(id);
    this.props.router.push('/newproject/'+id);
    // KEEP IN MIND, THIS ONLY WORKS WHEN CLICKING ON THE DIV SPACES, NOT THE TEXT.
    // <div className='container'>
    //   <Header type="posts_show" postId={this.props.params.id}/>
    //   <PostDetailsContainer id={this.props.params.id}/>
    // </div>
  }

  render() {

    return (
      <div className='container'>

          {/* Using the .reverse() method to show most revent at the top. */}
          {this.state.teams.reverse().map((team, i) =>

            <div className='jumbotron teams' onClick={this.handleClick} key={i} data-mid={team._id}>
              <h1 data-mid={team._id}>{team.teamname}</h1>
              <h2 data-mid={team._id}>{team.tech}</h2>
              <h3 data-mid={team._id}>{team.description}</h3>
            </div>
          )}

      </div>
    );
  }
}

export default ProjectList;
