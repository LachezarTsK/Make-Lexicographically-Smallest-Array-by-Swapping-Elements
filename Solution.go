
package main

import (
    "math"
    "slices"
    "sort"
)

func lexicographicallySmallestArray(input []int, limit int) []int {
    indexToValue := make([]Component, len(input))
    for i := range len(input) {
        indexToValue[i] = NewComponent(i, input[i])
    }
    sort.Slice(indexToValue, func(x int, y int) bool { return indexToValue[x].value < indexToValue[y].value })

    indexes := make([]int, 1)
    indexes[0] = indexToValue[0].index

    values := make([]int, 1)
    values[0] = indexToValue[0].value

    for i := 1; i < len(indexToValue); i++ {
        if int(math.Abs(float64(indexToValue[i].value-values[len(values)-1]))) <= limit {
            indexes = append(indexes, indexToValue[i].index)
            values = append(values, indexToValue[i].value)
            continue
        }

        updateInputWithSortedValues(input, indexes, values)

        indexes = make([]int, 1)
        indexes[0] = indexToValue[i].index

        values = make([]int, 1)
        values[0] = indexToValue[i].value
    }
    updateInputWithSortedValues(input, indexes, values)

    return input
}

type Component struct {
    index int
    value int
}

func NewComponent(index int, value int) Component {
    component := Component{
        index: index,
        value: value,
    }
    return component
}

func updateInputWithSortedValues(input []int, indexes []int, values []int) {
    slices.Sort(indexes)
    slices.Sort(values)
    for i := range indexes {
        input[indexes[i]] = values[i]
    }
}
