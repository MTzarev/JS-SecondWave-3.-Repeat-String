function repeatString(str, count) {
    // let res = str.repeat(count);
    // return res;
    //console.log(res);
    let newArr = [];
    for (let i = 0; i < count; i++) {
        // let word = str;
        newArr.push(str);

    }
    console.log(newArr.join(``));
}
repeatString("String", 2);