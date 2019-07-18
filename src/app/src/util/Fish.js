import { shape, string } from 'prop-types';

export const Fish = shape({
    commonName: string.isRequired,
    scientificName: string.isRequired,
    picturePath: string.isRequired,
});
