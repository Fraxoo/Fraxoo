import { ArcadeRenderer } from 'pacman-contribution-graph';

// Replace [game-name] with a valid game name
const renderer = new ArcadeRenderer({
	game: 'pacman',
	username: 'Fraxoo',
	platform: 'github', // or 'gitlab'
	gameTheme: 'github-dark', // 'github', 'github-dark', 'gitlab', or 'gitlab-dark'
	playerStyle: 'opportunistic', // Pac-Man only: 'conservative', 'aggressive', or 'opportunistic'
	svgCallback: (svg) => {
		// called with the generated SVG string
		document.getElementById('output').innerHTML = svg;
	},
	gameOverCallback: () => {
		console.log('Game over!');
	},
	pointsIncreasedCallback: (points) => {
		console.log('Score:', points);
	}
});
renderer.start();