# Start with a base image for Java applications
FROM eclipse-temurin:17-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file built by Maven
COPY target/*.jar app.jar

# Expose the port used by the service
EXPOSE 9091

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
