import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movies">
    {movies.map(a => (
      <MovieCard movie={a} key={a.imdbId} />
    ))}
  </div>
);
