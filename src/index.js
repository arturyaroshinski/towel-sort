module.exports = function towelSort(matrix) {
    if (typeof matrix === "undefined" || matrix.length === 0) return [];

    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 === 0) {
            matrix[i].reverse().forEach((val) => res.push(val));
        } else {
            matrix[i].forEach((val) => res.push(val));
        }
    }

    return res;
};
