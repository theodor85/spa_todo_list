FROM nginx:1.17.6-alpine
COPY ./compose/production/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./vue/index.html /usr/share/nginx/html
COPY ./vue/css /usr/share/nginx/html
COPY ./vue/dist /usr/share/nginx/html