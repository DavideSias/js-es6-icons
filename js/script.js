const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

function getRandomColor(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    return color
}

const arrRandomColors = [];

const eleContainer = document.querySelector('.container');
const eleSelect = document.querySelector('#icons');

for(let i = 0; i < arrIcons.length; i++){

    arrRandomColors.push(getRandomColor());
    console.log(arrRandomColors);

    const eleCard = document.createElement('div');
    eleCard.classList.add('card');
    
    eleCard.innerHTML = `
    <i class="${arrIcons[i].family} ${arrIcons[i].prefix}${arrIcons[i].name} ${arrIcons[i].type}" style="color: #${arrRandomColors[i]}"></i>
    <div class="text">${arrIcons[i].name}</div>
    `

    eleContainer.append(eleCard);
}

// let listTypeAnimal = document.querySelectorAll('.animal');
// let listTypeVegetable = document.querySelectorAll('.vegetable');
// let listTypeUser = document.querySelectorAll('.user');
// let listTypeAll = document.querySelectorAll('i');

// // console.log(listTypeAnimal);
// // console.log(listTypeVegetable);
// // console.log(listTypeUser);
// // console.log(listTypeAll);

// for(let i = 0; i < listTypeAll.length; i++){
//     if(eleSelect.value == 'all'){
//         listTypeAll[i].classList.add('visible');
//     } else if(eleSelect.value == 'animal'){
//         listTypeAnimal[i].classList.add('visible');
//     } else if(eleSelect.value == 'vegetable'){
//         listTypeVegetable[i].classList.add('visible');
//     } else {
//         listTypeUser[i].classList.add('visible');
//     }
// }












  

