import './App.css';
import { usePopularActor, usePopularMovie } from './api';

interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  original_name: string;
  backdrop_path: string;
}



function App() {
  const { data ,isLoading, error } = usePopularMovie();
  const {  } = usePopularActor();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data || !data.results) {
    return <div>Error loading data</div>;
  }

  return (
    <div className=''>
      <h1 className='font-bold text-center'>MovieApp</h1>
      <div className='flex gap-y-10 flex-col items-center'>
        {data.results.map((movie: Movie) => (
          <div
            key={movie.id}
            className='border p-2 rounded shadow hover:shadow-lg transition items-center flex flex-col w-[70%]'
          >
            <div className=''>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
                className='rounded mb-2 w-96 h-44 bg-cover'
              />
            </div>
            <h2 className='font-semibold text-lg'>{movie.original_title}</h2>
            <h2 className='font-semibold text-lg'>{movie.original_name}</h2>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
