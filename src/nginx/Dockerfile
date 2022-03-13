FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
COPY vHosts/frontend.conf /etc/nginx/conf.d/frontend.conf
COPY vHosts/backend.conf /etc/nginx/conf.d/backend.conf
COPY nginx-cert/cert.pem /etc/ssl/nginx/cert.pem
COPY nginx-cert/key.pem /etc/ssl/nginx/key.pem
EXPOSE 443
