#!/bin/bash
# chmod +x entrypoint.sh

#rasa train nlu --nlu ./data/time -c config_time.yml
rasa train nlu --nlu ./data/vui -c config.yml
## rasa train --data ./data/$case -c config_$case.yml
rasa run -m models --enable-api --cors '*'