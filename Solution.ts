
function lexicographicallySmallestArray(input: number[], limit: number): number[] {
    const indexToValue = new Array<Component>(input.length);
    for (let i = 0; i < input.length; ++i) {
        indexToValue[i] = new Component(i, input[i]);
    }
    indexToValue.sort((x, y) => x.value - y.value);

    let indexes = new Array<number>();
    indexes.push(indexToValue[0].index);

    let values = new Array<number>();
    values.push(indexToValue[0].value);

    for (let i = 1; i < indexToValue.length; ++i) {
        if (Math.abs(indexToValue[i].value - values[values.length - 1]) <= limit) {
            indexes.push(indexToValue[i].index);
            values.push(indexToValue[i].value);
            continue;
        }

        updateInputWithSortedValues(input, indexes, values);

        indexes = new Array<number>();
        indexes.push(indexToValue[i].index);

        values = new Array<number>();
        values.push(indexToValue[i].value);
    }
    updateInputWithSortedValues(input, indexes, values);

    return input;
};

class Component {

    index: number;
    value: number;

    constructor(index: number, value: number) {
        this.index = index;
        this.value = value;
    }
}

function updateInputWithSortedValues(input: number[], indexes: number[], values: number[]): void {
    indexes.sort((x, y) => x - y);
    values.sort((x, y) => x - y);
    for (let i = 0; i < indexes.length; ++i) {
        input[indexes[i]] = values[i];
    }
}
