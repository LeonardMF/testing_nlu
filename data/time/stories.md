## happy path A
* startTest{"wakeword": "Ok Google"}
  - utter_time
* getTime
  - utter_lissabon
* getTimeLocation
  - action_restart

## sad path A
  - utter_time
* getTime
  - utter_lissabon
* getTime OR noResponse
  - action_restart  

## Ok Google path A
* startTest{"wakeword": "Ok Google"}
  - utter_time
* getTime
  - utter_lissabon
* getTimeLocation
  - action_restart

## Alexa path A
* startTest{"wakeword": "Alexa"}
  - utter_time
* getTime
  - utter_lissabon
* getTime OR noResponse
  - action_restart  

## After startTest
* startTest{"wakeword": "Alexa"}
  - utter_time

## After getTime
* getTime
  - utter_lissabon

## After getTimeLocation
* getTimeLocation
  - action_restart