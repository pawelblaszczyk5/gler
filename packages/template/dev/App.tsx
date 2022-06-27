import { createGreeting } from '../src';

export const App = () => {
  const getHelloWorld = createGreeting('world');

  return <h1>{getHelloWorld()}</h1>;
};
