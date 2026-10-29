export const categories = [
 {name:'Electronics',slug:'electronics',emoji:'🎧',color:'#DDF3E7'}, {name:'Clothing',slug:'clothing',emoji:'👕',color:'#C8F169'},
 {name:'Home & Living',slug:'home-living',emoji:'🪑',color:'#FBE4D6'}, {name:'Beauty',slug:'beauty',emoji:'🧴',color:'#E5E9FF'},
 {name:'Groceries',slug:'groceries',emoji:'🥑',color:'#DDF3E7'}, {name:'Sports',slug:'sports',emoji:'⚽',color:'#F5E8B7'}, {name:'Accessories',slug:'accessories',emoji:'⌚',color:'#F9DDE2'}
];
export const products = [
 {id:1,name:'Everyday Runner Sneakers',brand:'NORTHLINE',price:78,oldPrice:98,category:'Clothing',tag:'BESTSELLER',emoji:'👟',color:'#F5F2EC',rating:4.8},
 {id:2,name:'Studio Wireless Headphones',brand:'SONORA',price:129,oldPrice:159,category:'Electronics',tag:'20% OFF',emoji:'🎧',color:'#E1F0E8',rating:4.9},
 {id:3,name:'Minimal Ceramic Vase Set',brand:'FORM & FIELD',price:42,oldPrice:null,category:'Home & Living',tag:'NEW',emoji:'🏺',color:'#F8E8DD',rating:4.7},
 {id:4,name:'Daily Hydration Bottle',brand:'EVERWELL',price:26,oldPrice:32,category:'Accessories',tag:'POPULAR',emoji:'🧴',color:'#E7EDDF',rating:4.6},
 {id:5,name:'Classic Gold Watch',brand:'MOMENT',price:149,oldPrice:null,category:'Accessories',tag:'LIMITED',emoji:'⌚',color:'#F6E8C9',rating:4.8},
 {id:6,name:'Soft Knit Everyday Tee',brand:'COMMON THREAD',price:34,oldPrice:44,category:'Clothing',tag:'20% OFF',emoji:'👕',color:'#F3E9E1',rating:4.6},
 {id:7,name:'Fresh Start Skincare Kit',brand:'BOTANICA',price:56,oldPrice:null,category:'Beauty',tag:'CLEAN BEAUTY',emoji:'🧴',color:'#DDF3E7',rating:4.9},
 {id:8,name:'Weekend Market Tote',brand:'GOOD GOODS',price:24,oldPrice:30,category:'Accessories',tag:'ECO PICK',emoji:'👜',color:'#EEE4D6',rating:4.7},
 {id:9,name:'Smart Fitness Watch',brand:'PULSE',price:189,oldPrice:219,category:'Electronics',tag:'TRENDING',emoji:'⌚',color:'#E4E9EE',rating:4.8},
 {id:10,name:'Natural Cotton Cushion',brand:'NEST HOME',price:38,oldPrice:null,category:'Home & Living',tag:'NEW',emoji:'🛋️',color:'#EDE5DB',rating:4.5},
 {id:11,name:'Ceramic Pour-over Set',brand:'SLOW MORNING',price:48,oldPrice:60,category:'Home & Living',tag:'20% OFF',emoji:'☕',color:'#F4E8D8',rating:4.9},
 {id:12,name:'Organic Pantry Essentials',brand:'ROOT & RIPE',price:32,oldPrice:null,category:'Groceries',tag:'ORGANIC',emoji:'🥑',color:'#E2EED9',rating:4.8}
];
export const money = (n:number) => `$${n.toFixed(2)}`;
