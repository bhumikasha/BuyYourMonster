import { Component } from 'react';
import './App.css';
import CardList from './components/cardList/cardList';
import SearchBox from './components/searchBox/searchbox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  }
  
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className='App'>
        <h1>Monsters</h1>
        <SearchBox
        placeholder="Search your little monster"
        handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
