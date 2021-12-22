export const getNumbers = (M, N) => {
    let elementIndexes = {};
    for (let indexOfM = 0; indexOfM < M.length; indexOfM++) {
      elementIndexes[M[indexOfM]] = elementIndexes[M[indexOfM]]
        ? [...elementIndexes[M[indexOfM]], indexOfM]
        : [indexOfM];
    }
    for (let indexOfM = 0; indexOfM < M.length; indexOfM++) {
      let elementToFind = N - M[indexOfM];
      let elementToFindIndex = elementIndexes[elementToFind]?.find(
        (elementIndex) => elementIndex !== indexOfM
      );
      if (elementToFindIndex) return [M[indexOfM], M[elementToFindIndex]];
    }
    return [];
  };