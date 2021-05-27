#!/bin/bash

docker ps --filter ancestor=myfunction:latest -q | xargs docker kill