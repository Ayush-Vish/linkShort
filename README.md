<!-- Project Title -->
<h1 align="center">URL Shortener 🚀</h1>

<!-- Project Description -->
<p align="center">A simple web application hosted on Vercel that allows users to shorten long URLs into shorter, more manageable links.</p>

<!-- Table of Contents -->
<h2>Table of Contents</h2>
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#demo">Demo</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<!-- Features -->
<h2>Features ✨</h2>
<ul>
  <li>Shorten long URLs to compact, easy-to-share links.</li>
  <li>Customizable URL aliases for your short links.</li>
  <li>View the click count for each shortened link.</li>
  <li>QR code generation for easy mobile access.</li>
  <li>User-friendly and responsive web interface.</li>
</ul>

<!-- Demo -->
<h2>Demo 🌐</h2>
<p>You can access a live demo of the URL shortener here: <a href="https://linkshort-bay.vercel.app/">https://linkshort-bay.vercel.app/</a></p>

<!-- Installation -->
<h2>Installation 🛠️</h2>
<ol>
  <li>Clone this repository to your local machine:</li>
</ol>
<pre><code>git clone https://github.com/yourusername/url-shortener.git</code></pre>
<ol start="2">
  <li>Change into the project directory:</li>
</ol>
<pre><code>cd url-shortener</code></pre>
<ol start="3">
  <li>Install the required dependencies using npm or yarn:</li>
</ol>
<pre><code>npm install
# or
yarn install</code></pre>
<ol start="4">
  <li>Set up environment variables by creating a <code>.env</code> file in the project's root directory. You will need to specify the following variables:</li>
</ol>
<pre><code>DATABASE_URL: The URL for your database, e.g., a MongoDB connection string.
SECRET_KEY: A secret key for session management.
BASE_URL: The base URL of your deployed application, e.g., https://linkshort-bay.vercel.app/.
PORT: The port on which the server should run (default is 3000).</code></pre>
<ol start="5">
  <li>Start the server:</li>
</ol>
<pre><code>npm start
# or
yarn start</code></pre>

<!-- Usage -->
<h2>Usage 🚀</h2>
<ol>
  <li>Access the application in your web browser using the URL where it's hosted.</li>
  <li>To shorten a URL:</li>
</ol>
<p>Click on the "Shorten a URL" button.</p>
<p>Enter the long URL you want to shorten.</p>
<p>Optionally, provide a custom alias for your shortened link.</p>
<p>Click "Shorten" to generate the shortened URL.</p>
<ol start="3">
  <li>To access click statistics:</li>
</ol>
<p>Click on the "Click Statistics" button.</p>
<p>Enter the alias or shortened URL to view click statistics.</p>
<ol start="4">
  <li>You can also generate QR codes for your shortened links by clicking on the "QR Code" button.</li>
</ol>

<!-- Contributing -->
<h2>Contributing 🤝</h2>
<ol>
  <li>Fork the repository on GitHub.</li>
  <li>Clone your forked repository to your local machine.</li>
  <li>Create a new branch for your feature or bug fix.</li>
  <li>Make your changes and commit them with descriptive messages.</li>
  <li>Push your changes to your fork on GitHub.</li>
  <li>Submit a pull request to the original repository.</li>
</ol>

<!-- License -->
<h2>License 📝</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
