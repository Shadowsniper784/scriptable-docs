		let r = [];
class api {
	constructor() {
		console.log('Starting api...');
	}
	getDocs(text, amount) {
		const run = (docs, page) => {
			let details = '';
			docs.details.filter(item => {
				const name = item.shortName || item.longName;
				if (
					item.shortName.toLowerCase().includes(text.toLowerCase()) ||
					item.longName.toLowerCase().includes(text.toLowerCase())
				) {
					let description = item.description;
					description = description.replace(/<code>/gi, '`');
					description = description.replace(/<\/code>/gi, '`');
					r.push(item);
					// item.detailsSections.details.forEach(run)
				}
			})
			if (r.length > amount) r.length = amount;
			return r;
		};
		r = run(require('./docs/1.json'), 1);
		r = run(require('./docs/2.json'), 2);
		r = run(require('./docs/3.json'), 3);
		r = run(require('./docs/4.json'), 4);
		r = run(require('./docs/5.json'), 5);
		r = run(require('./docs/6.json'), 6);
		r = run(require('./docs/7.json'), 7);
		r = run(require('./docs/8.json'), 8);
		r = run(require('./docs/9.json'), 9);
		return r
	}
}
module.exports = api