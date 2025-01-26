
using System;
using System.Collections.Generic;

public class Solution
{
    private record Component(int index, int value) { }

    public int[] LexicographicallySmallestArray(int[] input, int limit)
    {
        Component[] indexToValue = new Component[input.Length];
        for (int i = 0; i < input.Length; ++i)
        {
            indexToValue[i] = new Component(i, input[i]);
        }
        Array.Sort(indexToValue, (x, y) => x.value - y.value);

        List<int> indexes = new List<int>();
        indexes.Add(indexToValue[0].index);

        List<int> values = new List<int>();
        values.Add(indexToValue[0].value);

        for (int i = 1; i < indexToValue.Length; ++i)
        {
            if (Math.Abs(indexToValue[i].value - values.Last()) <= limit)
            {
                indexes.Add(indexToValue[i].index);
                values.Add(indexToValue[i].value);
                continue;
            }

            UpdateInputWithSortedValues(input, indexes, values);

            indexes = new List<int>();
            indexes.Add(indexToValue[i].index);

            values = new List<int>();
            values.Add(indexToValue[i].value);
        }
        UpdateInputWithSortedValues(input, indexes, values);

        return input;
    }

    private void UpdateInputWithSortedValues(int[] input, List<int> indexes, List<int> values)
    {
        indexes.Sort();
        values.Sort();
        for (int i = 0; i < indexes.Count; ++i)
        {
            input[indexes[i]] = values[i];
        }
    }
}
