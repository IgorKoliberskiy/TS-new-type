import Movie from '../domain/Movie';

test('adding item to cart', () => {
  const film = new Movie(1010, 'Мстители', 'The Avengers', 2012, 'USA', '"Avengers Assemble!"', ['фантастика', 'боевик', 'фэнтези', 'приключения', '...'], '137 мин. / 02:17', 700);
 
  expect(film).toEqual({
    id: 1010, 
    name: 'Мстители', 
    nameOrigin: 'The Avengers', 
    year: 2012, 
    state: 'USA', 
    slogan: '"Avengers Assemble!"', 
    genre: ['фантастика', 'боевик', 'фэнтези', 'приключения', '...'], 
    movieDuration: '137 мин. / 02:17', 
    price: 700})
})