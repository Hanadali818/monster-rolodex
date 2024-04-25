import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  
  const onSearchChange = (event) => {
    console.log(event.target.value);
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }

  return(
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='Search Monsters' 
        className='Monsters-Search-box'
      />
    
      <CardList monsters={filteredMonsters}/> 
    </div>

  );
}

/* class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };
   
  }

  componentDidMount(){
      
        return {monsters: users}
      }
      ));
  }



  render() {
    //console.log('render from AppJS')

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;


   
  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex</h1>



      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='Search Monsters' 
        className='Monsters-Search-box'
      />
    
      <CardList monsters={filteredMonsters}/>
    </div>
  );
} */



export default App;
