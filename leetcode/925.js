// ?Long Pressed Name
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let i = 0;
    let j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            j++;
        } else {
            return false;
        }
        console.log("insideLoop: ",i === name.length);
    }
    console.log("outsideLoop: ",i === name.length);
    return i === name.length;
};
console.log(isLongPressedName("alex", "aalelexx"));
