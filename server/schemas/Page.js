var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pageSchema = new Schema({
	content: {
		title: String,
		sub_section: {
			type: String,
			p: String
		},
		sections: {
			facebook: {
				link: String,
				title: String,
				sub_section: {
					type: String,
					p: String
				}
			},
			instagram: {
				link: String,
				title: String,
				sub_section: {
					type: String,
					p: String
				}
			}
		}
	}
});

var Page = mongoose.model('Page', pageSchema);

module.exports = Page;

