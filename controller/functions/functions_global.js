function getElementHeight(element) {
    if (element) {
        var height = window.getComputedStyle(element).getPropertyValue("height");
        if (height) {
            return height;
        }
        console.error(`${element.id}: cannot get the input element height`);
    }
    console.error('invalid input')
    return null
}




export {
    getElementHeight,
};