# Étape 1 : Build de l'application avec Parcel
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet
COPY . .

# Exécuter la commande de build pour créer le dossier 'build'
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Copier le contenu du dossier 'build' depuis l'étape précédente vers Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]