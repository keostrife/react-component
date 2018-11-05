import theme from '../../assets/theme.js';
import LinkItem from '../../linkItemClass.js';

class Card {
	constructor(opts){
		this.title = opts.title || "";
		this.description = opts.description || "";
		this.color = opts.color || theme.background_gray;
		this.type = opts.type || "media";
		this.url = opts.url || "";
		this.picture = opts.picture || {};
		this.date_created = opts.date_created || "";
		this.likeCount = opts.likeCount || 0;
		this.commentCount = opts.commentCount || 0;
		this.shareCount = opts.shareCount || 0;
		this.category = opts.category || "";
		this.categories = opts.categories || [];
		this.tags = opts.tags || [];
		this.author = opts.author || {};
		this.message = opts.message || "";
	}

	static create(opts) {
		return new this(opts);
	}
	
}

export default [
	Card.create({
		title: "How to take the best pictures at your practice",
		description: "There isn’t always time (or money!) to get a professional photographer to take photos for you so we’ve put together a list of tips & tricks.",
		color: theme.purple,
		picture: {
			src: "https://www.sportdiver.com/sites/sportdiver.com/files/styles/655_1x_/public/scuba-diving-video-tips-go-pro.jpg?itok=q9YK14eC&fc=50,50",
			description: "Scuba Diving"
		},
		date_created: "March 14, 2018",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		categories: [
			LinkItem.create({
				title: "TECHNOLOGY"
			}),
		],
		tags: [
			LinkItem.create({
				title: "Tag Example"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		title: "Who manages the supplies and ordering at your practice?",
		description: "For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…",
		date_created: "17 minutes ago",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		tags: [
			LinkItem.create({
				title: "PRACTICE MGMT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		title: "Who manages the supplies and ordering at your practice?",
		description: "For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…",
		date_created: "17 minutes ago",
		picture: {
			src: "https://i.pinimg.com/originals/20/a5/8f/20a58f0af4c1784e45dc15a26c041303.jpg",
			description: "cool image"
		},
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		tags: [
			LinkItem.create({
				title: "PRACTICE MGMT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		title: "Who manages the supplies and ordering at your practice?",
		description: "For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…",
		date_created: "17 minutes ago",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		tags: [
			LinkItem.create({
				title: "PRACTICE MGMT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		type: "simple",
		title: "Dentshine Staff Members",
		category: "PRIVATE GROUP",
		description: "147 Members",
		picture: {
			src: "http://badges.roygroup.net/wp-content/uploads/2014/02/RoyGroup_1_LD_Badge-885x508-300x172.png",
			description: "website of the month"
		},
		message: "There are <a href='#'>3 new conversations</a> to catch up on."
	}),
	Card.create({
		type: "banner",
		picture: {
			src: "https://static.vecteezy.com/system/resources/previews/000/172/276/non_2x/flash-sale-banner-free-vector.jpg",
			description: "nature"
		}
	}),
	Card.create({
		title: "This is another article about practice management",
		description: "There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The truth is the universe is constantly...",
		color: "#f46363",
		picture: {
			src: "https://i0.wp.com/dailyrepeats.com/wp-content/uploads/2017/10/cool-status.jpg?fit=1680%2C1050&ssl=1",
			description: "cool cat"
		},
		date_created: "March 14, 2018",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		categories: [
			LinkItem.create({
				title: "PRACTICE MANAGEMENT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		title: "Who manages the supplies and ordering at your practice?",
		description: "For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…",
		date_created: "17 minutes ago",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		tags: [
			LinkItem.create({
				title: "PRACTICE MGMT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		title: "Who manages the supplies and ordering at your practice?",
		description: "For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…",
		date_created: "17 minutes ago",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		tags: [
			LinkItem.create({
				title: "PRACTICE MGMT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		title: "Who manages the supplies and ordering at your practice?",
		description: "For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…",
		date_created: "17 minutes ago",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		tags: [
			LinkItem.create({
				title: "PRACTICE MGMT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
	Card.create({
		title: "Who manages the supplies and ordering at your practice?",
		description: "For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…",
		date_created: "17 minutes ago",
		likeCount: 275,
		commentCount: 12,
		shareCount: 12, 
		tags: [
			LinkItem.create({
				title: "PRACTICE MGMT"
			}),
		],
		author: {
			name: "Super cool name",
			title: "Vice President",
			location: "Toronto, CA",
			profilePicture: "https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=1400"
		}
	}),
];