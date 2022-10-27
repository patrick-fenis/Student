![GA logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Command line lab

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

Developing web apps requires a degree of comfort navigating and interacting with your operating system through the command line. Later in the course, you'll be writing and running Python and JavaScript programs and running them from the command line.  For now, we'll be practicing creating, modifying, and moving files and directories (in the Unix command line environment, we refer to folders as **directories**) in your terminal to get you practicing Unix commands.

So close Finder now and don't open it again.  If you wanna use Finder to organize photos from your family holiday or sweet vacation last summer then that's fine, but never use it for anything related to web development!  As developers we use the Unix command line almost exclusively for managing files and folde--whoops! I meant ***directories***.  

For your first lab, you're going to create files and directories to organize your favorite books, movies, and music. Then, you're going to reorganize them.

There are a couple links to Unix command cheatsheets in the "Additional Resources" section, and you could probably find dozens of useful ones on Google.

### Important: "Man(ual) pages"

Nearly every Unix command has a what's called a "[man page](https://en.wikipedia.org/wiki/Man_page)" (short for "manual page").  You can get extensive info about how any Unix command works by typing `man` and then the name of the program.

For example...

```bash
$ man ls
```

...will give you exhaustive information about how the `ls` command works and the different options (called "flags") you can use to customize the output.  It'll seem like too much information at first, because it is at this point, but get in the habit of using `man` pages now, and you'll learn to love them.

Hit the `Q` key to get out of the man page viewer.


## Exercise

#### Requirements

- In your directory for today, create a directory called `command-line-lab`. Inside of `command-line-lab`, create a directory called `my-favorite-things`. You'll use that directory to do the exercises below.

- Organize your favorite books
  - in the `my-favorite-things` directory, create a directory called `books`
  - create a directory in books named after your favorite author (e.g. `mark_twain`, or `john-grisham`, but avoid spaces!)
  - create files named after some of the author's books in the author's directory
  - open the `books` directory in Sublime/Atom
  - edit each book file to contain a brief description of the book


- Organize your favorite movies

  - in the `my-favorite-things` directory, create a directory called `movies`
  - create a directory in the movies directory named after your favorite actor
  - create a directory in that actor directory named after that actor's breakthrough movie
  - go back to the `movies` directory and create a text file named after the actor's character in their breakthrough movie
  - move the text file into the directory for that actor
  - look back at Sublime/Atom and edit that text file to include a description of the character's role in the movie


- Organize your favorite music

  - in the `my-favorite-things` directory, create a directory called `music`
  - go into the `music` directory
  - create a directory called `disco`
  - create a text file in `disco` called `ymca`
  - delete the `disco` directory
  - create a directory called `creed`
  - delete the `creed` directory
  - create directories called `one-direction`, `the-strokes`, and `rihanna`
  - create a text file in `one-direction` called `what-makes-you-beautiful.txt`
  - from within `one-direction`, copy (**not move**) `what-makes-you-beautiful.txt` into `the-strokes` and also copy it into `rihanna`. rename those files with songs by those artists.


- Reorganize _everything_

  - in the `my-favorite-things` directory, create a directory called `media`
  - move `books`, `movies`, and `music` into the `media` directory


- Organize the top music, movies, and books of 2015

  - move to the `my-favorite-things` directory and duplicate (make a copy of) the `media` directory—your copy should be named `2015-media`
  - in the `2015-media` directory, rename each directory to have `2015-` before the title
  - delete the contents of `2015-music`, `2015-movies`, and `2015-books`
  - create a file called `top-ten-movies.html` in `2015-movies`
  - create a file called `top-ten-songs.html` in `2015-music`
  - create a file called `top-ten-books.html` in `2015-books`
  - create an ordered list - using HTML! - of the top 10 movies, songs, and books in each of the appropriate files

**Bonus**

- Use man pages and google and the additional resources below to figure out how to do the following:

  - find commands that let you look at the top/bottom 10 lines of each file
  - figure out how search through a file from the command line - without opening the file - for a string of text

#### Starter code

No starter code needed for this lab!

#### Deliverable

Be sure you open up your `my-favorite-things` directory in Sublime/Atom, so you can track your progress. Here's a look at what your files/directories should look like after each big step in the exercise:

- After "Organize your favorite books":

![](https://i.imgur.com/ySAjOeO.png)

- After "Organize your favorite movies":

![](https://i.imgur.com/h8WcyVE.png)

- After "Organize your favorite music":

![](https://i.imgur.com/T4E3eAg.png)

- After "Reorganize _everything_"

![](https://i.imgur.com/GEoIps9.png)

- After "Organize the top music, movies, and books of 2015"

![](https://i.imgur.com/EM2m8mL.png)


## Additional Resources

- **MAN PAGES!** ([see "RTFM"](https://en.wikipedia.org/wiki/RTFM)) The entire development community prizes self-reliance as a virtue. To succeed, developers need to persistent and driven solve problems on their own. Of course we'll guide you, keep an eye on you, and answer questions, but as we do so we will focus on instilling/enhancing this quality in our developers throughout the entire class.
- A list of [CLI Shortcuts](https://gist.github.com/alexpchin/01caa027b825d5f98871)
- An awesome Unix command [cheatsheet](https://github.com/veltman/clmystery/blob/master/cheatsheet.md)
