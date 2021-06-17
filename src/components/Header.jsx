import React from "react";

class Header extends React.Component {
    
    constructor(props){
       super(props);

       this.state = {
           showMenu:true
       }

       this.showSideBar = this.showSideBar.bind(this);
    }


    showSideBar = () => {
        this.setState({
            showMenu:!this.state.showMenu
        })
        this.props.showSideBar(this.state.showMenu)
    }


    render() { 
        return ( 
         <React.Fragment>
             <header class="app-header">
                <a class="app-header__logo" >Projeto</a>
                <a class="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"
                  onClick={()=> this.showSideBar()}
                ></a>
                <div class="app-nav">
                    <img className="app_sidebar__user-avatar" id="fotoDisco"></img>
                    <a className="linkHeader" href="#"></a>                   
                    <a className="linkLogout" href="#">
                        <i className="fa fa-sign-out fa-log"></i>Logout
                    </a>
                </div>
            </header>
         </React.Fragment>

         );
    }
}
 
export default Header;
  