
function mergeSort(nums){
    if(nums.length < 2){
        return nums;
    }
    let mid = Math.floor(nums.length/2);
    let subLeft = mergeSort(nums.slice(0,mid));
    let subRight = mergeSort(nums.slice(mid));

    return merge(subLeft,subRight);
};

function merge(node1, node2) {
    var result = [];
    while(node1.length>0 && node2.length>0){
        result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
        }
    return result.concat(node1.length ? node1 : node2);
};

console.log(mergeSort(nums));
