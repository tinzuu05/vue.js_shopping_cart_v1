var vm = new Vue ({
    el: '#app',
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Seal Pup',
                    image: 'https://i.redd.it/wcgc2f3xv1o11.jpg',
                    description: 'Buy me, I am cute!',
                    quantity: 0,
                    price: 100,
                },
                {
                    id: 2,
                    name: 'Chicken',
                    image: 'https://3.imimg.com/data3/GR/XC/MY-6059929/chicken-250x250.jpg',
                    description: 'Buy me, I am yummy!',
                    quantity: 0,
                    price: 40,
                },
                {
                    id: 3,
                    name: 'Raccoon',
                    image: 'https://pbs.twimg.com/profile_images/1109110356738215936/ktnAFPhU_400x400.jpg',
                    description: 'Buy me, I like washing your dishes!',
                    quantity: 0,
                    price: 80,
                }
            ],
            showCart: false
        };
    },

    computed: {
        cart() {
            return this.products.filter(product => product.quantity > 0);
        },
        totalQuantity() {
            return this.products.reduce((total, product) => total + product.quantity, 0); 
        },
        totalPrice() {
            return this.products.reduce((total, product) => total + product.quantity * product.price, 0); 
        }
    },
    methods: {
        updateCart(product, updateType) {
            for (let i = 0; i < this.products.length; i++) {
               if (this.products[i].id === product.id) {
                   if (updateType === 'subtract') {
                       if (this.products[i].quantity !== 0) {
                           this.products[i].quantity--;
                       }
                   } else {
                       this.products[i].quantity ++;
                   }
                   break;
               }
                
            }
        }
    }
})