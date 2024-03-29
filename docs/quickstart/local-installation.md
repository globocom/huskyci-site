---
id: local-installation
title: Local installation
---

The following instructions will help you set up your local environment to test and code this tool locally.

## Installing

After forking and cloning the HuskyCI repository, simply run the command inside HuskyCI's folder:

```bash
make install
```

## Running

After installing, a `.env` file with the environment variables required to run a POC HuskyCI analysis should be generated:

```bash
export HUSKYCI_CLIENT_REPO_URL="https://github.com/globocom/huskyCI.git"
export HUSKYCI_CLIENT_REPO_BRANCH="poc-python-bandit"
export HUSKYCI_CLIENT_API_ADDR="http://localhost:8888"
export HUSKYCI_CLIENT_API_USE_HTTPS="false"
export HUSKYCI_CLIENT_TOKEN="{YOUR_TOKEN_HERE}"
```

You can change the repository and branch being analyzed by modifying the contents of `HUSKYCI_CLIENT_REPO_URL` and `HUSKYCI_CLIENT_REPO_BRANCH`. Then simply source it through the command:

```bash
source .env
```

Mac OS:

```bash
make run-client
```

Linux:

```bash
make run-client-linux
```

## Results

If everything went well, you should see something similar to the following:

```bash
[HUSKYCI][*] poc-python-bandit -> https://github.com/globocom/huskyCI.git
[HUSKYCI][*] huskyCI analysis started! ZHLYMYOZkgkxZ5VhBumBXuwVe87yGyFQ

[HUSKYCI][!] Language: Python
[HUSKYCI][!] Tool: Bandit
[HUSKYCI][!] Severity: LOW
[HUSKYCI][!] Confidence: MEDIUM
[HUSKYCI][!] Details: Possible hardcoded password: 'password123!'
[HUSKYCI][!] File: ./main.py
[HUSKYCI][!] Line: 1
[HUSKYCI][!] Code:
1 secret = 'password123!'
2 
3 password = 'thisisnotapassword' #nohusky
4 


[HUSKYCI][!] Language: Python
[HUSKYCI][!] Tool: Bandit
[HUSKYCI][!] Severity: MEDIUM
[HUSKYCI][!] Confidence: HIGH
[HUSKYCI][!] Details: Use of exec detected.
[HUSKYCI][!] File: ./main.py
[HUSKYCI][!] Line: 7
[HUSKYCI][!] Code:
6 
7 exec(command)
8 


[HUSKYCI][!] Language: Python
[HUSKYCI][!] Tool: Safety
[HUSKYCI][!] Severity: low
[HUSKYCI][!] Code: 
[HUSKYCI][!] Vulnerable Below: 
[HUSKYCI][!] Details: It looks like your project doesn't have a requirements.txt file. huskyCI was not able to run safety properly.

[HUSKYCI][SUMMARY] Python -> huskyci/bandit:1.6.2
[HUSKYCI][SUMMARY] High: 0
[HUSKYCI][SUMMARY] Medium: 1
[HUSKYCI][SUMMARY] Low: 1
[HUSKYCI][SUMMARY] NoSecHusky: 1

[HUSKYCI][SUMMARY] Python -> huskyci/safety:1.8.5
[HUSKYCI][SUMMARY] High: 0
[HUSKYCI][SUMMARY] Medium: 0
[HUSKYCI][SUMMARY] Low: 1

[HUSKYCI][SUMMARY] Total
[HUSKYCI][SUMMARY] High: 0
[HUSKYCI][SUMMARY] Medium: 1
[HUSKYCI][SUMMARY] Low: 2
[HUSKYCI][SUMMARY] NoSecHusky: 1

[HUSKYCI][*] Some HIGH/MEDIUM issues were found :(
```

### HuskyCI Exit Codes

After completing a scan, HuskyCI returns some codes according to the result found or errors during the process. By default, if no vulnerabilities are found, the exit code is 0. This code does not break the applications' pipeline.

| Code | Meaning                                                         |
|------|-----------------------------------------------------------------|
| 0    | Scan completed successfully and no medium/high vulnerabilities were found |
| 190  | Scan completed successfully and medium/high vulnerabilities were found     |


## Make

HuskyCI has some pre-defined functions that may help you locally develop awesome features. Simply run the following:

```bash
make
```

```bash
$ make build-cli-linux: Builds CLI to the executable file huskyci-client
$ make build-cli: Builds CLI to the executable file huskyci-client
$ make build-client-linux: Builds client to the executable file huskyci-client
$ make build-client: Builds client to the executable file huskyci-client
$ make build-containers: Builds all securityTest containers locally with the tag latest
$ make build: Builds Go project to the executable file huskyci
$ make check-containers-version: Checks every securityTest version from their container images
$ make check-deps: Checks dependencies of the project
$ make check-env: Checks .env file from huskyCI
$ make check-sec: Runs a security static analysis using Gosec
$ make compose: Composes huskyCI environment using docker-compose
$ make coverage: Run tests with code coverage
$ make create-certs: Creates certs and sets all config to huskyCI_Docker_API
$ make generate-local-token: Generates a local token to be used in a local environment
$ make generate-passwords: Generates passwords and set them as environment variables
$ make get-gosec-deps: Gets all gosec dependencies
$ make get-lint-deps: Gets all link dependencies
$ make get-test-deps: Gets all go test dependencies
$ make ginkgo: Runs ginkgo
$ make golangci-lint: Runs Golangci-lint
$ make golint: Runs go lint
$ make gosec: Runs gosec
$ make help: Prints help message
$ make install: Installs a development environment using docker-compose
$ make lint: Runs all huskyCI lint
$ make push-containers: Push securityTest containers to hub.docker
$ make restart-huskyci-api: Restarts only huskyCI_API container
$ make run-cli-linux: Run huskyci-client compiling it in Linux arch
$ make run-cli: Runs huskyci-client
$ make run-client-json: Runs huskyci-client with JSON output
$ make run-client-linux-json: Run huskyci-client compiling it in Linux arch with JSON output
$ make run-client-linux: Run huskyci-client compiling it in Linux arch
$ make run-client: Runs huskyci-client
$ make test: Perfoms all make tests
$ make update-containers: Builds and push securityTest containers with the latest tags
```
