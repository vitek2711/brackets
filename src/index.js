// const bracketsConfig1 = [['(', ')']];
// const bracketsConfig2 = [['(', ')'], ['[', ']']];
// const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];
// const bracketsConfig4 = [['|', '|']];
// const bracketsConfig5 = [['(', ')'], ['|', '|']];
// const bracketsConfig = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// let str = '88888778788877777788888887777777887887788788887887777777788888888887788888'

module.exports =function check(str, bracketsConfig) {
    let stackItems = [];
    bracketsConfig.map((e) => {
        stackItems.push(e.join(""));
    });
    // console.log(stackItems);

    for (let j = 0; j < stackItems.length; j++) {
        if (str.includes(stackItems[j])) {
            str = str.replace(stackItems[j], "");
            j = -1;
            // console.log(str);
        };
    };
    return str.length === 0;
}

// check(str, bracketsConfig)
