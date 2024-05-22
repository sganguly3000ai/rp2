import logo from './logo.svg';
import './App.css';




const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);


function MyForm(){

  return (
    <form action="" method="get" class="App-form">
      <div class="form-example">
      <label for="name">Enter your name: </label>
      <input type="text" name="name" id="name" required />
      </div>
      <div class="form-example">
        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div class="form-example">
        <MyButton/>
      </div>
    </form>
  );
}
function MyButton(){

  return(
    /*
    <button>
      I'm a button
    </button>
    */
      <input type="submit" value="Subscribe!" />
  );
}
function MyShoppingList(){

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  
  const listItems = products.map(product =>
    <li 
      key={product.id}
      style={{color:product.isFruit ? 'magenta' : 'darkgreen'}}
      >
      {product.title}
    </li>
  );
  return(
    /*
    <button>
      I'm a button
    </button>
    */
      {listItems}
  );
}
export default function MyApp(){
  return (
    <div className="App">
      <h1 className="App-heading">Welcome to my app</h1>
      <MyForm/>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default App;
