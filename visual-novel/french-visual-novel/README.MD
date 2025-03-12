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

## prompting for engineering

```
I'm building a visual novel video game for french language learning. I wanted to build it with phaser js. can you build it for me, take a look at the tech specs and the story structure
```

I use github co-pilot coding assistant.
I tried gpt4o it didn't work for me. I used Gemini didn't work, I used sonnet 3.5

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

checking out https://phaser.io/examples/v3.85.0/actions

```
npm i http-server -g
```

it should server the public directory or the build directory

```
http-server
```
