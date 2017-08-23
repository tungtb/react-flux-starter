FROM nginx

MAINTAINER tungtb <tranbatungbk@gmail.com>

# Bundle app source
COPY build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

EXPOSE 80
