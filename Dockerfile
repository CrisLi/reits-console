FROM crisli/express-server:latest

COPY dist/ /usr/app/public

EXPOSE 3000
