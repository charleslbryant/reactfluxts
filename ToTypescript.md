# React on TypeScript

These are my notes that I wrote as I converted this project to use TypeScript. I don't have all the details here. Unitl I decide about the particulars of this project's use of TypeScript, you will have to search the source files and the web if you need more information.

## IDE

I am using the [Atom](https://atom.io/) text editor from the GitHub team so the first thing I do is install the [atom-typescript plugin]( https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md).

## TypeScript Version

Next I install the typescript npm package, the nightly build because I live dangerously.

`npm install -g typescript@next`

This put me on Version 1.8.0-dev.20151225. Yes, I did this on Christmas and I installed it globally (Merry Christmas to me). I can always go back to safety if the elves have bugs in this version.

## TypeScript Build

I want to control how my typescript is built so I create a tsconfig.json. I add compileOnSave: false to the file to tell Atom to not build my TypeScript files when I save them. I am going to have gulp handle this so I have a consistent and repeatable build.

As I did at the start of this little project I am going to begin with build automation. So, the next step is to teach my gulp script how to compile, or should I say transpile, TypeScript.

`npm install --save-dev gulp-typescript`

This gives gulp a way to call tsc, TypeScript compiler. I just update gulp to build and move the results to dist like I did with plain react.

## TypeScript Typings

Install tsd to manage my TypeScript typings.

`npm install -g tsd`

Then I initialize tsd

`tsd init`

Install the React TypeScript typings.

`tsd install react-global --save`
