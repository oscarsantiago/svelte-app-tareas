import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

// import adapter from '@sveltejs/adapter-cloudflare';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// See below for an explanation of these options
// 			routes: {
// 				include: ['/*'],
// 				exclude: ['<all>']
// 			}
// 		})
// 	}
// };