const ShortTittles = (props) =>{
    const splitTittle = props.split(" ");
    const newTittle = `${splitTittle[0]} ${splitTittle[1]} ${splitTittle[2]}`
    return newTittle ;
}

const isInCart = (state , id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result;
}

const quantitycount = (state , id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if(index === -1){
        return false
    } else {
        return state.selectedItems[index].quantity;
    }

}

export {ShortTittles , isInCart , quantitycount};