var product = new Vue({
    el: '#product',
    data: {

        itemList: [{
                id: 'bape',
                itemName: 'Bape T恤',
                img: './image/bape small.jpg',
                price: '70',
                count: '1'
            },
            {
                id: 'uniqlo',
                itemName: 'Uniqlo 印花T恤',
                img: './image/uniqlo small.jpg',
                price: '20',
                count: '1'
            },
            {
                id: 'zara',
                itemName: 'Zara 牛仔短褲',
                img: './image/zara small.jpg',
                price: '30',
                count: '1'
            },
            {
                id: 'supreme',
                itemName: 'Supreme 漁夫帽',
                img: './image/supreme small.jpg',
                price: '90',
                count: '1'
            },
            {
                id: 'palace',
                itemName: 'Palace 棒球帽',
                img: './image/palace small.jpg',
                price: '60',
                count: '1'
            },

        ]
    },
    methods: {
        handlePlus: function(item) {
            item.count++;
        },
        handleSub: function(item) {
            if (item.count > 1) {
                item.count--;
            }
        },
        handledelete: function(index) {
            console.log(this);
            this.itemList.splice(index, 1);
        }
    }
})