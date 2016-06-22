(function() {

var app = angular.module('store-products', []);

app.directive('productTitle', function(){ //these aren't active until we can run this on a server
  return{
    restrict: 'E', //type of directive (E for element)
    templateUrl: 'product-title.html',
  };
});

app.directive('productGallery', function(){ //these aren't active until we can run this on a server
  return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){ //same controller functionality as the GalleryController
          this.current = 0;

          this.setCurrent = function(current){
            if(current){
              this.current = current;
            }
            else {
              this.current = 0;
            }
          };
      },
      controllerAs: 'gallery',

  };
});

})();
