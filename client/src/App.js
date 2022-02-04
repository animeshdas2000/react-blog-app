
import Blogs from './components/blogs';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to ="/blog/all">
          Blog
        </Link>
        <Link to="/auth">Login</Link>
      </nav>   
    </div>
  );
}

export default App;
