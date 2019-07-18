import { shape, string } from 'prop-types';
import { Fish } from './Fish';

export const QuizFish = shape({
    Fish,
    videoPath: string.isRequired,
    hint: string.isRequired,
});
