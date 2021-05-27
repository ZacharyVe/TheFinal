Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

Hint: Convert the string to an array and then loop over the array.

See example below ...

```
    This is a string
    There was string
      ^^^^^^^          <-- 7 differences
```

In the above example, the function should return 7.

### Answer:

function equal(str1, str2) {
    <!-- If equal show zero difference -->
    if (str1 === str2) {
        return 0;
    }
      <!-- If different length false -->
    if (str1.length != str2.length) {
        return false;
    } else {
    <!-- use a var to count difference, and the var for index -->
    var numDiffChar = 0;
    var index = 0;
    <!-- iterate -->
    while (index < str1.length) {
      <!-- compare values -->
        if (str1.charAt(index) !== str2.charAt(index)) {
          <!-- update counter -->
            numDiffChar++;
            index++;
        } else {
            index++;
        };
        <!-- show result -->
    } return numDiffChar;
  }
};
equal("This is a string", "There was string");