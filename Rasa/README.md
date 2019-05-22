# Rasa

Testing using Rasa NLU 


## Installation

        pip3 install rasa_nlu

        git clone https://github.com/RasaHQ/starter-pack-rasa-nlu.git

        pip3 install -r requirements.txt

        python -m spacy download en
        python -m spacy download de

## Train

        $ make train-nlu

## Start

        $ make run-nlu


## Test 

Postman
        $ curl -X POST localhost:5000/parse -d '{"query":"Hello", "project": "current"}'



## Intent

- hello: Hallo Welt - Programm
- orderFood: Essenbestellen als simpler Test 

## Endities

- food: `[Pizza](food)`
- time: 

[DucklingHTTPExtractor](https://rasa.com/docs/nlu/components/#ducklinghttpextractor)

## Docker

Check Docker version and compse-file: [Link](https://docs.docker.com/compose/compose-file/)

[Sample](https://github.com/RasaHQ/rasa/blob/master/docker/docker-compose.yml)

[Blogpost](https://blog.spg.ai/using-rasa-nlu-with-docker-96b86856b392) 

### Run Docker 

        $ docker run -p 8000:8000 rasa/duckling
        $ docker run rasa/rasa_nlu:latest-full -p5000:5000

### Run Docker Compose

        $ docker-compose up

### Check Rasa NLU Container

        $ docker ps
        $ docker exec -it rasa_rasa_1 /bin/bash
        $ exit
