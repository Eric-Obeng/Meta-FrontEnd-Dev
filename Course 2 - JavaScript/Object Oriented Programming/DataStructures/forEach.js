const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruits, index) {
    console.log(`${index}. ${fruits}`)
}
fruits.forEach(appendIndex)

console.log('\n') //jump to next line

//Very often, the function that the forEach() method needs to use is passed in directly into the method call, like this:
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});