import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import { original , action, trending, comedy, horror, documentaries } from "./urls";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div >
    <NavBar/>
    <Banner/>
    <RowPost url={original} title='Netflix Originals'/>
    <RowPost url={trending} title='Trending'/>
    <RowPost url={comedy} title='Comedy Movies'/>
    <RowPost url={horror} title='Horror Movies'/>
    <RowPost url={action} title='Action '/>
    <RowPost url={documentaries} title='Documentaries'/>
    </div>
  );
}

export default App;
