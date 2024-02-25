# Step 1: Specify the base image
FROM node:20.9.0

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy the rest of the app's files
COPY . .

# Step 5: Set the environment variables
ENV PORT=8080
ENV COOKIE_SECRET=your_cookie_secret_value

# Step 6: Set the command to run the app
CMD ["node", "index.js"]