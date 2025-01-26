
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Solution {

    private record Component(int index, int value){}

    public int[] lexicographicallySmallestArray(int[] input, int limit) {
        Component[] indexToValue = new Component[input.length];
        for (int i = 0; i < input.length; ++i) {
            indexToValue[i] = new Component(i, input[i]);
        }
        Arrays.sort(indexToValue, (x, y) -> x.value - y.value);

        List<Integer> indexes = new ArrayList<>();
        indexes.add(indexToValue[0].index);

        List<Integer> values = new ArrayList<>();
        values.add(indexToValue[0].value);

        for (int i = 1; i < indexToValue.length; ++i) {
            if (Math.abs(indexToValue[i].value - values.getLast()) <= limit) {
                indexes.add(indexToValue[i].index);
                values.add(indexToValue[i].value);
                continue;
            }

            updateInputWithSortedValues(input, indexes, values);

            indexes = new ArrayList<>();
            indexes.add(indexToValue[i].index);

            values = new ArrayList<>();
            values.add(indexToValue[i].value);
        }
        updateInputWithSortedValues(input, indexes, values);

        return input;
    }

    private void updateInputWithSortedValues(int[] input, List<Integer> indexes, List<Integer> values) {
        Collections.sort(indexes);
        Collections.sort(values);
        for (int i = 0; i < indexes.size(); ++i) {
            input[indexes.get(i)] = values.get(i);
        }
    }
}
