# Deployment with Azure
 what is the purpose of this repository?
This repository contains the code and configuration files necessary to deploy a web application using Azure services. The deployment process is automated using GitHub Actions, which allows for continuous integration and continuous deployment (CI/CD) of the application. And it serves a s a tutorial for the deployment process with differnet Azure services.

## Table of Contents
- [Requirements](#requirements)
- [About the project code](#about-the-project-code)
- [Project set up](#project-set-up)
- [Azure Account set up](#azure-account-set-up)
- [Azure Web App set up](#azure-web-app-set-up)
- [Azure DevOps Account set up](#azure-devops-account-set-up)
- [Azure DevOps CI/CD Pipeline set up](#azure-devops-cicd-pipeline-set-up)
- [YAML file](#yaml-file)
- [Conclusion](#conclusion)



# Requirements
1. **Azure account:** You need an Azure account to create and manage resources in Azure. You can sign up for a free account if you don't have one already. You can signup [here](https://azure.microsoft.com/en-us/free/). The free account provides you with a limited amount of credits to use for Azure services for the first 30 days. After that, you can continue using some services for free, but others will incur charges. 
**Note:** Another option is that you can subscribe for a student account if you are a student. You can get free credits for the first year and some services are free for 12 months. for that you have to verify your student status. you can subscribe [here:]( https://azure.microsoft.com/en-us/free/students/.)
2. **GitHub account:** You need a GitHub account to host the code and configuration files for the web application. You can sign up for a free account [here](https://github.com/), if you don't have one already. you should beside that have Git installed on your local machine. You can download and install Git from the official Git website: [Git](https://git-scm.com/).
3. **Node.js:** For the Project set up you need to have nodejs and npm installed on your local machine. You can download and install them from the official Node.js website: [Node.js](https://nodejs.org/).
4. **IDE:** You will need an IDE to edit the code and configuration files, such as [Visual Studio Code](https://code.visualstudio.com/).

# About the project code
The code in the repository is a very simple  web application with react express nodejs and postgresql, divided into 2 parts, client and server and a yaml fil, which will be discussed later, the server is connected to a database and you should have a .env file with a variable DATABASE_URL in it, where you should define the url for your dtaabase connection. The client is a simple React application that fetches data from the server and displays it on the web page. The server is a simple Express application that serves the API endpoints for the client to consume. The database is a PostgreSQL database that stores the data for the web application.
The project is structured as follows:
```
DeploymentWithAzure
├── .github
│   └── workflows
├── client
│   ├── public
│   ├── src
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── server
│   ├── .gitignore
│   ├── .env
│   ├── package-lock.json
│   ├── package.json
│   ├── app.js
│   ├──azure.yml
└── README.md
```

# Project set up
1. **Clone the repository:** Clone this repository to your local machine using the following command:
```bash
git clone https://github.com/hossei-cyber/DeploymentWithAzure.git
```
2. **Navigate to the project directory:** Change to the project directory using the following command:
```bash
cd DeploymentWithAzure
```
3. **Install dependencies:** Install the required dependencies using npm in both folders Client and Server. Run the following command in the client directory:

```bash
cd client # Navigate to the client directory
npm install # Install dependencies for the client
cd ..  # Navigate back to the project directory
cd server # Navigate to the server directory
npm install  # Install dependencies for the server
```
This should install all the required dependencies for both the client and server applications. You will have node_modules folder in both directories.
4. **Create a .env file:** Create a .env file in the server directory and add the following line to it:
```bash
DATABASE_URL=your_database_url_here
```
Replace `your_database_url_here` with the actual URL of your PostgreSQL database. This URL should include the username, password, host, port, and database name.
**Note:** You can also leave out the DB Connection Part by commenting it out in the app.js file. 

5. **Run the server:** Start the server by running the following command in the server directory:
```bash
cd server # Navigate to the server directory
npm start  # Install dependencies for the server
```
6. **Run the client:** Start the client by running the following command in the client directory:
```bash
cd client # Navigate to the client directory
npm start  # Install dependencies for the client
```
# Azure Account set up
1. You can check your Subscription in the Azure Portal. You can find it [here](https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade). In my Case  I have an Azure for Students subscription, which looks like this:
![Screenshot](/Assets/subscriptionoverview.PNG)
 
If you see this, then you are ready to go. If not, you can create a new subscription by clicking on the "Add" button and following the instructions. You can also check your credits and usage in the Azure Portal [here](https://portal.azure.com/#blade/Microsoft_Azure_Billing/UsageBlade).  For a tutorial on getting introduced to Azure portal, you can watch [this](https://www.youtube.com/watch?v=leJRc0JWzSY) video.

# Azure DevOps Account set up
1. You can check your Azure DevOps account in the Azure Portal. You can find it [here](https://dev.azure.com/). If you don't have an account, you can create one by clicking on the "Start free" button and following the instructions. You should be reddirectedd to your Azure DevOps account, which looks like this:
![Screenshot](/Assets/DevOps%20Overview.PNG)

Azure Devops is a set of development tools and services that help you plan, develop, test, and deliver software. It includes features such as version control, build automation, release management, and project management. You can use Azure DevOps to manage your code repositories, build and deploy your applications, and track your work items.

 1.1. **Create a new project:** Create a new project in Azure DevOps by clicking on the "New Project" button and following the instructions. You can name your project anything you like. You can choose a name description and set the visibilty to public or private and click on "create":
![Screenshot](/Assets/newProject.PNG)

1.2 **Azure DevOps Overview:** After creating the project, you will be redirected to the project overview page. You can see the different services available in Azure DevOps, such as Repos, Pipelines, Boards, Test Plans, and Artifacts. You can also see the project settings and the project dashboard. The project overview page looks like this:
![Screenshot](/Assets/projectOverview.PNG)

I will not go into details about each service, that is out of the scope of this tutorial. But I will give you a brief overview of each service:
- **Boards:** This service allows you to manage your work items and track your progress. You can create user stories, tasks, bugs, and epics. You can also create Kanban boards and sprint backlogs to manage your work.
- **Repos:** This service allows you to manage your code repositories. You can create, clone, and manage your Git repositories. You can also view the commit history, branches, and pull requests.
- **Pipelines:** This service allows you to automate your build and deployment processes. You can create build pipelines to compile your code, run tests, and create artifacts. You can also create release pipelines to deploy your applications to different environments.
- **Test Plans:** This service allows you to manage your test cases and test plans. You can create test cases, test suites, and test plans. You can also run manual and automated tests and track the results.
- **Artifacts:** This service allows you to manage your build artifacts. You can create and publish NuGet packages, Maven packages, and npm packages. You can also manage your package feeds and view the package versions.
- **Project Settings:** This service allows you to manage your project settings. You can configure your project settings, security settings, and service connections. You can also manage your project members and permissions.

# Azure Devops CI/CD Pipeline set up
1. **Create a new pipeline:** Create a new pipeline in Azure DevOps by clicking on the "Pipelines" tab and then clicking on the "Create Pipeline" button. You will be redirected to the pipeline creation page, here you will set the CI/CD pipeline for your project in 4 steps:
1.1 **Connect:** Where is your Code? You can choose where your code is hosted. In our case, we will choose GitHub. You can also choose Azure Repos, Bitbucket, or other options. After selecting GitHub, you will be asked to authorize Azure DevOps to access your GitHub account. Click on "Authorize AzurePipelines" and follow the instructions to authorize Azure DevOps to access your GitHub account. After that, you will be redirected to the pipeline creation page again.
![Screenshot](/Assets/connect.PNG)
1.2. **Select:** Select the repository where your code is hosted. In our case, we will select the repository that we cloned earlier. You can also search for your repository by typing the name in the search box.
![Screenshot](/Assets/select.PNG)
1.3. **Configure:** Configure your pipeline. You are given some templates to choose from, you can choose the one that fits your project. In our case, we will choose the "Node.js" template. You can also choose "Empty Job" if you want to create your own pipeline from scratch. After selecting the template, you will be redirected to the pipeline configuration page. You can see the YAML file that defines your pipeline. You can also edit the YAML file directly in this page.
![Screenshot](/Assets/config.PNG)
1.4. **Review:** Review your pipeline configuration. You can see the summary of your pipeline configuration. You can also see the YAML file that defines your pipeline. In our case , we will see the following YAML file:
```yaml
trigger:
- main

stages:
- stage: Build
  displayName: 'Build Stage'
  jobs:
  - job: BuildJob
    displayName: 'Build Job'
    pool:
      vmImage: 'ubuntu-latest'
    steps:
    - task: NodeTool@0
      inputs:
        versionSpec: '20.x'
      displayName: 'Install Node.js'

    - script: |
        cd server
        npm install
      displayName: 'Install Dependencies'

    - task: ArchiveFiles@2
      inputs:
        rootFolderOrFile: '$(System.DefaultWorkingDirectory)'
        includeRootFolder: false
        archiveType: 'zip'
        archiveFile: '$(Build.ArtifactStagingDirectory)/backend.zip'
        replaceExistingArchive: true
      displayName: 'Archive Backend Files'

    - publish: '$(Build.ArtifactStagingDirectory)/backend.zip'
      artifact: 'drop'

- stage: Deploy
  displayName: 'Deploy Stage'
  dependsOn: Build
  jobs:
  - deployment: DeployJob
    displayName: 'Deploy Job'
    environment: 'production'
    pool:
      vmImage: 'ubuntu-latest'
    strategy:
      runOnce:
        deploy:
          steps:
          - download: current
            artifact: drop

          - task: AzureRmWebAppDeployment@5
            inputs:
              ConnectionType: 'AzureRM'
              azureSubscription: 'Azure for Students(3726fb87-ee7b-42c4-a39c-d437513f686c)'
              appType: 'webAppLinux'
              WebAppName: 'project02Student'
              packageForLinux: '$(Pipeline.Workspace)/drop/backend.zip'
              DeploymentTypeLinux: 'zipDeploy'
              StartupCommand: 'cd server && npm start'
```
- **Note:** For the full explaination of the YAML file and adding the different tasks, you can check the [YAML](https://learn.microsoft.com/en-us/azure/devops/pipelines/?view=azure-devops) section.

2. **Run the pipeline:** After reviewing and saving your pipeline configuration, click on the "Run" button to run your pipeline. You will be redirected to the pipeline run page, where you can see the progress of your pipeline. You can also see the logs for each step of your pipeline. The pipeline run page looks like this:
![Screenshot](/Assets/pipelineOverview.PNG)
You can click on each stage to see the logs for that stage. You can also see the status of each step in the pipeline. If everything goes well, you should see a green checkmark next to each step. If there is an error, you will see a red cross next to the step that failed. You can click on the step to see the logs and debug the issue. This is how the build stage looks like:
![Screenshot](/Assets/buildstage.PNG)
The deployment stage needs permission to deploy to the Azure Web App. You can click on the "Permit" button to allow the deployment and the deployment continues. Check this: 
![Screenshot](/Assets/permissionDeploy.PNG)
A succesfull deployment looks like this:
![Screenshot](/Assets/succesfulDeploy.PNG)

3. **Check the deployment:** After the pipeline has finished running, you can check the deployment in the Azure Portal. You can find your web app in the Azure Portal by clicking on the "App Services" tab. You should see your web app listed there. Click on your web app to view the details. You can check the Deployment Center to see the deployment history and logs. You can also check the "Overview" tab to see the status of your web app. The overview page in my case looks like this:
![Screenshot](/Assets/webAppOverview.PNG)
and by clciking on the URL, you can see the web app running in the browser:
![Screenshot](/Assets/browserWebApp.PNG)



