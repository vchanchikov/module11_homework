let evenElements = oddElements = nullElements = otherElements = 0; 

function countElementTypes(array) { 
for (let item of array) {
  if (typeof(item) === 'number' && isNaN(item) === false) {
    if (item === 0) {
      nullElements++;
    } else {
      if (item % 2 === 0) {
        evenElements++;
      } else {
        oddElements++;
      }
    }
  } else {
    otherElements++;
  }
}
console.log(`Четных элементов - ${evenElements}, 
нечетных элементов - ${oddElements}, 
нулевых элементов - ${nullElements}, 
других элементов - ${otherElements}.`);
evenElements = oddElements = nullElements = otherElements = 0; 
}

const arr = [1, 5, 0, 4, 7, 9, 'bib'];
countElementTypes(arr);

const mass = [0, 123, 0, 44, 7.1, 9, 'abc', NaN];
countElementTypes(mass);