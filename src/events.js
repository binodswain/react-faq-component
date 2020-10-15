const evt = {
    return: 13,
    arrowLeft: 37,
    arrowUp: 38,
    arrowRight: 39,
    arrowDown: 40,
    space: 32,
};

evt.keyCodes = Object.keys(evt).reduce((obj, name) => {
    obj[evt[name]] = name;
    return obj;
}, {});

export default evt;
