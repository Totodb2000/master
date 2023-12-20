/*Write a function that  returns true when its arguments are arrays having the same nesting structures and same corresponding length of nested arrays.

Examples

 // should return true
sameStructureAs( [ 1, 1, 1 ], [ 2, 2, 2 ] )          
sameStructureAs( [ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ] )

 // should return false 
sameStructureAs( [ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ] )  
sameStructureAs( [ 1, [ 1, 1 ] ], [ [ 2 ], 2 ] ) 

// should return true
sameStructureAs( [ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ] ) 

// should return false
sameStructureAs( [ [ [ ], [ ] ] ], [ [ 1, 1 ] ] )*/

let arr1= [1,[21,3],5];
let arr2=[1,[2,2],5];

    function sameStructureAs(arr1, arr2) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
            return false;
        }
    
        for (let i = 0; i < arr1.length; i++) {
            if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
                if (!sameStructureAs(arr1[i], arr2[i])) {
                    return false;
                }
            } else if (!Array.isArray(arr1[i]) && Array.isArray(arr2[i]) ||
                       Array.isArray(arr1[i]) && !Array.isArray(arr2[i])) {
                return false;
            }
        }

        return true;
    }

console.log(sameStructureAs(arr1,arr2))