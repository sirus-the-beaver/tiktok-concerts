import '@testing-library/jest-dom/jest-globals';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;