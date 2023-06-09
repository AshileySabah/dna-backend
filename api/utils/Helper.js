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
    const rightBottomToLeftTop = this?.getOneSideDiagonal(matrix);
    const leftBottomToRighttop = this?.getOneSideDiagonal(
      this?.reverseMultidimentionalArray(matrix),
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
    const diagonalArray = this?.getDiagonal(matrix);
    const verticalArray = this?.getVertical(matrix);

    let diagonalOccurrences = 0;
    for (let i = 0; i < diagonalArray?.length; i++) {
      const checkAnomaliesDiagonal = this?.checkEqualAndConsecutiveItems(
        diagonalArray[i],
      );
      if (checkAnomaliesDiagonal) {
        diagonalOccurrences += 1;
      }
    }

    let verticalOccurrences = 0;
    for (let i = 0; i < verticalArray?.length; i++) {
      const checkAnomaliesVertical = this?.checkEqualAndConsecutiveItems(
        verticalArray[i],
      );
      if (checkAnomaliesVertical) {
        verticalOccurrences += 1;
      }
    }

    let horizontalOccurrences = 0;
    for (let i = 0; i < matrix?.length; i++) {
      const checkAnomaliesHorizontal = this?.checkEqualAndConsecutiveItems(
        matrix[i],
      );
      if (checkAnomaliesHorizontal) {
        horizontalOccurrences += 1;
      }
    }

    const allOccurrences =
      diagonalOccurrences + verticalOccurrences + horizontalOccurrences;

    return {
      diagonalOccurrences,
      verticalOccurrences,
      horizontalOccurrences,
      allOccurrences,
    };
  }
}

module.exports = Helper;
