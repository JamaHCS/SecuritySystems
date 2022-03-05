# Cooper.css

## Requirements:

- NodeJs min-version 14.17.5 LTS
- NPM min-version 6.14.14

## Project setup

```
$ npm install

added 1523 packages, and audited 1524 packages in 11s
```

### Compiles and hot-reloads for development

```
$ npm run serve

 App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.1.140:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

### Lints and fixes files

```
$ npm run lint
```

### Compile the sass project to an unique css file

```
$ npm run build:sass

> cooper.css@0.1.0 build:sass
> node-sass --output-style expanded --source-map true --source-map-contents true --precision 6 src/scss/cooper.scss dist/css/cooper.css

Rendering Complete, saving .css file...
Wrote CSS to /home/jama/development/cooper/dist/css/cooper.css
Wrote Source Map to /home/jama/development/cooper/dist/css/cooper.css.map
```

### Compile the sass project to css.minified version basing on the last build:sass

```
$ npm run build:minify

> cooper.css@0.1.0 build:minify
> cleancss -O2 'all:off;removeDuplicateRules:on' --format breaksWith=lf --source-map --source-map-inline-sources --output dist/css/cooper.min.css dist/css/cooper.css

WARNING: Skipping remote @import of "https://fonts.googleapis.com/css?family=Open+Sans:400" as resource is not allowed.
WARNING: Skipping remote @import of "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" as resource is not allowed.
WARNING: Skipping remote @import of "https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800,900" as resource is not allowed.
WARNING: Skipping remote @import of "https://fonts.googleapis.com/css?family=Inconsolata:400,600," as resource is not allowed.
WARNING: Ignoring local source map at "/home/jama/development/cooper/metisMenu.css.map" as resource is missing.
WARNING: Ignoring local source map at "/home/jama/development/cooper/cooper.css.map" as resource is missing.
```

### Compile the sass project to both versions (full and minify)

```
$ npm run build:cooper.css

> cooper.css@0.1.0 build:cooper.css
> npm run build:sass && npm run build:minify


> cooper.css@0.1.0 build:sass
> node-sass --output-style expanded --source-map true --source-map-contents true --precision 6 src/scss/cooper.scss dist/css/cooper.css

Rendering Complete, saving .css file...
Wrote CSS to /home/jama/development/cooper/dist/css/cooper.css
Wrote Source Map to /home/jama/development/cooper/dist/css/cooper.css.map

> cooper.css@0.1.0 build:minify
> cleancss -O2 'all:off;removeDuplicateRules:on' --format breaksWith=lf --source-map --source-map-inline-sources --output dist/css/cooper.min.css dist/css/cooper.css

WARNING: Skipping remote @import of "https://fonts.googleapis.com/css?family=Open+Sans:400" as resource is not allowed.
WARNING: Skipping remote @import of "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" as resource is not allowed.
WARNING: Skipping remote @import of "https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800,900" as resource is not allowed.
WARNING: Skipping remote @import of "https://fonts.googleapis.com/css?family=Inconsolata:400,600," as resource is not allowed.
WARNING: Ignoring local source map at "/home/jama/development/cooper/metisMenu.css.map" as resource is missing.
WARNING: Ignoring local source map at "/home/jama/development/cooper/cooper.css.map" as resource is missing.
```

#

### Also, you can build by separated modules for the third party components that are integrated with Cooper.css

To the core styles from cooper

```
$ npm run build:core
```

To datatable Cooper styles

```
$ npm run build:datatables
```

To dropzone Cooper styles

```
$ npm run build:dropzone
```

To flatpicker Cooper styles

```
$ npm run build:flatpicker
```

To select2 Cooper styles

```
$ npm run build:select2
```

To summernote Cooper styles

```
$ npm run build:summernote
```

To sweet alert Cooper styles

```
$ npm run build:sweetalert
```

To exclusive Login Cooper view styles

```
$ npm run build:login
```

#
### The following command, going to compile the whole project with separated and unified modules.
```
$ npm run build:cooper:full
```

#

- If you need to add features or keep working on this project, just need to edit the sass project, located on './src/scss'. Having as entry point the "cooper.
  scss"
  file.

#

- To add cooper on your project, needs to add a css importation as the last node css inner the <head> html tag

#

## Variables

On HTML coding, correct way to invoke a variables is: 'var(--color-primary)', this ones are declared on a second file and imported inside the body css rule

- If you need to edit the project variables, you can find them on the following directory: './src/scss/lib/_variables.scss' to the light theme

- If you need to access to the value of the variables on the dark theme, you need to find the following file: './src/scss/lib/themes/_dark-variables.scss'

#