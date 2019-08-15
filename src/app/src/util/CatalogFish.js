import { shape, string, arrayOf } from 'prop-types';
import { Fish } from './Fish';

export const CatalogFish = shape({
    Fish,
    overview: arrayOf(string).isRequired,
    characteristics: arrayOf(string).isRequired,
    habitat: arrayOf(string),
    lifespan: arrayOf(string).isRequired,
});
