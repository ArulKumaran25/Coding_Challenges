function commonPrefix(str) {
    if (str.length === 0)
        return " ";
    var prefix = str[0];
    for (var i = 1; i < str.length; i++) {
        while (str[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "")
                return "";
        }
    }
    return prefix;
}
var str1 = ["flower", "fly", "flight"];
console.log((commonPrefix(str1)));
