FROM node:6
RUN npm run build
EXPOSE 9000
CMD ["node", "server.js"]
