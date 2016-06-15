(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;

  });

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

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'here is some interesting text',
      canPurchase: false,
      images: [
          'https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-01.gif?raw=true',
          'https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-03.gif?raw=true',
      ],
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'This may or may not be evil',
      canPurchase: true,
      images: [
          'https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-02.gif?raw=true',
          'https://github.com/sirodoht/angular-gemstore/blob/gh-pages/images/gem-04.gif?raw=true',
      ],
    },
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      canPurchase: true,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [ ]
    },
  ];

})();
