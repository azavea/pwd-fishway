import { shape, string } from 'prop-types';
import { Fish } from './Fish';

export const CatalogFish = shape({
    Fish,
    overview: string.isRequired,
    characteristics: string.isRequired,
    habitat: string,
    lifespan: string.isRequired,
});
