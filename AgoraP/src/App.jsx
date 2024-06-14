import { useState } from 'react';

function App() {
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([]);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=26OfJRKYfU2PidlsrT4ZzHAC1v3Lchuz&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  };

  const onSubmit = async (evento) => {
    evento.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={getGifs} onChange={evento => onChange(evento)} />
        <button type="submit">Buscar</button>
      </form>
      <p>{valorInput}</p>
      <div>
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </>
  );
}

export default App;
