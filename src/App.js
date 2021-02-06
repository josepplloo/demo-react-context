import logo from './logo.svg';
import './App.css';
import Header, { LABEL } from './components/Header';
import { getStories } from './services/storiesService';
import { useLazyRequest } from './hooks/useRequest.tsx';
import { useEffect } from  'react';
import { ThemeContext, themes } from './contexts/ThemeContext';

function App() {
  
  const [data,,,fetchStories] = useLazyRequest({
    request: getStories
  });
  
  useEffect(() =>{
    fetchStories();
  }, [fetchStories])

  console.log(data && data.length)
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <Header />
        {LABEL}
        <div className="App-header">
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
        </div>
      </div>
    </ThemeContext.Provider>  
  );
}

export default App;
