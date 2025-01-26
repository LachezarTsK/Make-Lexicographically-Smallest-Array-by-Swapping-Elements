
/**
 * @param {number[]} input
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (input, limit) {
    const indexToValue = new Array(input.length);
    for (let i = 0; i < input.length; ++i) {
        indexToValue[i] = new Component(i, input[i]);
    }
    indexToValue.sort((x, y) => x.value - y.value);

    let indexes = new Array();
    indexes.push(indexToValue[0].index);

    let values = new Array();
    values.push(indexToValue[0].value);

    for (let i = 1; i < indexToValue.length; ++i) {
        if (Math.abs(indexToValue[i].value - values[values.length - 1]) <= limit) {
            indexes.push(indexToValue[i].index);
            values.push(indexToValue[i].value);
            continue;
        }

        updateInputWithSortedValues(input, indexes, values);

        indexes = new Array();
        indexes.push(indexToValue[i].index);

        values = new Array();
        values.push(indexToValue[i].value);
    }
    updateInputWithSortedValues(input, indexes, values);

    return input;
};

/**
 * @param {number} index
 * @param {number} value
 */
function Component(index, value) {
    this.index = index;
    this.value = value;
}

/**
 * @param {number[]} input
 * @param {number[]} indexes
 * @param {number[]} values
 * @return {void}
 */
function updateInputWithSortedValues(input, indexes, values) {
    indexes.sort((x, y) => x - y);
    values.sort((x, y) => x - y);
    for (let i = 0; i < indexes.length; ++i) {
        input[indexes[i]] = values[i];
    }
}
