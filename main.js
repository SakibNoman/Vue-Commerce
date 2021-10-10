const app = Vue.createApp({
    data() {
        return {
            products: null,
            filterValue: '',
            json: null,
            showFilterMsg: false,
            searchValue: '',
        }
    },
    methods: {
        onSubmit() {
            if (this.searchValue.length > 0) {
                const filteredProduct = this.json.filter(each => each.name.toLowerCase().includes(this.searchValue.toLowerCase()))
                this.filterValue = this.searchValue;
                this.products = filteredProduct;
                this.showFilterMsg = true;
            }
            else {
                this.products = this.json;
                this.showFilterMsg = false
            }
        },
        filterWithRating(star) {
            const filteredProduct = this.json.filter(each => each.star >= star)
            this.products = filteredProduct;
            this.filterValue = star + ' star rating and up';
            this.showFilterMsg = true;
        },
        filterWithPrice(minPrice, maxPrice) {
            const filteredProduct = this.json.filter(each => each.price >= minPrice && each.price <= maxPrice)
            this.products = filteredProduct;
            this.filterValue = 'price between $' + minPrice + ' and $' + maxPrice;
            this.showFilterMsg = true;
        },
        clearFilter() {
            this.products = this.json;
            this.showFilterMsg = false;
            this.searchValue = ''
        }
    },
    created: function () {
        fetch("./android.json")
            .then(res => res.json())
            .then(json => {
                this.json = json;
                this.products = json
            })
    }

})
