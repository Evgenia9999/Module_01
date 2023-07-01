const nameItem = 'Phone';
let numItem = 5;
const category = 'Gadgets';
let price = 10000;

// console.log(nameItem);
// console.log(`общая сумма товара: ${numItem * price}`);

{
    const nameItem1 = 'Apple';
    let numItem1 = 3;
    const category1 = 'Fruits';
    let price1 = 10;
    
    // console.log(nameItem1);
    // console.log(`общая сумма товара: ${numItem1 * price1}`);
}

{
    const itemNamePeompt = prompt('Напишите наименование товара');
    console.log(typeof itemNamePeompt);
    console.log(itemNamePeompt);
    const itemNumPrompt = +prompt('Напишите количество товара');
    console.log(typeof itemNumPrompt);
    console.log(itemNumPrompt);
    const itemCategoryPrompt = prompt('Напишите категорию товара');
    console.log(typeof itemCategoryPrompt);
    console.log(itemCategoryPrompt);
    const itemtPricePrompt = +prompt('Напишите цену товара');
    console.log(typeof itemtPricePrompt);
    console.log(itemtPricePrompt);
console.log(`На складе ${itemNumPrompt} единицы товара ${itemNamePeompt} на сумму ${itemtPricePrompt * itemNumPrompt} у.е.`);

}