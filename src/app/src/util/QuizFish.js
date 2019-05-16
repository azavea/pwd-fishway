import { shape, string } from 'prop-types';

export const QuizFish = shape({
    commonName: string.isRequired,
    scientificName: string.isRequired,
    picturePath: string.isRequired,
    videoPath: string.isRequired,
    hint: string.isRequired,
});
