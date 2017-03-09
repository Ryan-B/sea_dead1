app.factory('ProductsFactory', function($http){
	return {
		getProducts: function(callback){
			console.log("ProductsFactory getProducts");
			$http.get('/products').success(function(response){
				callback(response);
			})
		},
		addProduct: function(newProduct, callback){
			console.log("ProductsFactory addProduct");
			$http.post('/products', newProduct).success(function(response){
				callback();
			})
		},
		removeProduct: function(product, callback){
			console.log("ProductsFactory RemoveProduct", product);
			$http.delete('/products/'+product._id).success(function(response){
				callback();
			})
		}
	}
})

app.factory('DeclinesFactory', function($http){
	return {
		getDeclines: function(callback){
			console.log("DeclinesFactory getDeclines");
			$http.get('/declines').success(function(response){
				callback(response);
			})
		},
		addDecline: function(newDecline, callback){
			console.log("DeclinesFactory addDecline");
			$http.post('/declines', newDecline).success(function(response){
				callback();
			})
		},
		removeDecline: function(decline, callback){
			console.log("DeclinesFactory RemoveDecline", decline);
			$http.delete('/declines/'+decline._id).success(function(response){
				callback();
			})
		}
	}
})