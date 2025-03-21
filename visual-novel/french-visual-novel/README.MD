# PROMPTS

# generate images using something

- understand andrew's visual novel - specially including of AI model/agent

[Andrew's video on visual novel](https://www.youtube.com/watch?v=jv61-ucQjOc&list=PLBfufR7vyJJ69c9MNlOKtO2w2KU5VzLJV&index=57)

prompt 1

````
I'm writing a techncial specification to describe how a visual novel video game will work. can you give me headings I need for game design

```

prompt 2
````

when describing a game concept for the visual novel I'm trying to describe how the visual overl doesn't have much interaction or if they do it's choices and so if just a big if else tree. how to describe that?

```

try another model / gemini/sonnet..etc
prompt:
```

“flesh out possible characters”

```

```

### Generate images

you can use bedrock > aws nova to generate images
tried sonnet 3.7 was a waste of time for images, however I like how I was able to tsee the code of the svg and change the bits I wanted to change
I used gpt4o pro for generating inspired by south park characters

## Story

prompt

```
now I need to think about the story arc and how it's going to be useful for language learning. can you give me an idea based on the characaters we have for a story arc. we need branches for the story?
```

## character

```
we can't have more than one person in a conversation due to garphics
```

```
show one character at a time due to graphics
```

## creating story structure

create a french stroy structure using the japanese story template. we are trying to achieve patterns so the llm can drive it later [story-structure](french-story-structure.md) - worked on flatten up the structure

https://www.youtube.com/watch?v=jv61-ucQjOc&list=PLBfufR7vyJJ69c9MNlOKtO2w2KU5VzLJV&index=57

## Bring the engine

https://www.youtube.com/watch?v=grn-0-5j5sc&list=PLBfufR7vyJJ69c9MNlOKtO2w2KU5VzLJV&index=58

work on game engine

- convert from japanese to french
- understand files
- change story to french

checking out https://phaser.io/examples/v3.85.0/actions

## prompting for engineering

```
    I'm building a visual novel video game for french language learning. I wanted to build it with phaser js. can you build it for me, take a look at the tech specs and the story structure
```

I use github co-pilot coding assistant.
I tried gpt4o it didn't work for me. I used Gemini didn't work, I used sonnet 3.5

at this point, check if it uses the most recent phaser js (v3), check if there's the main game file
prompt

```
    you keep erroring at making the game scene, can you break it down into smaller tasks so that you're writing something.

```

- at this point it should share thought process
- after generating the asset game scene
  serve the files 'index.html' and the files from the following

```
    npm i http-server -g
```

it should server the public directory or the build directory

```
    http-server
```

Check out local host, usually http server default port is 8080
focus on resolving errors files are not loading, commenting out some scripts until going through it all.

### looping music

how to make a background music, use any looping music

https://www.youtube.com/watch?v=tILmKV3oqBs&list=PLBfufR7vyJJ69c9MNlOKtO2w2KU5VzLJV&index=59

prompt

```
the game scene file is very larnage can we refactor out a lot off the ui interactions into their own files in a lin lirary directory, suggest a plan for moving files
```

going through module by module and try to understand, check initializer, alot of refactoring
prompt error
'the erorror in the file manager files, type rror can't read property, see what is happenign in that location'

don't trust the ai assistant verify everything

https://www.youtube.com/watch?v=CQenp4Zgr5w&list=PLBfufR7vyJJ69c9MNlOKtO2w2KU5VzLJV&index=60

remove redundancy or over checking, like if global manager isnt initated just initiate it

```
why the global manager is initializing twice
```

console.log(this.scene.gamesc..)

visual novel next
https://www.youtube.com/watch?v=c3UVX8Izi_Q&list=PLBfufR7vyJJ69c9MNlOKtO2w2KU5VzLJV&index=67

local
https://youtu.be/VeneAbQBhmg?si=TaFz6VW7AAQnIGGm
