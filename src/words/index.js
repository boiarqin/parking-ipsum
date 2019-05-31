import CARS from './cars';
import CAR_PARTS from './car-parts';
import DRIVING from './driving';
import ONOMATOPOEIA from './onomatopoeia';
import PHRASES from './phrases';
import ROADS from './roads';
import SENTENCES from './sentences';
import SPEED from './speed';
import STARTUP from './startup';
import VALUES from './values';

const WORDS = {
    wordsAndPhrases: [
        ...CARS,
        ...CAR_PARTS,
        ...DRIVING,
        ...ONOMATOPOEIA,
        ...PHRASES,
        ...ROADS,
        ...SPEED,
        ...STARTUP,
        ...VALUES
    ],
    sentences: SENTENCES
};

export default WORDS;