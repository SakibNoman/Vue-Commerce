const mainProducts = ['Apple', 'Google', 'Amazon', 'Facebook', 'WhatsApp']
const app = Vue.createApp({
    data() {
        return {
            products: mainProducts,
            filterValue: '',
            json: null

        }
    },
    methods: {
        onSubmit() {
            if (this.filterValue.length > 0) {
                const filteredProduct = mainProducts.filter(each => each.toLowerCase().includes(this.filterValue.toLowerCase()))
                this.products = filteredProduct;
            }
            else {
                this.products = mainProducts;
            }
        }
    },
    created: function () {
        fetch("./android.json")
            .then(r => r.json())
            .then(json => {
                this.json = json;
                this.products = json
            })
    }

})
