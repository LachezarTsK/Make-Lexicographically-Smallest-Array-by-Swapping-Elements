
import kotlin.math.abs

class Solution {

    private data class Component(val index: Int, val value: Int) {}

    fun lexicographicallySmallestArray(input: IntArray, limit: Int): IntArray {
        val indexToValue = arrayOfNulls<Component>(input.size)
        for (i in input.indices) {
            indexToValue[i] = Component(i, input[i])
        }
        indexToValue.sortWith() { x, y -> x!!.value - y!!.value }

        var indexes = ArrayList<Int>()
        indexes.add(indexToValue[0]!!.index)

        var values = ArrayList<Int>()
        values.add(indexToValue[0]!!.value)

        for (i in 1..<indexToValue.size) {
            if (abs(indexToValue[i]!!.value - values.last()) <= limit) {
                indexes.add(indexToValue[i]!!.index)
                values.add(indexToValue[i]!!.value)
                continue
            }

            updateInputWithSortedValues(input, indexes, values)

            indexes = ArrayList<Int>()
            indexes.add(indexToValue[i]!!.index)

            values = ArrayList<Int>()
            values.add(indexToValue[i]!!.value)
        }
        updateInputWithSortedValues(input, indexes, values)

        return input
    }

    private fun updateInputWithSortedValues(input: IntArray, indexes: ArrayList<Int>, values: ArrayList<Int>): Unit {
        indexes.sort()
        values.sort()
        for (i in indexes.indices) {
            input[indexes[i]] = values[i]
        }
    }
}
