$(function () {
    simpleCart({

        // array representing the format and columns of the cart, see
        // the cart columns documentation
        cartColumns: [
            { attr: "name", label: "Produkt" },
            { attr: "price", label: "Pris", view: 'currency' },
            { view: "decrement", label: false },
            { attr: "quantity", label: "Antal" },
            { view: "increment", label: false },
            { attr: "total", label: "Pris", view: 'currency' },
            { view: "remove", text: "Radera", label: false }
        ],

        // "div" or "table" - builds the cart as a table or collection of divs
        cartStyle: "div",

        // how simpleCart should checkout, see the checkout reference for more info
        checkout: {
            type: "PayPal",
            email: "alexxnaga@gmail.com"
        },

        // set the currency, see the currency reference for more info
        currency: "SEK",

        // collection of arbitrary data you may want to store with the cart,
        // such as customer info
        data: {},

        // set the cart langauge (may be used for checkout)
        language: "swedish-se",

        // array of item fields that will not be sent to checkout
        excludeFromCheckout: [
            'qty',
            'thumb'
        ],

        // custom function to add shipping cost
        shippingCustom: null,

        // flat rate shipping option
        shippingFlatRate: 29,

        // added shipping based on this value multiplied by the cart quantity
        shippingQuantityRate: 0,

        // added shipping based on this value multiplied by the cart subtotal
        shippingTotalRate: 0,

        // tax rate applied to cart subtotal
        taxRate: 0,

        // true if tax should be applied to shipping
        taxShipping: false,

        // event callbacks
        beforeAdd: null,
        afterAdd: null,
        load: null,
        beforeSave: null,
        afterSave: null,
        update: null,
        ready: null,
        checkoutSuccess: null,
        checkoutFail: null,
        beforeCheckout: null

    });

    simpleStore.init({

        // brand can be text or image URL
        brand: "https://raw.githubusercontent.com/hw-nu/hw/master/hw_logo.png",
        // brand: "HighView.nu",

        // numder of products per row (accepts 1, 2 or 3)
        numColumns: 3,

        // name of JSON file, located in directory root
        JSONFile: "products.json"

    });

});
