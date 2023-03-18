# angular-project-starter-2023


<br>

- Quick start guide for Angular Project in 2023

<br>


<br>
<br>
<br>

***

<br>
<br>
<br>





## TODO

- [-] favicon
- [-] what do all these config files do?
- [-] environments
- [-] shared modules
- [-] how exactly to do models?
- [-] enums, how to and where to put them?
- [-] ps1 file?
- [-] how do you point to a backend?
- [-] environment variables?
- [-] global styling
- [-] webpack
- [-] npm commands
- [-] backend calls





## INSTALLS

```sh
    
    # node and npm
    $ sudo apt update
    $ sudo apt install nodejs npm

    # angular
    $ sudo npm install npm@latest -g
    $ sudo npm install -g @angular/cli

```

<br>




## VERSIONS

```sh

    $ node --version    # v16.19.1
    $ npm --version     # v8.19.3
    $ ng version        # v14.2.6

```

<br>



## SET UP

``` sh
    
    # make a repo in github with a readme
    $ git clone <ssh>

    # rename README > README-2

    $ ng new angular-project-starter-2023
    # routing: Y
    # styling: SCSS

    # move the angular project to root if you want
    # rename README > README-NG and README-2 > README

    # update git-ingore file
    # node_modules, vs-code, npm, angular, dist, env

    # add git-commit file
    $ . git-commit.sh

```

<br>




## RUN AND BUILD

```sh

    $ ng serve --port 4200 --open
    $ npm run start

    $ ng build
    $ npm run build

```

<br>




## SET UP

- remove from `app.component.html` and `app.component.ts`
- delete `.spec` files
- set `strict: false` in `tsconfig.json`
- add `"strictPropertyInitialization": false` in `tsconfig.json`
- delete `test.js` and `karma.conf.js` files if you want

```sh
    
    # install bootstrap
    $ npm install bootstrap@4.6.2 --save --force
    # update styles.scss with bootstrap import
    # test <button type="button" class="btn btn-primary">Bootstrap</button>
    
    # install prime-ng
    $ npm install primeng@14.2.2 --save
    $ npm install primeicons@4.1.0 --save
    # update angular.json styles  
    # test by importing module into app.module, and add component


    # update version in package.jspn
    # update npm commands if you want in package.json
    
```

- build modules, components, services

```sh

    # build lazy loaded modules
    $ ng generate module user-module --route user --module app.module
    # delete spec files

    # build components and services
    $ ng generate component core/home
    # delete component and spec files, remove from module

    # build components and services
    $ ng generate component modules/user-module/user-landing
    $ ng generate component modules/user-module/user-view
    $ ng generate component modules/user-module/user-edit
    $ ng generate service modeuls/user-module/user-service # module-wide service
    # delete component and spec files, remove from module

    # add components to routes

```




## PROJECT STRUCTURE

- app
    - core
        - home
        - navbar
        - breadcrumbs
    - modules
        - user-module
            - user-landing
            - user-view
            - user-edit
    - data
        - dummy.service.ts
    - models
    - shared
        - (components + services)