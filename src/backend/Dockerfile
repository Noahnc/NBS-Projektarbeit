# syntax=docker/dockerfile:1
FROM ubuntu:latest

# Installing dependencies
RUN sudo apt update & apt install python -y
RUN sudo apt install python3-pip -y
RUN sudo pip install -U Flask

WORKDIR /usr/sbin

RUN mkdir NBS_Project_Backend

WORKDIR /usr/sbin/NBS_Project_Backend

COPY src/ ./

# expose Port 80 for RESTfull API requests
EXPOSE 80

# check container health on port 80
HEALTHCHECK CMD curl --fail http://localhost:80 || exit 1