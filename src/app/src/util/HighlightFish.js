import { shape, string, number } from 'prop-types';

export const HighlightFish = shape({
    commonName: string.isRequired,
    scientificName: string.isRequired,
    picturePath: string.isRequired,
    timestamp: number.isRequired,
    notes: string.isRequired,
});
