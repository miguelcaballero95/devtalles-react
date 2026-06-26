export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowedErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}

export type ScrambleWordsAction =
  | { type: 'SET_GUESS', payload: string }
  | { type: 'ATTEMPT' }
  | { type: 'SKIP' }
  | { type: 'START_OVER', payload: ScrambleWordsState };

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = (): ScrambleWordsState => {

  const shuffledWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowedErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length
  }
}

export const scrambleWordReducer = (state: ScrambleWordsState, action: ScrambleWordsAction) => {

  switch (action.type) {
    case 'ATTEMPT': {

      if (state.guess === state.currentWord) {

        const newWords = state.words.slice(1);

        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: '',
          currentWord: newWords[0],
          scrambledWord: scrambleWord(newWords[0])
        }
      }

      return {
        ...state,
        guess: '',
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowedErrors
      }

    }
    case 'SKIP': {

      if (state.skipCounter >= state.maxSkips) return state;

      const updatedWords = state.words.slice(1);

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updatedWords,
        currentWord: updatedWords[0],
        scrambledWord: scrambleWord(updatedWords[0]),
        guess: ''
      }
    }
    case 'START_OVER': {
      return action.payload;
    }
    case 'SET_GUESS': {
      return {
        ...state,
        guess: action.payload.trim().toUpperCase()
      }
    }
    default:
      return state;
  }

}