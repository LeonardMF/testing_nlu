# Test NLU

The Test NLU uses [Rasa 1.0](http://rasa.com/docs/rasa/) Stack.
The Chatbot functionallty of Rasa CORE is handled by the Test Manager, the [Using only NLU](https://rasa.com/docs/rasa/nlu/using-nlu-only/) approach has been used.

## Prerequisites

Python >= 3.7.4


## Create Virtual Environment

Follow the instruction in der [Docs](https://docs.python.org/3/tutorial/venv.html) and [Blog](https://medium.com/@jtpaasch/the-right-way-to-use-virtual-environments-1bc255a0cba7):

    $ python3 -m venv venv
    $ echo 'venv' > .gitignore

    $ source venv/bin/activate

## Select Interpreter (VS Code)

To select a specific environment, use the Command Palette (⇧⌘P).
Type in ```Python: Select Interpreter``` and select ```./venv/bin/python```.

[Docs](https://code.visualstudio.com/docs/python/environments)

## Install Rasa

Follow the instruction in der [Docs](http://rasa.com/docs/rasa/user-guide/installation/):

    $ pip3 install rasa

Know Error. With 1.1.7 and Only NLU:
[Workaround](https://forum.rasa.com/t/rasa-nlu-parameter-parsing/13308):

    $ pip install git+git://github.com/rasaHQ/rasa.git@master

### Install NLU Dependencies 

Follow the instruction in der [Docs](http://rasa.com/docs/rasa/user-guide/installation/#nlu-pipeline-dependencies):

    $ pip install rasa[spacy]
    $ python -m spacy download en_core_web_md
    $ python -m spacy link en_core_web_md en

    $ python -m spacy download de

    $ python -m spacy download de_core_news_md
    $ python -m spacy link de_core_news_md de

Taken from [spacy.io](https://spacy.io/models/de).

## Freeze the requirements:

    $ pip freeze > requirements.txt
    $ git add requirements.txt

## Init Rasa

    $ rasa init

## Train Model

    $ rasa nlu train

## Run Rasa on server

    $ rasa run --enable-api -m models/nlu-20190725-013745.tar.gz 
     --cors "*"

    [Docs](https://rasa.com/docs/rasa/nlu/using-nlu-only/)
    
## Know Errors: 


## Run Docker 

    $ docker run -p 8000:8000 rasa/duckling
    $ docker run rasa/rasa:latest-full -p5000:5000
        
### Run Docker Compose

    $ docker-compose up

### Check Rasa NLU Container

    $ docker ps
    $ docker exec -it rasa_rasa_1 /bin/bash
    # exit -->

### Start with Test Manager

    $ docker-compose -f docker-compose.yml -f ../test_manager/docker-compose.yaml up