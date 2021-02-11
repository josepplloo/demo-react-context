import Header, { LABEL } from './components/Header';
import { getStories } from './services/storiesService';
import { useLazyRequest } from './hooks/useRequest.tsx';
import { useEffect } from  'react';
import { ThemeContext, themes } from './contexts/ThemeContext';
import Routes from './components/Routes';

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
        <Routes />
      </div>
    </ThemeContext.Provider>  
  );
}

export default App;
