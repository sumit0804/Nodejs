function isPald(str){
    var length = (str.length /2);
    for ( i = 0; i < length ; i++) {
        if (str[i] != str[str.length - i -1]) {
            return false;
        } };
        return true;
};

console.log(isPald("1001"));
