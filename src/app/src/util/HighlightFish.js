import { shape, string, number } from 'prop-types';

export const HighlightFish = shape({
    commonName: string.isRequired,
    scientificName: string,
    picturePath: string,
    timestamp: number.isRequired,
    notes: string.isRequired,
});
