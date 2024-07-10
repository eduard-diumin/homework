import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
        <Nav/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
