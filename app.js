//39

var combinationSum = function(candidates, target) {
    return rec(candidates, target, 1, 0, [])
};

function rec(candidates, target, num, sum, arr){
    let results = []
    for(let i=0; i < candidates.length; i++){
        const c = candidates[i]
        if(c >= num){
            const s = sum + c
            if(s === target){
                results.push(arr.concat([c]))
            } else if(s < target){
                const arrs = rec(candidates, target, c, s, arr.concat([c]))
                results = results.concat(arrs)
            }
        }
    }
    return results
}