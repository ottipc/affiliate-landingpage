# Node.js mit minimalem Linux als Basis
FROM node:18-alpine
# Arbeitsverzeichnis im Container
WORKDIR /app
# Package-Dateien zuerst kopieren und Dependencies installieren
COPY package*.json ./

RUN npm install
# Restlichen Code kopieren
COPY . .
# Build erzeugen
RUN npm run build
# Startkommando
CMD ["npm", "start"]
# Port öffnen
EXPOSE 3000
