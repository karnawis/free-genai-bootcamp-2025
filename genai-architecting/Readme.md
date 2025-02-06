genai-architecting

## Functional Requirements

The company wants to invest in a hybrid architecture, partially owning their infrastructure and partially using microservices.
This is due to concerns about user data privacy and the rising costs of managed GenAI services.

They plan to invest $10K in an AI PC to self-host core components (e.g., LLM, database) and use microservices for additional features.

They have 100 active students located in Laval, QC

## Assumptions

Open-source LLMs (e.g., IBM Granite) will run efficiently on the $10K AI PC.

A single server in the office will handle self-hosted components, with sufficient bandwidth for 100 students.

Microservices for additional features will be hosted on a cloud platform for scalability.

(delete) We are assuming that the Open-source LLMs that we choose will be powerful enough to run on hardware with an investment of 10K. We're just going to hook up a single serve in our office to the internet and we should have enough bandwidth to serve the 100 students and the other part hybird on microservice.

## Features | Students

Writing practice app.

Text and puzzle games.

Sentence constructor.

### Additional Features

Gamified learning with rewards and achievements.

Interactive lessons and quizzes.

Progress tracking and personalized recommendations.

## Data Strategy

Copyrighted materials will be avoided by purchasing and curating learning materials.
All data (user progress, learning materials) will be stored in a self-hosted database for privacy.

## Considerations

IBM Granite will be used as the LLM due to its open-source nature and traceable training data.

A hybrid architecture ensures privacy (self-hosted) and scalability (cloud-hosted microservices).

https://huggingface.co/ibm-granite
