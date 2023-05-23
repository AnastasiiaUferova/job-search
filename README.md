# React.js 'JOB SEARCH' app

## [Check out the project on Vercel](https://job-search-iuferova.vercel.app )

## Description

Test task for [Paralect Startup Summer 2023](https://startup-summer-2023-dev-task.super.site). A job search website where you can filter the vacancies and save them to favourites. 

## Functionality

* Search for vacancies with search input keyword;
* Filter vacancies by payment and field of work;
* Open links with vacancy details;
* Save to favourites by clicking on save button;

### API used

* Superjiob https://api.superjob.ru API (with proxy server given by Paralect).

### Layout features

* Layout is created according to individual Figma template;
* Element positioning using flexbox
* Adaptive design principles are used in the project: it's optimized for different screen resolutions (mobile, tablet, desktop)
* The number of pages in pagination varies according to the number of cards got from API or saved by the user.
* The vacancy list is rendered automatically without user maknig the first search.

### Routes
* ```/ ```— main page
* ```/saved``` — saved vacancies
* ```/details/:id``` — vacancy details

## Technologies used

* React.js Functional Components;
* React routing;
* Hooks (useState, useEffect, useCallBack, useDebouncedCallback);
* Adaptive layout using flexbox positioning;
* Nested file structure according to BEM methodology;
* TypeScript (Asynchronous JS, Fetch API, OOP);
* Mantine library for certain elements like filter and pagination;
* SCSS;
* Git;
* Figma


## Installation instructions:

```
git clone https://github.com/AnastasiiaUferova/job-search.git

cd job-search

npm i 

npm run dev