function orderProduct(login)
{
    return function(select){
        return function(price){
            return function(addToCart){
                return function(proceedToCheckout){
                    return function(orderConfirm){
                        console.log(`your ${select} order has been successfully placed, of total ${price}, will shortly reciceve the dispatch mail to ${login}`)
                    };
                
                };
            };
        };
    };
};

orderProduct("abc@gmail.com")("samsung s23")("70000")("added to cart")("proceeded for checkout")("successfully placed");
