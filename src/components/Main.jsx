import React from 'react';
import NavBar from './NavBar';
import logo from '../logo.png';
import Gallery from "react-photo-gallery";
import ArrowDropDownCircleTwoToneIcon from '@material-ui/icons/ArrowDropDownCircleTwoTone';

class Main extends React.Component{

    componentDidMount(props) {
	this.props.getPhotoList();
    }
    
    render(){
	return(
   <div>
   <NavBar/>
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to My Homepage.
        </p>
        <a
          className="App-link"
          href="/flasky"
          rel="noopener noreferrer"
        >
          Flasky
        </a>

         <a
          className="App-link"
          href="/jenkins"
          rel="noopener noreferrer"
        >
          Jenkins
        </a>
        <a
          className="App-link"
          href="/mantisbt"
          rel="noopener noreferrer"
        >
          Mantisbt
        </a>
	<ArrowDropDownCircleTwoToneIcon />
      </header>
      
      { this.props.photos &&
	  	<Gallery photos={this.props.photos} />
	  }
    </div>
   </div>
	)}}

export default Main;
