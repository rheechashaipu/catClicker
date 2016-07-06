//Stores cat data

var model = {
	currentCat: null,
	//Making a list of key value pairs in this object
	cats: [{
		clickCount: 0,
		catName: 'cat1',
		imgSrc: 'images/cat1.jpg'
	},
	{
		clickCount: 0,
		catName: 'cat2',
		imgSrc: 'images/cat2.jpg'
	},
	{
		clickCount: 0,
		catName: 'cat3',
		imgSrc: 'images/cat3.jpg'
	},
	{
		clickCount: 0,
		catName: 'cat4',
		imgSrc: 'images/cat4.jpg'
	},
	{
		clickCount: 0,
		catName: 'cat5',
		imgSrc: 'images/cat4.jpg'
	}
	]
};


//Controller, model and view do not directly communicate
var octopus = {

	//initializes the first cat, initializes the interface for the first cat
	init: function(){
		model.currentCat = model.cats[0];
		catPicView.init();
		catButtonView.init();
		adminView.init();
	},

	getCurrentCat: function(){
		return model.currentCat;
	},

	getCats: function(){
		return model.cats;
	},

	setCurrentCat: function(cat){
		model.currentCat = cat;
	},

	incrementCounter: function(){
		model.currentCat.clickCount++; //increment click
		catPicView.render();
	}

}; 

//View section

var catPicView = {
	//the init function here sets dom elements to variables.
	init: function() {
		this.catPicFrame = document.getElementById('catImg');
		this.catName = document.getElementById('catName');
		this.catClickCount = document.getElementById('catCounter');

		this.catPicFrame.addEventListener('click', function(){
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function(){
		var currentCat = octopus.getCurrentCat();
		this.catPicFrame.src = currentCat.imgSrc;
		this.catClickCount.textContent = "Current clicks: " + currentCat.clickCount;
		this.catName.textContent = currentCat.catName;
	}
};

var catButtonView = {

	init: function() {
		this.catListElem = document.getElementById('catList');

		this.render();
	},

	render: function() {

		//document.getElementById("catList").innerHTML = "";

		var elem;

		var cats = octopus.getCats();


		for (var i=0; i<cats.length; i++){
			cat = cats[i];

			elem =document.createElement('li');
			elem.textContent=cat.catName;

			this.catListElem.appendChild(elem);

			elem.addEventListener('click', (function(catcopy){
				return function(){
					octopus.setCurrentCat(catcopy);
					catPicView.render();
				};
			})(cat));
		}

	}

}

var adminView = {
	init: function() {
		this.adminButton = document.getElementById('adminButton');
		this.saveButton = document.getElementById('saveButton');
		this.cancelButton = document.getElementById('cancelButton');

		this.render();
	},

	render: function(){
		document.getElementById('saveButton').style.display="none";
		document.getElementById('cancelButton').style.display="none";
		document.getElementById('catInfo').style.display="none";
		//returns current cat data from model
	
		this.adminButton.addEventListener('click',function(){
			var cat = octopus.getCurrentCat();
		    var catAdmin = octopus.getCurrentCat();

			//makes admin button display other admint buttons and input forms
			document.getElementById("catInfo").style.display = "block";
			saveButton.style.display="inline-block";
			cancelButton.style.display="inline-block";

			//sets initial admin values to current cat data
			document.getElementById('newCatName').value = cat.catName;
			document.getElementById('newImgSrc').value = cat.imgSrc;
			document.getElementById('newClickCount').value = cat.clickCount;

		})

		this.saveButton.addEventListener('click', function(){
			var cat = octopus.getCurrentCat();
			var catAdmin = octopus.getCurrentCat();

			var inputName = document.getElementById('newCatName').value;
			cat.catName = inputName;
			console.log(inputName);
			var newClickCount = document.getElementById('newClickCount').value;
			cat.clickCount = newClickCount;
			var newImgSrc = document.getElementById('newImgSrc').value;
			cat.imgSrc = newImgSrc;
		})
		this.cancelButton.addEventListener('click', function(){
			document.getElementsByClassName("adminChanges").value = "";
			catInfo.style.display = "none";
			cancelButton.style.display="none";
			saveButton.style.display="none";
		})
		}
	};



octopus.init();