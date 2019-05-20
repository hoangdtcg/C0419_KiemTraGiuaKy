let array=[a,b,c,s,a,s,e,qa,zs,asd,as,z,a];
let A="a";
let count=0;
for (let i=0;i<array.length;i++) {
    if (A===array[i]) {
        count++;
    }
    else {
        return -1;
    }
}
console.log(count);