FROM node:6-onbuild
RUN npm run build
EXPOSE 9000
CMD ["node", "server.js"]
