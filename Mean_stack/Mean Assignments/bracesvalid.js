function bracesValid(par){
    dict={
        '{':'}',
        '(':')',
        '[':']',
    }
    opens = ['{','[','(']
    track=[]
    
    function isEmpty(thing){
        return (thing.length == 0)
        }

    for(i=0;i<par.length;i++){
        if(opens.includes(par[i])){
                track.push(par[i])
        }else{
            if (par[i]!=dict[track.pop()]){
                return false;
            }
        }
    }
    return (isEmpty(track))
}
console.log(bracesValid('{()}'))