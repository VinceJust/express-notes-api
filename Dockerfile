# Verwende ein Node.js-Base-Image
FROM node:22.13-alpine

# Arbeitsverzeichnis im Container setzen
WORKDIR /usr/src/app

# Package-Dateien kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm ci

# Kopiere den Rest des Codes in den Container
COPY . .

# Exponiere den Port (8080 standardmäßig)
EXPOSE 8080

# Startbefehl für den Container
CMD ["node", "index.js"]
