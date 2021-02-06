const replaced = {
    'М': 'M', 'м': 'ᴍ',
    'О': 'O', 'о': 'o',
    'С': 'С', 'с': 'c',
    'А': 'A', 'а': 'a'
};

const everyReplaceableLetter = /[МмОоСсАа]/g;
const everyNumber = /([0-9])/g;

export const conceal = (text: string) => text
    .replace(everyReplaceableLetter, letter => replaced[letter])
    .replace(everyNumber, '$1\u00AD');//soft hyphen &shy;

export default conceal