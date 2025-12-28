FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# copy website files
COPY index.html .
COPY contact.html .
COPY styles.css .

# copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
