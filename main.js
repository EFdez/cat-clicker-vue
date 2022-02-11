var vm = new Vue({
    el: '#app',
    data: {
        currentCat: {},
        cats: [{
                id: 1,
                name: 'Gato Casero',
                count: 0,
                img: '/house_cat.jpg'
            },
            {
                id: 2,
                name: 'Gato Callejero',
                count: 0,
                img: '/stray_cat.jpg'
            },
        ]
    },
    methods: {
        initCurrentCat: function() {
            this.currentCat = this.cats[0];
        },
        setCat: function(cat) {
            this.currentCat = cat;
        },
        increaseCount: function() {
            this.currentCat.count++;
        },
    }
});

vm.initCurrentCat();