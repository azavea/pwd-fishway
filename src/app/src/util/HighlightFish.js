import { shape, string, number, bool } from 'prop-types';
import { Fish } from './Fish';

export const HighlightFish = shape({
    Fish,
    timestamp: number.isRequired,
    notes: string.isRequired,
    isLiveFeed: bool,
});
