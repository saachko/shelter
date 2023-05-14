const shadow = document.querySelector(".shadow");
const burgerMenu = document.querySelector(".burger-menu__nav");

// бургер-меню
function showBurgerMenu() {
	shadow.classList.remove("hidden");
	document.body.classList.add("lock_scroll");
	burgerMenu.classList.remove("closed");
  burgerMenu.classList.remove("hidden");
  document.getElementById('open').style.animation = "rotateVertical 0.4s ease-in-out";
  document.getElementById('close').style.animation = "";
}

function closeBurgerMenu() {
  shadow.classList.add("hidden");
  document.body.classList.remove("lock_scroll");
  burgerMenu.classList.add("closed");
  setTimeout(() => burgerMenu.classList.add("hidden"), 700);
  document.getElementById('close').style.animation = "rotateHorizontal 0.4s ease-in-out";
  document.getElementById('open').style.animation = "";
}

shadow.onclick = () => {
	shadow.classList.add("hidden");
	document.body.classList.remove("lock_scroll");
	burgerMenu.classList.add("closed");
	setTimeout(() => burgerMenu.classList.add("hidden"), 700);
	document.getElementById('close').style.animation = "rotateHorizontal 0.4s ease-in-out";
	document.getElementById('open').style.animation = "";

	modal.classList.add("hidden");
}

document.getElementById('pets-link').addEventListener("click", closeBurgerMenu);
document.getElementById('footer-link').addEventListener("click", closeBurgerMenu);

const PETS =
[
  {
    "name": "Jennifer",
    "img": "assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

// модальные окна

const modal = document.querySelector(".modal");
const card = document.querySelectorAll(".pet-card")

for (let i = 0; i < 8; i++) {
	card[i].addEventListener("click", selectPet);
	card[i].addEventListener("click", openModal);

	function selectPet() {
		for (let j = 0; j < 8; j++) {
			if (card[i].id === PETS[j].name) {
				document.getElementById('name').innerHTML = PETS[j].name;
				document.getElementById('type').innerHTML = PETS[j].type;
				document.getElementById('breed').innerHTML = PETS[j].breed;
				document.getElementById('description').innerHTML = PETS[j].description;
				document.getElementById('age').innerHTML = PETS[j].age;
				document.getElementById('inoculations').innerHTML = PETS[j].inoculations;
				document.getElementById('diseases').innerHTML = PETS[j].diseases;
				document.getElementById('parasites').innerHTML = PETS[j].parasites;
				document.getElementById('img').setAttribute("src", PETS[j].img)
			}
		}
	}	
}

function openModal() {
	shadow.classList.remove("hidden");
	document.body.classList.add("lock_scroll");
  modal.classList.remove("hidden");
}

function closeModal() {
	shadow.classList.add("hidden");
  document.body.classList.remove("lock_scroll");
  modal.classList.add("hidden");
}

// пагинация

let current = document.querySelector('.current');
let x = parseFloat(current.innerHTML);

function activateArrows () {
	let w = document.documentElement.clientWidth;

	if (x > 1) {
		document.querySelector('.prev_one').classList.remove("disabled");
		document.querySelector('.prev_double').classList.remove("disabled");
	} 

	if (x == 1) {
		document.querySelector('.prev_one').classList.add("disabled");
		document.querySelector('.prev_double').classList.add("disabled");
	}

	if (w >= 1280) {
		if (x < 6) {
			document.querySelector('.next_one').classList.remove("disabled");
			document.querySelector('.next_double').classList.remove("disabled");
		} 
		if (x == 6) {
			document.querySelector('.next_one').classList.add("disabled");
			document.querySelector('.next_double').classList.add("disabled");
		} 
	} else if (w < 1280 && w >= 768) {
		if (x < 8) {
			document.querySelector('.next_one').classList.remove("disabled");
			document.querySelector('.next_double').classList.remove("disabled");
		} 
		if (x == 8) {
			document.querySelector('.next_one').classList.add("disabled");
			document.querySelector('.next_double').classList.add("disabled");
		} 
	} else {
		if (x < 16) {
			document.querySelector('.next_one').classList.remove("disabled");
			document.querySelector('.next_double').classList.remove("disabled");
		} 
		if (x == 16) {
			document.querySelector('.next_one').classList.add("disabled");
			document.querySelector('.next_double').classList.add("disabled");
		} 
	}
}

function increment() {
	x++;
	current.innerHTML = x;
	activateArrows();

	managePage(x);
}

function decrement() {
	x--;
	current.innerHTML = x;
	activateArrows();

	managePage(x);
}

function toStart() {
	x = 1;
	current.innerHTML = x;
	activateArrows();

	managePage(x);
}

function toEnd() {
	let w = document.documentElement.clientWidth;

	if (w >= 1280) {
		x = 6;
	} else if (w < 1280 && w >= 768) {
		x = 8;
	} else {
		x = 16;
	}
	
	current.innerHTML = x;
	activateArrows();

	managePage(x);
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function changeOrder() {
	shuffle(PETS);

	for (let i = 0; i < 8; i++) {
		card[i].querySelector('.pet-card__name').innerHTML = PETS[i].name;
		card[i].querySelector('.pet-card__photo').setAttribute("src", PETS[i].img);
		card[i].setAttribute('id', PETS[i].name);
	}
}

(function () {
  changeOrder()
}());

function managePage(n) {
	switch(n) {
		case 1: changeOrder();
		case 2: changeOrder();
		case 3: changeOrder();
		case 4: changeOrder();
		case 5: changeOrder();
		case 6: changeOrder();
		case 7: changeOrder();
		case 8: changeOrder();
		case 9: changeOrder();
		case 10: changeOrder();
		case 11: changeOrder();
		case 12: changeOrder();
		case 13: changeOrder();
		case 14: changeOrder();
		case 15: changeOrder();
		case 16: changeOrder();
	}
}


