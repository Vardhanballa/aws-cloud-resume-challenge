# Cloud Resume Challenge On AWS

![Project Logo]images/Blueprint.png)

## Description

The Cloud Resume Challenge on AWS is a personal portfolio project created using HTML, CSS, and JavaScript. The project is hosted on AWS S3 bucket utilizing the S3 web hosting option, which is ideal for hosting static websites. In addition to showcasing your skills and projects, the portfolio includes a unique feature—a viewer counter that increments every time a user loads the website.

### Features

- **Static Website Hosting**: Utilizes AWS S3 bucket for efficient static website hosting.

- **Viewer Counter**: Implements a viewer counter functionality using AWS Serverless services.

    - **DynamoDB**: Stores viewer count data.
  
    - **Lambda**: Executes backend queries to update the viewer count in the DynamoDB.

## Usage

1. Access the live website hosted on AWS S3: [Portfolio Link](www.vardhanballa.me)

2. Explore the portfolio to learn more about the projects and skills.

3. Note the viewer counter, which increments each time the website is loaded.

## Deployment

The project is deployed on AWS S3, and the viewer counter functionality is powered by AWS Lambda and DynamoDB.

### Hosting on AWS S3

Follow the AWS documentation to set up an S3 bucket for static website hosting: [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)

### Serverless Viewer Counter

1. Set up an AWS DynamoDB table to store viewer count data.

2. Create an AWS Lambda function to update the viewer count in DynamoDB.

3. Configure the necessary permissions for Lambda to access DynamoDB.

4. Integrate the Lambda function with the website to trigger the viewer count update.
