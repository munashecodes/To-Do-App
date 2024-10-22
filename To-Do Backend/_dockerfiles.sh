#!/bin/bash

# List of your project folders
projects=("To-Do.Data" "To-Do.Server" "To-Do.Service")

# Path to the Dockerfile template
template="Dockerfile.template"

for project in "${projects[@]}"; do
    # Create a new Dockerfile in the project directory
    output_file="$project/Dockerfile"
    
    # Replace the placeholder with the actual project name
    sed "s/{PROJECT_NAME}/$project/g" "$template" > "$output_file"
    
    echo "Generated Dockerfile for $project"
done