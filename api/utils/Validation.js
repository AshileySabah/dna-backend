class Validation {
  static validateIsArrayAsString(matrix) {
    try {
      const array = JSON?.parse(matrix);
      const isArray = Array?.isArray(array);
      return { array, isArray };
    } catch {
      return { array: null, isArray: false };
    }
  }

  static validateIsMultidimentionalArray(matrix) {
    for (let i = 0; i < matrix?.length; i++) {
      if (Array?.isArray(matrix[i])) {
        return true;
      }
    }
    return false;
  }

  static destructureMultidimentionalArray(matrix) {
    const flattened = [];
    for (let i = 0; i < matrix?.length; i++) {
      if (Array.isArray(matrix[i])) {
        flattened.push(...this?.destructureMultidimentionalArray(matrix[i]));
      } else {
        flattened.push(matrix[i]);
      }
    }
    return flattened;
  }

  static validateMatrixDimension(matrix) {
    const matrixLength = this?.destructureMultidimentionalArray(matrix)?.length;
    const dimension = Math.sqrt(matrixLength);
    if (Number?.isInteger(dimension) && dimension >= 3 && dimension <= 2000) {
      return true;
    }
    return false;
  }

  static treatMatrixParameter(matrix) {
    const errorMessages = {
      array: "The informed value is not a array.",
      multidimensional: "This array is not a multidimentional array.",
      dimension:
        "This multidimentional array does not have the dimension between 3 and 2000.",
    };

    const checkArray = this?.validateIsArrayAsString(matrix);
    const checkMultidimentional = this?.validateIsMultidimentionalArray(
      checkArray?.array,
    );
    const checkDimension = this?.validateMatrixDimension(checkArray?.array);

    if (!checkArray?.isArray) {
      throw { message: errorMessages?.array, status: 404 };
    }

    if (!checkMultidimentional) {
      throw { message: errorMessages?.multidimensional, status: 404 };
    }

    if (!checkDimension) {
      throw { message: errorMessages?.dimension, status: 404 };
    }

    return checkArray?.array;
  }
}

module.exports = Validation;
