import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';
import { TextEncoder, TextDecoder } from 'util';



global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

require('dotenv').config({
    path:'.env.test'
});

jest.mock('./src/helpers/getEnvironments', ( ) => ({
    getEnvironments: () => ( { ...process.env } ) //* Cuando se mande a llamar el gerEnvironments ahora va a regresar el process
} ) )