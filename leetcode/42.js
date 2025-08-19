// ?Traping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trap(height));

/*
3   !                               |
2   !               |    W  W   W   |   |   W   |   
1   !       |   W   |   |   W   |   |   |   |   |   |
0   !------------------------------------------------------->
        0   1   0   2   1   0   1   3   2   1   2   1

        W = Water trapped
        | = Column
*/
