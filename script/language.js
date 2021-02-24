'use strict';

let lang1 = 'en',
	arr = [];

if (lang1 === 'ru') {
   console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if (lang1 === 'en') {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}

let lang2 = 'ru',
	arr2 = [];
switch (lang2) {
	case 'ru':
		arr2 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	break;
	case 'en':
		arr2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		break;
	}
	alert(arr2);
	

let lang3 = 'ru',
 day = {
	'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
alert(day[lang3]);

let namePerson = 'Иван';

namePerson === 'Артем' ? console.log('Нашальникэ') : namePerson === 'Максим' ? console.log('Препод') : console.log('студент');



