import { shape, string } from 'prop-types';

export const CatalogFish = shape({
    commonName: string.isRequired,
    scientificName: string.isRequired,
    picturePath: string.isRequired,
    overview: string.isRequired,
    characteristics: string.isRequired,
    habitat: string,
    lifespan: string.isRequired,
});
