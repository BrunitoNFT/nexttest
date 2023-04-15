import App from './components/App/App';

async function fetchFromTheServer(quantity) {
  console.log(
    'You are not going to see this console log because is rendered in the server',
  );
  try {
    const serverResponse = await fetch(
      `https://tinyfac.es/api/data?limit=${quantity}&quality=0`,
      {cache: 'no-store'},
    );
    if (!serverResponse.ok) {
      throw new Error();
    }
    const serverResponseJson = await serverResponse.json();
    console.log('a: ', serverResponseJson);
    return serverResponseJson.map(face => face.url);
  } catch {}
  return [];
}

export default async function Home() {
  const initialArr = await fetchFromTheServer(3);

  return <App initialArr={initialArr} />;
}
