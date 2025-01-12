# Start with a base image for Java applications
FROM eclipse-temurin:17-jdk

# Set the working directory in the container
WORKDIR /app

# Install Python
RUN apt-get update && apt-get install -y python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*

# Copy the JAR file built by Maven
COPY target/*.jar app.jar

# Expose the port used by the service
EXPOSE 9090

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
