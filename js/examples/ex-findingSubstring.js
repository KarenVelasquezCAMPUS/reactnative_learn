// Finding Subtring Indices

const stringArray = ['apple', 'banana', 'orange', 'grape', 'banana', 'kiwi'];
const target = 'banana';

function findStringIndicesInArray (array, target) {
    const result = {
        includesTargetString: false,
        firstOccurrenceIndex: -1,
        lastOccurrenceIndex: -1
    }

    array.forEach((element, index) => {
        if (element.includes(target)) {
            result.includesTargetString = true;
            result.firstOccurrenceIndex = array.indexOf(target);
            result.lastOccurrenceIndex = array.lastIndexOf(target)
        }
    });
    return result;
};

const result = findStringIndicesInArray(stringArray, target);
console.log(result);