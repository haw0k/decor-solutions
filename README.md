<h1>Decor Solutions website</h1>

<p>Author: <a href="https://t.me/haw0k" target="_blank"Cyril Zlachevsky</a></p>

<h2>Gulp tasks:</h2>

<ul>
	<li><strong>gulp</strong>: run default gulp task (sass, js, watch, browserSync) for web development;</li>
	<li><strong>build</strong>: build project to <strong>dist</strong> folder</li>
	<li><strong>sass</strong>: compile scss files</li>
	<li><strong>js</strong>: compile js files</li>
	<li><strong>watch</strong>: compile scss and js files and start browserSync</li>
</ul>

<h2>Rules for working with the starting HTML template</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li>One of the lines should always be commented out. All fonts are connected in <strong>app/sass/fonts.sass</strong>;</li>
	<li><strong>Custom Browsers Color Start</strong> comment in app/index.html: set the color of the browser head on a variety of devices;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
	<li>For installing new jQuery library, just run the command "<strong>bower i plugin-name</strong>" in the terminal. Libraries are automatically placed in the folder <strong>app/libs</strong>. Bower must be installed in the system (npm i -g bower). Then place all jQuery libraries paths in the <strong>'libs'</strong> task (gulpfile.js);</li>
	<li>All custom JS located in <strong>app/js/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/sass/_vars.scss</strong>;</li>
	<li>All media queries placed in <strong>app/sass/_media.scss</strong>;</li>
	<li>All jQuery libraries CSS styles placed in <strong>app/scss/_libs.sass</strong>;</li>
	<li>All basic styles (html, body, fonts, buttons, etc...) placed in <strong>app/scss/_base.sass</strong>;</li>
</ol>
