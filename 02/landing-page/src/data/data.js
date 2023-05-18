import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import prisma from "../images/prisma.jpeg"
import interactiva from "../images/interactiva.jpeg"
import wow from "../images/wow.jpeg"
export const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "Aprenderas",
  },
  {
    id: 4,
    link: "Aulas",
  },
];

export const socialLinks = [
  {
    id: 1,
    link: "facebook",
  },
  {
    id: 2,
    link: "twitter",
  },
  {
    id: 3,
    link: "squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Programar desde 0",
    text: "Muy importante para comenzar en este mundo.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Programacion Competitiva",
    text: "ICPC, Hackatons y mucho mas para los que buscan retos.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Desarrollo de IA",
    text: "Ultimas tecnologias que crecen cada vez mas.",
  },
];

export const tours = [
  {
    id: 1,
    image: prisma,
    date: "august 26th, 2020",
    title: "Aula Prisma",
    info: ` Aula exclusiva para estudiantes de la carrera. Equipada con la mejor señal del campus y muy comoda.`/*,
  location: "china",
    duration: 6,
    cost: 2100,*/
  },
  {
    id: 2,
    image: interactiva,
    date: "august 26th, 2020",
    title: "Aulas Interactivas",
    info: ` Aulas con capacidad de dar clases duales: Virtual y prescencial a la vez.`
  },
  {
    id: 3,
    image: wow,
    date: "september 15th, 2020",
    title: "Aula WoW",
    info: `Aula tipo sala de reunion para acostumbrar a los alumnos a la vida laboral.`,
    
  },
];
