[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Intro to Git

Git is one of a couple tools that you will end up using every day as a
developer; it's an essential component to every developer's work. So what is it?

## Prerequisites

- Familiarity with the command line and terminal

## Lesson Objectives
1. What is Git?
1. What is Github?
1. How do they work together?
1. How do you make a repository and clone it?
1. Stage files
1. Commit files
1. Push files
1. Pull changes from remote repo
1. An introduction beyond the basics (branching merging),

## Preparation

1. Go to your git.generalassemb.ly profile
1. In the top right corner, click the `+` and then click `New Repository`
1. Create a new repository called `my_first_repository`
1. Leave all the other inputs as their defaults
1. Click `Create Repository`
1. Give your instructor a thumbs up so they know you're finished

## What is git?


A version control system - a way to track changes in your computer.

![version control](https://i.imgur.com/sXyZ6nK.png)

Git does this for you "behind the scenes"!

## What is Github?

Github is a company that offers storage for your files. It offers a way for people to easily share their files through forking & cloning. In addition, collaboration is made possible by allowing multiple people to become collaborators on repositories.

## Who Uses It?

Companies who share their code: https://octoverse.github.com/

- Nasa:
  - https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html
  - https://github.com/chrislgarry/Apollo-11
- Spotify:
  - https://github.com/zmb3/spotify
- YOU!


## Other Versioning Tools

You can read more information on this history of [file sharing from Wikipedia](https://en.wikipedia.org/wiki/File_sharing)
In the days of old, people used [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [CSV](https://en.wikipedia.org/wiki/Comma-separated_values),and [SVN](https://en.wikipedia.org/wiki/Apache_Subversion).

Another popular cloud solution that is used with git, Github's competitor, is [Bitbucket](https://bitbucket.org/).

## How Do Git and Github Interact?

### Git

You work with **git** for your local tracking.

![git](https://i.imgur.com/JI8rNwP.png)

### Github

Github is a company that will store your documents "in the cloud". You can have access to your code from any machine from their company website: www.github.com or their enterprise site: https://enterprise.github.com.

**Github:** the code that you write here is public and it can be seen by all! You used this for Fundamentals and will be using it for your projects during the course.

**Github Enterprise:** this is a way for companies to own the server that their work is on save some money. The code here is private. You will be using this for your daily classwork.

![github](https://i.imgur.com/c92z3Wx.png)


### Your Part in Their Relationship

You play the most important part in this relationship. You have to tell **git** whether to track files. In addition, you can also tell **git** to send your work to **Github**.

You do all of this with **git** commands on your command line / terminal.

## We do: Working with Git

Navigate to your `tmp` directory and create a new directory called
   `my_first_repository`


| Command      | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `git init`   | Initialize a repository; turn a directory into a git repo       |
| `git status` | check the state of our repository                               |
| `git add`    | _stage_ changes to be committed                                 |
| `git commit` | save changes to the repo's history (i.e. make them 'permanent') |

###  git init

The command for creating a new repo is `git init` (to _initialize_ a new repo.
This command creates a `.git` directory where Git will track and manages all the
changes to the files in this directory.

You want to be careful where you run `git init`. You only want to run that
command in a folder where you want to create a new repository. If you
accidentally run it somewhere else, can you delete the repository by removing
the `.git` directory

###  git status

If we want to see the current state of our repository, like what files have been
changed and may need to be committed, we can do so by checking the repository's
status (with `git status`).

### Saving Our Work (git add, git commit)

Saving our work in Git requires two steps: Adding changes to the **staging area** (`git add path/to/filename.js`) and then **committing**
(`git commit -m "description of changes"`) those changes.

The **staging area** is one of Git's more unique features, and it can take some
time to wrap your head around it. It helps to think of the **staging area** as a
buffer between the working directory and the project history.

> [Why stage files?](http://gitolite.com/uses-of-index.html)

Instead of automatically committing all of the changes you've made since the
last commit, the **staging area** lets you group _related changes_ into highly
focused snapshots before actually committing to the project history. This means
you can make all sorts of edits to unrelated files, then go back and split them
up into logical commits by adding related changes to the stage and commit them
piece-by-piece

Here's another way to think about it...

![](https://i.imgur.com/NDe9rlS.png)

## You Do: Git practice

Now it's your turn! Work through the following steps:

1. Navigate to your `tmp` directory and create a new directory called
   `my_second_repository`
1. Turn this directory into a git repo. What was the command to do that?
1. Create a file in the repository called `index.html`
1. See the current state of the repository. What command does that?
1. Stage the new file you created. What was the command to do that?
1. Check the new status of the repository. What was the command to do that?
1. Commit your changes to the repository. What was the command to do that?
1. Check the new status of the repository. What was the command to do that?

## Working with GitHub

First, we should clarify: GitHub **did not** create git. Git was created by
Linus Torvald (the same guy who created Linux) and is an open source project.
GitHub is a Software-as-a-Service product built around git.

Developers use GitHub for everything (which is why we use it for everything).

To work with GitHub, we'll need the following commands:

| Command      | Description                                    |
| ------------ | ---------------------------------------------- |
| `git remote` | adds a remote repository to a local repository |
| `git push`   | pushes local changes to the remote repository  |
| `git pull`   | pulls changes from a remote repository         |

### I Do:

Watch me work through the following:

###  Adding a remote (git remote)

When you want to manage the remote repository for a local repository, you use
the `git remote` command. This command has a lot of subcommands to it, including
`add`, which we used to add our GitHub repo as the remote to our local repo:

```sh
git remote add origin <ssh_url_to_github_repo>
```

In the above command, `origin` is a name that we're giving this remote. We can
call it whatever we want, but the convention is to call it `origin`.

###  Push changes (git push)

When we have commits locally that we want to back up and "publish", we use
`git push`. The first time we ran this command, we used
`git push -u origin main`. THe `-u` part sets `origin main` as the default.
So, for now on we can just run `git push` and git will push to `origin main`.

When we push to a remote, we want to specify:

1. Which remote are we pushing to (it's common to have more than one!)
1. Which branch are we pushing to

We're going to talk about branches more in another lesson. For now, you'll only
have one branch: the `main` branch. We'll also only have one remote for now.
But we'll still need to tell Git what remote and branch we want to push to, so
we have to run `git push origin main` or set `origin main` as the default.

### You Do: Working with GitHub

Now it's your turn! Work through the following steps:

1. Add your remote repository on GitHub to your local repository. What was the
   command for that? Use the repository on GitHub you created at the beginning
   of class.
2. Push your changes to your remote. What was the command for that?
3. Visit your repo on GitHub to see if the changes made it 🤞
4. Make a change to your local repository, stage and commit that change, and
   then push it. What was the command for that? Is it the same as the previous
   command you used to push changes?

###  Pull changes from remote repo

Pull any changes others made to the repo into your local version of the repo

- `git pull origin main`

###  Create a branch

- When working on a specific feature, it's generally a good idea to create a "branch"
- This is purely for organizational purposes
	- In general, the `main` branch is for finished features
	- If you are working on a feature, it's not complete, but you want to save those changes to the repo (perhaps it's the end of the day), you can use branches to keep your changes off the `master` branch
- To list all branches run `git branch`
- To create a new branch run `git branch newbranch`
- Switch to a branch using `git checkout foo`.  From now on, until you change branches again, all commits will be created on that branch

### Push a branch to the repo

- `git push origin newbranch` will push the currently active branch to the remote on a branch called "newbranch"
- in general, you should push a local branch to a branch on the remote repo with the same name

###  Merge a branch into another branch

Once you are finished with branch and want to merge it (usually back into master):

1. switch to the branch that you want to merge the new branch INTO (`git checkout main`)
1. merge the branch using `git merge newbranch`.  This will merge the `newbranch` branch into the currently active branch

## Review: What did we just do

### Adding a remote

**Command:** `git remote`

When you want to manage the remote repository for a local repository, you use
the `git remote` command. This command has a lot of subcommands to it, including
`add`, which we used to add our GitHub repo as the remote to our local repo:

```sh
git remote add origin <ssh_url_to_github_repo>
```

In the above command, `origin` is a name that we're giving this remote. We can
call it whatever we want, but the convention is to call it `origin`.

### Pushing Changes

**Command:** `git push`

When we have commits locally that we want to back up and "publish", we use
`git push`. The first time we ran this command, we used
`git push -u origin main`. THe `-u` part sets `origin main` as the default.
So, for now on we can just run `git push` and git will push to `origin main`.

When we push to a remote, we want to specify:

1. Which remote are we pushing to (it's common to have more than one!)
1. Which branch are we pushing to

We're going to talk about branches more in another lesson. For now, you'll only
have one branch: the `main` branch. We'll also only have one remote for now.
But we'll still need to tell Git what remote and branch we want to push to, so
we have to run `git push origin main` or set `origin main` as the default.

## Additional Resources

- [Become a Git Guru](https://www.atlassian.com/git/tutorials)
- [What makes a great commit message?](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- [Interactive Git Cheetsheet](http://ndpsoftware.com/git-cheatsheet.html)
- [Github Guides](https://guides.github.com)
- [Github Training](https://training.github.com/kit/)
- [Git Immersion - Interactive Course](http://gitimmersion.com/lab_05.html)
- [Pro Git](http://git-scm.com/book/en/v2) - An in-depth free PDF book for those
  wanting to understand git deeper
- [GitUp - Interactive Commit Visualizer](http://gitup.co)
- [Practice with Git](https://github.com/grayghostvisuals/practice-git)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
   alternative licensing, please contact legal@ga.co.
