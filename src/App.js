import './App.css';
import react, {useState} from 'react'

function App() {
  const [director, setDirector] = useState('');
  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);

  const addMovie =() =>{
      setMovieList([...movieList, {director, movie}]);
  }

  const removeMovie = (index) =>{
    const update = movieList.filter((item, i) => i !== index);
    setMovieList(update);
  }
  return (
    <div className='container'>
      <table>
        <thead>
           <th></th>
           <th></th>
        </thead>
        <tr>
            <td>
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} placeholder="Director" />
            </td>
            <td>
              <input type="text"  value={movie} onChange={(e) => setMovie(e.target.value)} placeholder="Movie Name" />
            </td>
            <td>
                <button onClick={addMovie}>Add</button>
            </td>
        </tr>
         <thead> 
          <th>Director</th>
            <th>Movie</th> 
          </thead>
          {movieList.map((item, index)=>(
            <tr key={index}>   
              <td>{item.director}</td>
              <td>{item.movie}</td>
              <td>

                <button onClick={() => removeMovie(index)}>
                  remove
                </button>
              </td>
              
            </tr>
          ))}
         
      </table>
    </div>
  );
}

export default App;
