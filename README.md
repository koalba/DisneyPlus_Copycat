# Disney+ Copycat

[![Angular](https://img.shields.io/static/v1?label=&message=Angular&color=DD0031&logo=angular&logoColor=white&style=for-the-badge)](https://angular.io/)
[![TypeScript](https://img.shields.io/static/v1?label=&message=TypeScript&color=3178C6&logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![SASS](https://img.shields.io/static/v1?label=&message=SASS&color=CC6699&logo=sass&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![BEM Methodology](https://img.shields.io/static/v1?label=&message=BEM%20Methodology&color=17A1E6&logo=bem&logoColor=white&style=for-the-badge)](http://getbem.com/)
[![MongoDB](https://img.shields.io/static/v1?label=&message=MongoDB&color=47A248&logo=mongodb&logoColor=white&style=for-the-badge)](https://www.mongodb.com/es)
[![ExpressJS](https://img.shields.io/static/v1?label=&message=ExpressJS&color=F0D91E&logo=express&logoColor=black&style=for-the-badge)](https://expressjs.com/es/)
[![NodeJS](https://img.shields.io/static/v1?label=&message=NodeJS&color=339933&logo=nodedotjs&logoColor=white&style=for-the-badge)](https://nodejs.org/en/)

Disney Plus Copycat made with Angular, TypeScript and SCSS. API made with Mongo Atlas and ExpressJS. You can see the API too [HERE!](https://github.com/koalba/DisneyPlus_API)

[![Live Site](https://img.shields.io/static/v1?label=&message=Live%20Site&color=0ABF53&style=for-the-badge)](https://disney-plus-copycat.vercel.app/)
[![Github Repository](https://img.shields.io/static/v1?label=&message=Github%20Repository&color=0ABF53&style=for-the-badge&logo=github&logoColor=white)](https://github.com/koalba/DisneyPlus_Copycat)

![Disney+](https://user-images.githubusercontent.com/34134103/171468870-476c9942-485f-458c-ba82-4406479a4365.jpg)

# Index

- [Setting Up](#setting-up)
- [Overview](#overview)
  - [Components](#components)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<p>&nbsp;</p>

# Setting Up

Want to download and see the project on your own computer?

First, you have to download the Project's Folder. After that, you have to:


|  1. Install node_modules inside the Project's Folder: |  2. Start the Server: |
|---|---|
|  <img src="https://user-images.githubusercontent.com/34134103/171472950-aae1b019-16bc-4106-a875-8adb8794f60c.png" /> |  <img src="https://user-images.githubusercontent.com/34134103/171473454-f00dd3f5-8c0b-42bc-84c5-19cc496050f8.png" /> |

<p>&nbsp;</p>

# Overview

## Components :

For this Copycat I recreated:

### [The Home Page:](https://disney-plus-copycat.vercel.app/)
![image](https://user-images.githubusercontent.com/34134103/171476129-56618e2d-4131-4a1d-9253-97a41a77d328.png)

### [The Search Page:](https://disney-plus-copycat.vercel.app/search)
![The Search Page](https://user-images.githubusercontent.com/34134103/171475429-cd9c92ce-ef60-4927-8e81-97e7e4675bb4.png)

### [The Movie Filter Page:](https://disney-plus-copycat.vercel.app/movies)
![image](https://user-images.githubusercontent.com/34134103/171476206-df71e501-0804-4b5c-9cde-e794405f7a97.png)

### [The Detail Page:](https://disney-plus-copycat.vercel.app/movies/628628211809e29b6438b8c1)
![image](https://user-images.githubusercontent.com/34134103/171476260-6f841543-02b2-4a6c-9c5c-ae89c70407c7.png)

<p>&nbsp;</p>

# My Process

## Built with :

- [Angular](https://angular.io/)
  - Components & Pages
  - Services
  - HttpClient
  - Routing
  - Structural Directives
  - Decorators
    - Input & Output
    - HostListener - window: resize
- [TypeScript](https://www.typescriptlang.org/)
  - Types
  - Interfaces
- [SASS](https://sass-lang.com/)
  - SCSS
- [BEM methodology](http://getbem.com/)
- [API :](https://github.com/koalba/DisneyPlus_API)
  - [MongoDB](https://www.mongodb.com/es)
    - [Mongo Atlas](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_spain_search_core_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624563&adgroup=115749706943&gclid=CjwKCAjw7cGUBhA9EiwArBAvouj0Dg70A3cQP_dPLQAHqR8xvC2PysrR09YofRBvdH5d58-CgNTQ1RoCGVYQAvD_BwE)
    - [Mongoose](https://mongoosejs.com/)
  - [NodeJS](https://nodejs.org/en/)
  - [ExpressJS](https://expressjs.com/es/)

<p>&nbsp;</p>

## What I learned :

This was one of my firsts projects made with Angular ( and TypeScript ) so it was all pretty much new to me! I feel like I've learnt a lot making this Disney+ Copycat, from something as simple as Folder Organization to Decorators and Services...

When you are used to basic Html, you get really used to make everything at once, on the same place, si I'ts normal it took a bit to take the habit of separating each thing into their own components, so you can later reuse them if you need it ( pretty handy I must admit ). I think this is what I most like about things like these, eventhough... it's still hard to know what to separate and what not!

This components makes thins easy but, they have their things too! You can't connect them as easily as something that is in the same page so, what a headache this gave me at first, what a frustration! But then whe learn @Input() anf @Output() decorators, and everything was easy again...

But that is not the end of it, because later on... SERVICES! And now you have a place to store inforation to use all over your project! For example, to connect a cute little API you made for the project in particular... [Like this one...](https://github.com/koalba/DisneyPlus_API)

And how do you get the information from the API? Well that's HttpClient's job! And you can even push info to the database! What a beautifull world we live in!

It was quite a journey, from not knowing anything about Angular to be working with it on a daily basis! I fell in love with it, and I hope I learn much more in the future!

<p>&nbsp;</p>

# Author

- Website - [Alba García](https://koalba.com/)
- Github - [Koalba](https://github.com/koalba)
- Linkedin - [Alba García](https://es.linkedin.com/in/koalba)
- ArtStation - [Alba García](https://www.artstation.com/koal_art)

<p>&nbsp;</p>

# Acknowledgments

- [Edu Fierro](https://www.youtube.com/c/EduardoFierroPro)
- [Rubrika](https://rubrika.es/)
- [Pablo Wakonigg](https://github.com/pablowako)
- [Sergio Muñoz](https://github.com/sergiomogm)
- [Álvaro Gómez](https://github.com/GomezRM)
- [Miguel Pérez](https://github.com/MiguelPraw)
