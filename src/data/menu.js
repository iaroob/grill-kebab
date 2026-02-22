// src/data/menus.js

import taco from '../assets/food-images/taco.jpg';
import kapsalon from '../assets/food-images/kapsalon.png';
import gratinadoo from '../assets/food-images/gratinadoo.png';
import kebab from '../assets/food-images/Kebab.png';
import durum from '../assets/food-images/durum.png';
import plato from '../assets/food-images/plato.png';
import hamburguesa from '../assets/food-images/hamburguesa.png';
import alitas from '../assets/food-images/alitas.png';
import nuggets from '../assets/food-images/nuggets.png';
import tiras from '../assets/food-images/tiras.png';
import box from '../assets/food-images/box.png';
import seekhKebab from '../assets/food-images/seekh-kebab.png';
import threeDurum from '../assets/food-images/3durum.png';
import threeKebab from '../assets/food-images/3kebab.png';
import samosa from '../assets/food-images/samosa.png';
import pakora from '../assets/food-images/pakora.png';
import patatas from '../assets/food-images/patatas.png';
import queso from '../assets/food-images/queso.png';
import ensalada from '../assets/food-images/ensalada.png';
import pequeña from '../assets/food-images/pequeña.png';
import grande from '../assets/food-images/grande.png';
import cola from '../assets/food-images/cola.png';
import fanta from '../assets/food-images/fanta.png';
import pepsi from '../assets/food-images/pepsi.png';
import sprite from '../assets/food-images/sprite.png';
import cerveza from '../assets/food-images/cerveza.png';
import zumo from '../assets/food-images/zumo.png';
import nestea from '../assets/food-images/nestea.png';
import aquarius from '../assets/food-images/aquarius.png';

// Menu cards
export const menuCards = [
  { id: 1, name: "Menú Taco", price: "9.00€", img: taco },
  { id: 2, name: "Menú Kapsalon", price: "9.00€", img: kapsalon },
  { id: 3, name: "Menú Gratinado", price: "9.00€", img: gratinadoo },
  { id: 4, name: "Menú Kebab", price: "6.50€", img: kebab },
  { id: 5, name: "Menú Durum", price: "7.00€", img: durum },
  { id: 6, name: "Menú Plato", price: "8.00€", img: plato },
  { id: 7, name: "Menú Hamburguesa", price: "7.00€", img: hamburguesa },
  { id: 8, name: "Menú Alitas de Pollo", price: "7.00€", img: alitas },
  { id: 9, name: "Menú Nuggets de Pollo", price: "7.00€", img: nuggets },
  { id: 10, name: "Menú Tiras de Pollo", price: "8.00€", img: tiras },
  { id: 11, name: "Menú Box Kebab", price: "5.50€", img: box },
  { id: 12, name: "Menú Plato Seekh Kebab", price: "9.00€", img: seekhKebab },
];

// Menu sharing
export const menuSharing = [
  { id: 1, name: "Menú 3 Durums", price: "22.00€", img: threeDurum, desc: "Ternera o Pollo con 3 Patatas y Bebida 2 Ltr." },
  { id: 2, name: "Menú 3 Kebabs", price: "20.00€", img: threeKebab, desc: "Ternera o Pollo con 3 Patatas y Bebida 2 Ltr." },
];

// Food items
export const foodItems = [
  { cat: "Kebabs, Tacos y más", items: [
    { name: "Durum Gratinado", price: "7.00€", image: gratinadoo },
    { name: "Taco", price: "7.00€", image: taco },
    { name: "Kapsalon", price: "7.00€", image: kapsalon },
    { name: "Kebab Normal", price: "4.00€", image: kebab },
    { name: "Kebab Grande", price: "5.00€", image: kebab },
    { name: "Durum Normal", price: "4.00€", image: durum },
    { name: "Durum Grande", price: "5.00€", image: durum },
    { name: "Hamburguesa", price: "4.00€", image: hamburguesa },
    { name: "Box Kebab", price: "4.50€", image: box },
    { name: "Samosa", price: "4.00€", image: samosa },
    { name: "Pakora", price: "3.50€", image: pakora },
    { name: "Patatas Fritas", price: "3.50€", image: patatas },
    { name: "Patatas Fritas con Queso", price: "4.50€", image: queso },
    { name: "Ensalada Mixta", price: "5.00€", image: ensalada },
  ]},
  { cat: "Bebidas", items: [
    { name: "Agua pequeña", price: "1.00€", image: pequeña },
    { name: "Agua grande", price: "1.50€", image: grande },
    { name: "Coca Cola o Coca Cola Zero", price: "1.80€", image: cola },
    { name: "Fanta Naranja o Limon", price: "1.80€", image: fanta },
    { name: "Pepsi", price: "1.80€", image: pepsi },
    { name: "Sprite", price: "1.80€", image: sprite },
    { name: "Cerveza Sin Alcohol", price: "1.80€", image: cerveza },
    { name: "Zumos", price: "1.80€", image: zumo },
    { name: "Nestea", price: "2.00€", image: nestea },
    { name: "Aquarius", price: "2.00€", image: aquarius },
  ]},
];