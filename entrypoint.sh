#!/bin/bash
# chmod +x entrypoint.sh

#rasa train --data ./data/time -c config_time.yml
rasa train --data ./data -c config.yml
rasa run -m models --enable-api --cors '*'