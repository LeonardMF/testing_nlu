# Alexa CLI

[Quickstart](https://developer.amazon.com/de/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html)
[Youtube](https://www.youtube.com/watch?v=I-Dw8IpnS2g)
Better [Tutorial](https://www.youtube.com/watch?v=lcJ_K7dTjW0)

##Prerequisites

You need: 
- Amazon developer Account
- Node.js
- AWS Account + ASK-CLI [IAM](https://developer.amazon.com/fr/docs/smapi/manage-credentials-with-ask-cli.html#create-aws-credentials)User

##Install and initialize ASK CLI
	
	
	$ sudo npm install -g ask-cli
	
	
	$ ask init --aws-setup
	$ ask init
	
	$ ask new -n "testing skill"
	? Please select the runtime Node.js V8
	? List of templates you can choose Hello World
	
	$ cd testing_skill
	
	$ ask deploy
	
	
	
	
	
	
[Simulate Command](https://developer.amazon.com/de/docs/smapi/ask-cli-command-reference.html#simulate-command)

	$ ask simulate -l de-DE