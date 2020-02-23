const addSub = (input1, input2) => {
    if (input1 < input2) {
        return input1 + input2;
    } else if (input1 > input2) {
        return input1 - input2;
    }
    return 0;
};

export default {addSub};
