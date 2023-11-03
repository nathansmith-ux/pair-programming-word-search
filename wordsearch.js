const wordSearch = (letters, word) => {
    // Check if array is empty
    if (letters.length === 0) {
      return false;
    }
  
    // Check horizontally
    for (let row = 0; row < letters.length; row++) {
      const horizontalWord = letters[row].join('');
      if (horizontalWord.includes(word)) return true;
    }
  
    // Check vertically
    for (let col = 0; col < letters[0].length; col++) {
      let verticalWord = '';
      for (let row = 0; row < letters.length; row++) {
        verticalWord += letters[row][col];

        if (verticalWord.length > word.length) {
          break;
        }
        
        if (verticalWord === word) {
          return true;
        }
      }
    }
  
    return false;
  };
  
  module.exports = wordSearch;
  