/* @refresh reload */
import { render } from 'solid-js/web';
import { App } from './App';

const rootElement = document.getElementById('root');

if (!rootElement) throw Error('Create mountable element with id "root"');

render(() => <App />, rootElement);
