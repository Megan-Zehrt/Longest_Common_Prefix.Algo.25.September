// 14. Longest Common Prefix



// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".








/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // If the array is empty, return an empty string.
    
    let prefix = strs[0]; // Start with the first string as the reference prefix.
    
    for (let i = 1; i < strs.length; i++) {
        // Loop through each string and update the prefix.
        while (strs[i].indexOf(prefix) !== 0) {
            // If the current string doesn't start with the prefix, remove the last character from the prefix.
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // If no common prefix, return an empty string.
        }
    }
    
    return prefix;
};
