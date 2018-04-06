import { Injectable } from '@angular/core';

@Injectable()
export class SelectedService {

	constructor() { }
	selected = [
		{
			"passengerMeal": [
				{
					"name": 'Нет предпочтений',
					"value": ''
				},
				{
					"name": 'Вегетарианское Индуистское Меню',
					"value": 'BBML'
				},
				{
					"name": 'Меню Для Новорожденных',
					"value": 'CHML'
				},
				{
					"name": 'Куринное Меню (на рейсах El Al Israel Airlines)',
					"value": 'CNML'
				},
				{
					"name": 'Диабетическое Меню',
					"value": 'DBML'
				},
				{
					"name": 'Фруторианское Меню',
					"value": 'FPML'
				},
				{
					"name": 'Меню Без Глютена',
					"value": 'GFML'
				},
				{
					"name": 'Индуистское (Не Вегетарианское) Меню',
					"value": 'HNML'
				},
				{
					"name": 'Индийское Вегетарианское Меню (на рейсах United Airlines)',
					"value": 'IVML'
				},
				{
					"name": 'Японское Меню (на рейсах Lufthansa)',
					"value": 'JPML'
				},
				{
					"name": 'Кошерное Меню',
					"value": 'KSML'
				},
				{
					"name": 'Низкокаллорийное Меню',
					"value": 'LCML'
				},
				{
					"name": 'Меню С Низким Содержанием Жиров',
					"value": 'LFML'
				},
				{
					"name": 'Меню С Низким Содержанием Соли',
					"value": 'LSML'
				},
				{
					"name": 'Мусульманское Меню',
					"value": 'MOML'
				},
				{
					"name": 'Меню Без Морепродуктов (на рейсах Lufthansa)',
					"value": 'NFML'
				},
				{
					"name": 'Меню С Низким Содержанием Лактозы',
					"value": 'NLML'
				},
				{
					"name": 'Японское Бенто Меню (на рейсах United Airlines)',
					"value": 'OBML'
				},
				{
					"name": 'Вегетарианское Меню',
					"value": 'RVML'
				},
				{
					"name": 'Меню С Морепродуктами',
					"value": 'SFML'
				},
				{
					"name": 'Веганское Меню',
					"value": 'VGML'
				},
				{
					"name": 'Вегетарианское Джайнийское Меню',
					"value": 'VJML'
				},
				{
					"name": 'Вегетарианское Восточное Меню',
					"value": 'VOML'
				},
				{
					"name": 'Вегетарианское Меню Без Лактозы',
					"value": 'VLML'
				},
			]
		},
		{
			"passengerSeat": [
				{
					"name": 'Нет предпочтений',
					"value": '0'
				},
				{
					"name": 'У прохода',
					"value": '1'
				},
				{
					"name": 'У окна',
					"value": '2'
				}
			]
		},
		{
			"departmentId": [
				{"name": 'Укажите дирекцию', "value": '0'},
				{"name": 'Административная', "value": '1'},
				{"name": 'Финансовая', "value": '2'},
			]
		},
		{
			"docType": [
				{"name": 'Удостоверение личности', "value": '1'},
				{"name": 'Паспорт', "value": '2'},
			]
		},
		{
			"nationality": [
				{"name": 'Укажите гражданство', "value": '0'},
				{"name": 'Австралия', "value": ''},
				{"name": 'Австрия', "value": ''},
				{"name": 'Азербайджан', "value": ''},
				{"name": 'Албания', "value": ''},
				{"name": 'Алжир', "value": ''},
				{"name": 'Американское Самоа', "value": ''},
				{"name": 'Ангилья', "value": ''},
				{"name": 'Ангола', "value": ''},
			]
		}	
	]
	getData() {
	    return this.selected;
	}	 
}
