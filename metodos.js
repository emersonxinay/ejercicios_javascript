const posts = [{
  id: 1,
  title: 'Post 1',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://img.com/1',
  tags: ['javascript', 'webdevelopment']

},
{
  id: 2,
  title: 'Post 2',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  tags: ['javascript', 'webdevelopment', 'ruby']
},
{
  id: 3,
  title: 'Post 3',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://img.com/3',
  tags: ['javascript', 'webdevelopment', 'python']
}
];

// busqueda mas incluyente
const poss1 = posts.some(post => post.tags.includes['vue'])
console.log(poss1)
// comprobando metodos 
let poss = posts.some(post => post.id === 1)
console.log(poss)

let poss2 = posts.map(post => post.title)
console.log(poss2)

let poss3 = posts.map(post => post.tags)
console.log(poss3)

// filtrando 
let posi = posts.filter(post => post.image !== undefined)
console.log(posi)

let reduciendo = posts.reduce((allTags, post) => {
  return [...allTags, ...post.tags]
}, [])
console.log(reduciendo)

// eliminar repeticiones
let posi3 = posts.reduce((allTags, post) => {
  return Array.from(new Set([...allTags, ...post.tags]))
}, []);
console.log(posi3)