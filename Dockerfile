FROM node:current-bullseye-slim
RUN apt-get update && apt-get install wget -y \
    && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb \
    && apt-get install ./google-chrome-stable_current_amd64.deb -y
WORKDIR /usr/puppeteer
COPY ./package.json ./
RUN npm --save i \
    && mkdir /usr/puppeteer/video
COPY ./recorder.js ./
CMD npm run start

# How to start docker
# docker build -t rec .
# docker run -v "$(pwd)/result":/usr/puppeteer/video --net=host -it rec:latest
