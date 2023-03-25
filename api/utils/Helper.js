class Helper {
  static getVertical(matrix) {
    const dimension = matrix?.length;
    const verticalArrays = [];
    for (let column = 0; column < dimension; column++) {
      const eachVerticalArrays = [];
      for (let row = 0; row < dimension; row++) {
        eachVerticalArrays?.push(matrix[row][column]);
      }
      verticalArrays?.push(eachVerticalArrays);
    }
    return verticalArrays;
  }

  static reverseMultidimentionalArray(matrix) {
    const dimension = matrix?.length;
    const newMatrix = [];
    for (let i = 0; i < dimension; i++) {
      const reverseArray = matrix[i]?.reverse();
      newMatrix?.push(reverseArray);
    }
    return newMatrix;
  }

  static getOneSideDiagonal(matrix) {
    const dimension = matrix?.length;
    const diagonalArrays = [];

    const mainDiagonal = [];
    for (let i = 0; i < dimension; i++) {
      mainDiagonal?.push(matrix[i][dimension - i - 1]);
    }
    if (mainDiagonal?.length >= 3) {
      diagonalArrays?.push(mainDiagonal);
    }

    for (let i = 1; i < dimension - 1; i++) {
      const diagonal1 = [];
      const diagonal2 = [];
      for (let j = 0; j <= i; j++) {
        diagonal1?.push(matrix[i - j][j]);
        diagonal2?.push(matrix[dimension - 1 - i + j][dimension - 1 - j]);
      }
      if (diagonal1?.length >= 3) {
        diagonalArrays?.push(diagonal1);
      }
      if (diagonal2?.length >= 3) {
        diagonalArrays?.push(diagonal2);
      }
    }

    return diagonalArrays;
  }

  static getDiagonal(matrix) {
    const rightBottomToLeftTop = getOneSideDiagonal(matrix);
    const leftBottomToRighttop = getOneSideDiagonal(
      reverseMultidimentionalArray(matrix),
    );
    return [...rightBottomToLeftTop, ...leftBottomToRighttop];
  }

  static checkEqualAndConsecutiveItems(array) {
    for (let i = 0; i < array?.length - 2; i++) {
      if (array[i] === array[i + 1] && array[i + 1] === array[i + 2]) {
        return true;
      }
    }
    return false;
  }

  static checkAnomalies(matrix) {
    const diagonalArray = getDiagonal(matrix);
    const verticalArray = getVertical(matrix);

    const diagonalOccurrences = [];
    for (let i = 0; i < diagonalArray?.length; i++) {
      const checkAnomaliesDiagonal = checkEqualAndConsecutiveItems(
        diagonalArray[i],
      );
      if (checkAnomaliesDiagonal) {
        diagonalOccurrences?.push(1);
      }
    }

    const verticalOccurrences = [];
    for (let i = 0; i < verticalArray?.length; i++) {
      const checkAnomaliesVertical = checkEqualAndConsecutiveItems(
        verticalArray[i],
      );
      if (checkAnomaliesVertical) {
        verticalOccurrences?.push(1);
      }
    }

    const horizontalOccurrences = [];
    for (let i = 0; i < matrix?.length; i++) {
      const checkAnomaliesHorizontal = checkEqualAndConsecutiveItems(matrix[i]);
      if (checkAnomaliesHorizontal) {
        horizontalOccurrences?.push(1);
      }
    }

    return {
      diagonalOccurrences: diagonalOccurrences?.length,
      verticalOccurrences: verticalOccurrences?.length,
      horizontalOccurrences: horizontalOccurrences?.length,
    };
  }
}

module.exports = Helper;
