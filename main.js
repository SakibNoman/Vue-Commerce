const app = Vue.createApp({
    data() {
        return {
            products: null,
            filterValue: '',
            json: null

        }
    },
    methods: {
        onSubmit() {
            if (this.filterValue.length > 0) {
                const filteredProduct = this.json.filter(each => each.name.toLowerCase().includes(this.filterValue.toLowerCase()))
                this.products = filteredProduct;
            }
            else {
                this.products = this.json;
            }
        },
        filterWithRating(star) {
            const filteredProduct = this.json.filter(each => each.star >= star)
            this.products = filteredProduct;
        },
        filterWithPrice(minPrice, maxPrice) {
            const filteredProduct = this.json.filter(each => each.price >= minPrice && each.price <= maxPrice)
            this.products = filteredProduct;
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
