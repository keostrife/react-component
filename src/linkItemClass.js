export default class LinkItem {
	constructor(opts) {
		this.title = opts.title;
		this.description = opts.description || "";
		this.ariaLable = opts.ariaLable || "";
		this.isActive = opts.isActive || false;
		this.url = opts.url || "#";
		this.newWindow = opts.newWindow || false;
		this.icon = opts.icon || "";
		this.customHandler = opts.customHandler || null;
	}

	static create(opts) {
		return new this(opts);
	}

	static createMarkup(data) {
		//not used, just render in template
	}
}