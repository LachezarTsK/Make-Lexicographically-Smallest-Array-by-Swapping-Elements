
#include <span>
#include <cmath>
#include <vector>
#include <ranges>
using namespace std;

class Solution {

    struct Component {
        int index{};
        int value{};

        Component() = default;
        Component(int index, int value) : index{ index }, value{ value } {}
    };

public:
    vector<int> lexicographicallySmallestArray(vector<int>& input, int limit) const {
        vector<Component> indexToValue(input.size());
        for (int i = 0; i < input.size(); ++i) {
            indexToValue[i] = Component(i, input[i]);
        }

        // prior to C++20: sort(vectorName.begin(), vectorName.end(), comparator);
        ranges::sort(indexToValue, [](const auto& x, const auto& y) {return x.value < y.value;});

        vector<int> indexes;
        indexes.push_back(indexToValue[0].index);

        vector<int> values;
        values.push_back(indexToValue[0].value);

        for (int i = 1; i < indexToValue.size(); ++i) {
            if (abs(indexToValue[i].value - values.back()) <= limit) {
                indexes.push_back(indexToValue[i].index);
                values.push_back(indexToValue[i].value);
                continue;
            }

            updateInputWithSortedValues(input, indexes, values);

            indexes.clear();
            indexes.push_back(indexToValue[i].index);

            values.clear();
            values.push_back(indexToValue[i].value);
        }
        updateInputWithSortedValues(input, indexes, values);

        return input;
    }

private:
    void updateInputWithSortedValues(span<int> input, span<int> indexes, span<int> values) const {

        // prior to C++20: sort(vectorName.begin(), vectorName.end());
        ranges::sort(indexes);
        ranges::sort(values);
        for (int i = 0; i < indexes.size(); ++i) {
            input[indexes[i]] = values[i];
        }
    }
};
