/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolCount) {

};


/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest =  function nearest(z, x, y) {
    let zDifferencex, zDifferencey;

    if (z - x >= 0) {
        zDifferencex = z - x;
    } else {
        zDifferencex = x - z;
    }

    if (z - y >= 0) {
        zDifferencey = z - y;
    } else {
        zDifferencey = y - z;
    }

    let result;

    if (zDifferencex <= zDifferencey) {
        result = x;
    } else {
        result = y;
    }

    return result;
};
/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    // Your implementation here
    const resArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (resArray.indexOf(arr[i]) === -1) {
            resArray.push(arr[i]);
        }
    }

    return resArray;
};
