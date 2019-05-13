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

