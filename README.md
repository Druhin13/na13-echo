
# Not Another™ <br> Web Development Workflow Template

## About This Template
Welcome to Not Another™'s streamlined web development template! This template is designed to simplify and accelerate your web development process, from coding to deployment. With automated workflows and easy-to-use tools, we aim to enhance your development experience, allowing you to focus on creating amazing web solutions.

## Why Use This Template?
This template is tailored to simplify the entire development lifecycle:
- **Efficient Development:** <br>
  Automates the concatenation and deployment of your JavaScript and CSS files.
- **Streamlined Production Transition:** <br>
  Enables a seamless move from development to production with a single command, minimizing manual intervention.
- **Automated Versioning:** <br>
  Each production deployment is automatically versioned, ensuring clarity and control over your project's lifecycle.
- **Continuous Deployment** <br>
  Integrates with Vercel for continuous deployment, keeping your live site always up-to-date with the latest changes.
- **Easy Production Hosting:** <br>
  Utilizes GitHub Pages and jsDelivr for hosting your production-ready assets, offering fast and reliable content delivery.

## Prerequisites
To effectively use this template, you'll need:
- A GitHub account, preferably as part of the Not Another™ team.
- A Vercel account linked to your GitHub for seamless deployment.

*Note: Ensure that you set your cloned repository as public to fully utilize GitHub Pages and jsDelivr. This is necessary for now, until we shift to GitHub Pro.*


<br>

## Setup and Usage Instructions
### Step 1: Clone the Template
1) Use the **Use this template** button to create a new repository from this template.
1) Remember to follow the na13- naming convention for consistency and easy identification. <br>
  (E.g., if your project/client name is `Evnex`, set your repository name to `na13-evnex`

### Step 2: Setting Up Continuous Deployment with Vercel
1) Go to your personal Vercel dashboard. <br>
  *[Open Vercel](https://vercel.com/new) (Use this link, if you are logged in)*
1) Import your newly created repository into Vercel.
1) Project settings will get automatically applied. <br>
  Vercel will automatically deploy your changes to a unique URL (based on the GitHub Repository name). <br>
  Pre-defined deployment settings will automatically ensure that only your built assets are served publicly. 

## Step 3: Start Coding!

1. Go back to your newly created repository on GitHub.
2. Press `.` (dot) on your keyboard. GitHub Codespaces should be launched automatically.
3. Open the Terminal on your GitHub Codespace.

### Setting up Automated Git Hooks
4. Run the following commands to set up automated git hooks and configure the package name:

    ```bash
    cp hooks/* .git/hooks/
    npm install
    npm run name
    ```

5. After configuring the hooks and package name, you can make changes in the predefined `src/js` and `src/css` directories.

### Commit and Bundle
6. Commit your changes in the `src/js` and `src/css` directories.

7. Upon committing your changes, our GitHub repository will automatically create another commit with the bundled files in the `dist` folder.

8. Commit the bundled files, and finally, push your changes to the main branch.

### Get Embed Links
9. To get the embed links for all your project files (including individual files and bundled files), run:

    ```bash
    npm run links
    ```

10. This command will update the README.md file with all the embed links that you can copy and paste into Webflow. It includes links to all files separately and two dedicated bundled files.


### Step 4: Transitioning to Production
When you're ready to move your project to production:

1) Run `npm run production` in your GitHub Codespace terminal. <br><br>
   ```
   npm run production
   ```
1) This command will build your project. <br>
   It will update the `gh-pages` branch with the latest build and increment the build version number.
1) You'll receive jsDelivr URLs in the terminal for the latest version of your project. <br>
   Replace your old embedded code in your Webflow project for optimal performance and caching.

## Subsequent Development and Updates
1) Continue to make changes and improvements in the src/js and src/css directories.
2) After making changes, commit and push to the main branch as usual.
3) When you're ready for another production deployment, simply run `npm run production` again to update the production version with incremented versioning. <br><br>
   ```
   npm run production
   ```  


## All Custom Commands

In addition to the core commands mentioned above, this template also provides a few custom commands to enhance your development experience:

1. **Local Development Server**: <br> This command allows you to host all the files in the `src/js` and `src/css` directories on localhost:1313. It's useful when you want to preview your project locally without deploying it. Simply run:

    ```bash
    npm run port
    ```

2. **Configure Package Name**: <br> Use this command to configure the package name for your project. It ensures that the package name matches your repository name. Run:

    ```bash
    npm run name
    ```

3. **Generate Embed Links**: <br> This command updates the README.md file with embed links for all your project files, including individual files and bundled files. Use it to easily copy and paste links into Webflow. Run:

    ```bash
    npm run links
    ```

4. **Production Deployment**: <br> When you're ready to move your project to production, use this command to build your project, update the `gh-pages` branch with the latest build, and increment the build version number. Run:

    ```bash
    npm run production
    ```

These custom commands provide additional flexibility for your development workflow.




## Versioning Strategy
Our template employs a simple versioning strategy for ease of use and clarity:
- Each production deployment increments the version number by 1.
- This ensures each version is unique, easily identifiable, and can be extracted automatically.

## Troubleshooting Common Issues
- **Vercel Deployment Failures**: <br>
  Ensure your Vercel project settings match the structure of your GitHub repository. <br> Check the Vercel deployment logs for specific error messages.
- **Merge Conflicts**: <br>
  When working collaboratively, regularly pull changes from the `main` branch and communicate with your team to avoid overlapping work.
- **Local Server Issues**: <br>
  If the local server does not start, ensure all dependencies are installed with `npm install` and check for any errors in your console.

## Support
For support or to report any issues, please open an issue in this repository or <br>
contact **Druhin (@Not Another™)** through Team Slack or [email](mailto:druhin@na.studio)
