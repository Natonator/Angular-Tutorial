(function() {
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', function($http) {
    // TODO: get a server up to run this http
    // var store = this;
    //
    // store.products = [];
    //
    // $http.get('/gems.json').success(function(data){
    //   store.products = data;
    // });

    //for now
    this.products = gems;

  }]);

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };

  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(current){
      if(current){
        this.current = current;
      }
      else {
        this.current = 0;
      }
    };

  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.created = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

var gems = [
  {
    "name": "Dodecahedron",
    "price": 2,
    "description": "here is some interesting text",
    "canPurchase": false,
    "images": [
        "https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-01.gif?raw=true",
        "https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-03.gif?raw=true",
    ],
    "reviews": [
      {
        "stars": 5,
        "body": "This one is the bestest",
        "author": "not-the-store-owner",
      },
      {
        "stars": 4,
        "body": "I was satisfied",
        "author": "KellinYella",
      },
      {
        "stars": 2,
        "body": "tasted aweful",
      },
    ],
  },
  {
    "name": "Pentagonal Gem",
    "price": 5.95,
    "description": "This may or may not be evil",
    "canPurchase": true,
    "images": [
        "https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-02.gif?raw=true",
        "https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-04.gif?raw=true",
    ],
    "reviews": [
      {
        "stars": 3,
        "body": "Would buy again if I had to",
        "author": "SamW",
      },
      {
        "stars": 4,
        "body": "very satisfied, but poor service",
        "author": "TheDevil",
      },
      {
        "stars": 2,
        "body": "tasted aweful as well",
      },
    ],
  },
  {
    "name": "Azurite",
    "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    "shine": 8,
    "canPurchase": true,
    "price": 110.50,
    "rarity": 7,
    "color": "#CCC",
    "faces": 14,
    "images": [ ],
    "reviews": [],
  },
];

})();
