// 1. Show me how to calculate the average price of all items. Please console.log the average.
// The average price is $23.63

function avePrice(items) {
    let arr = [];
    for(let object of items) {
        arr.push(object.price);
    };
    let sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum += arr[i];
    }; 
    sum = (sum / arr.length).toFixed(2); 
    console.log(sum);
    return sum;
    }
    avePrice(items);


    // 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.

    function itemArr(items) {
        let newArray = items.filter(function(object){
            return object.price = 14.00 && object.price <= 18.00;
        });
        console.log(newArray);
    }
        itemArr(items);

    // 3. Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

    function itemFind(items) {
        let item = items.filter(function(object) {
            return object['currency_code']==='GBP'
        });
        console.log(item[0].title, item[0].price);
    }
    itemFind(items);

    // 4. Show me how to find which items are made of wood. Please console.log the ones you find.

    function madeOfWood(items) {
        let woodenItems = items.filter(function(object) {
            return object.materials.includes('wood')});
        woodenItems.forEach(function(i) {
        return console.log(i.title)});
    };
    madeOfWood(items);

    // 5. Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

    function eightOrMore(items) {
        let overEight = items.filter(function(object) {
            return object.materials.length >= 8});
            overEight.forEach(function(i) {
                console.log(i.title);
            });
        };
        eightOrMore(items);

    // 6. Show me how to calculate how many items were made by their sellers. Please console.log your answer.

        function sellerMade(items) {
            let itemMade = items.filter(function(object) {
                return object.who_made === 'i_did'
            });
            console.log(itemMade.length);
        }
        sellerMade(items);