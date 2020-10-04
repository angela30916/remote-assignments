class Header extends React.Component {
    state = {
        show: false
    }

    toggleShowHide = () => {
        this.setState( prevState => ({
            show: !prevState.show
        }));
    }

    render() {
        return (
            <header className="main-header">
                <p className="name">Website Title / Logo</p>
                <ul className="main-nav">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                </ul>
                <a href="#" onClick = { this.toggleShowHide }>
                    <img 
                        src={ "img/menu.png" } 
                        alt="menu-trigger-icon" 
                        width="30"
                        id="menu" 
                    />
                </a>
                <div 
                    className="hidden-nav" 
                    style={{visibility: this.state.show ? "visible" : "hidden"}}
                >
                    <ul>
                        <li><a href="#">Item 1</a></li>
                        <li><a href="#">Item 2</a></li>
                        <li><a href="#">Item 3</a></li>
                        <li><a href="#">Item 4</a></li>
                    </ul>
                    <a href="#" onClick = { this.toggleShowHide }>
                        <img 
                            src={ "img/exit.png" } 
                            alt="exit-menu-icon" 
                            width="40"
                            id="exit" 
                        />
                    </a>  
                </div>
            </header>
        );
    }
}

class Banner extends React.Component {
    state = {
        message: "Welcome Message"
    }

    clickMessage = () => {
        this.setState({ message: "Have a Good Time!"});
    } 

    render(){
        return(
            <div className="banner">
                <h1 onClick = { this.clickMessage }>{this.state.message}</h1>
            </div>        
        );        
    }

}

class Container extends React.Component {
    state = {
        show: false
    }

    callAction = () => {
        this.setState( prevState => ({
            show: !prevState.show
        }));
    }
    
    render(){
        return(
            <div>
                <div className="container">
                    <h2>Section Title</h2>
                    <div className="row">
                            <div className="item">Content Box 1</div>
                            <div className="item">Content Box 2</div>
                    </div>
                    <div className="row">
                            <div className="item">Content Box 3</div>
                            <div className="item">Content Box 4</div>
                    </div>
                </div>
                <div align="center" onClick = { this.callAction }>
                    <button className="btn">Call to Action</button>
                </div>
                <div 
                    className="container hidden"
                    style={{display: this.state.show ? "block" : "none"}}
                >
                    <div className="row">
                        <div className="item">Content Box 5</div>
                        <div className="item">Content Box 6</div>
                    </div>
                    <div className="row">
                        <div className="item">Content Box 7</div>
                        <div className="item">Content Box 8</div>
                    </div>
                    </div>
            </div>
        );        
    }
}

const App = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Container />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);