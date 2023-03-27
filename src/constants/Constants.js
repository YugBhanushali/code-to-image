// @import url('https://fonts.googleapis.com/css2?family=Lucida+Console&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Liberation+Mono&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Hack&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=DejaVu+Sans+Mono&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Courier+New&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Consolas&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=PragmataPro&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Terminus&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Iosevka&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Droid+Sans+Mono&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Input+Mono&display=swap');
const FontFamilyList = [
    { label:"Source code", value:`'Source code pro', monospace`},
    { label:"JetBrains", value:`'JetBrains Mono', monospace`},
    { label:"Open sans", value:`'Open Sans', sans-serif`},
    { label:"Sono", value:`'Sono', sans-serif`},
    { label:"Space Mono", value:`'Space Mono', sans-serif`},
    { label:"Poppins", value:`'Poppins', sans-serif`},
    { label:"Fira code", value:`'Fira Mono', monospace`},
    { label:"Ubuntu", value:`'Ubuntu', sans-serif`},
    { label:"Montserrat", value:`'Montserrat', sans-serif`},
    { label:"Oswald", value:`'Oswald', sans-serif`},
    { label:"Quicksand", value:`'Quicksand', sans-serif`},
    { label:"Roboto Mono", value:`'Roboto Mono', monospace`},
    { label:"Rubik", value:`'Rubik', sans-serif`},
    { label:"Ubuntu Mono", value:`'Ubuntu Mono', monospace`},
    { label:"Work Sans", value:`'Work Sans', sans-serif`},
    { label:"Zilla Slab", value:`'Zilla Slab', serif`},
    { label:"Lucida Console", value:`'Lucida Console', monospace`},
    { label:"Liberation Mono", value:`'Liberation Mono', monospace`},
    { label:"Hack", value:`'Hack', monospace`},
    { label:"DejaVu Sans Mono", value:`'DejaVu Sans Mono', monospace`},
    { label:"Courier New", value:`'Courier New', monospace`},
    { label:"IBM Plex Mono", value:`'IBM Plex Mono', monospace`},
    { label:"Fira Code", value:`'Fira Code', monospace`},
    { label:"Inconsolata", value:`'Inconsolata', monospace`},
    { label:"Consolas", value:`'Consolas', monospace`},
    { label:"Pragmata Pro", value:`'Pragmata Pro', monospace`},
    { label:"Terminus", value:`'Terminus', monospace`},
    { label:"Iosevka", value:`'Iosevka', monospace`},
    { label:"Anonymous Pro", value:`'Anonymous Pro', monospace`},
    { label:"Droid Sans Mono", value:`'Droid Sans Mono', monospace`},
    { label:"Input Mono", value:`'Input Mono', monospace`},
];

const PaddingList = [
    {label:'30',value:'30px'},
    {label:'50',value:'50px'},
    {label:'70',value:'70px'},
    {label:'90',value:'90px'},
    {label:'110',value:'110px'},
]

const ProgrammingLanguages = [
    { label: "JavaScript", name: "javascript" },
    { label: "Python", name: "python" },
    { label: "Java", name: "java" },
    // { label: "C++", name: "c++" },
    { label: "Ruby", name: "ruby" },
    { label: "PHP", name: "php" },
    { label: "Swift", name: "swift" },
    { label: "Kotlin", name: "kotlin" },
    { label: "TypeScript", name: "typescript" },
    { label: "C#", name: "c#" },
    { label: "Go", name: "go" },
    { label: "Scala", name: "scala" },
    { label: "Rust", name: "rust" },
    { label: "Lua", name: "lua" },
    { label: "Perl", name: "perl" },
    { label: "Haskell", name: "haskell" },
    // { label: "Objective-C", name: "objective-c" },
    // { label: "Shell", name: "shell" },
    { label: "Dart", name: "dart" },
    { label: "SQL", name: "sql" },
    // { label: "HTML", name: "html" },
  ];

const WidthList = [
    {label:'400',value:'400px'},
    {label:'500',value:'500px'},
    {label:'600',value:'600px'},
    {label:'700',value:'700px'},
    {label:'800',value:'800px'},
    {label:'900',value:'900px'},
    {label:'1000',value:'1000px'},
    {label:'1100',value:'1100px'},
    {label:'1200',value:'1200px'},
];

const FormatList = [
    {label:'PNG',value:'.png'},
    {label:'SVG',value:'.svg'},
    {label:'JPEG',value:'.jpeg'},
]

const ThemeList = [
    {label:'a11y dark',value:'prism-a11y-dark'},
    {label:'atom dark',value:'prism-atom-dark'},
    {label:'Sulpher light',value:'prism-base16-ateliersulphurpool-light'},
    {label:'cb',value:'prism-cb'},
    {label:'coldark cold',value:'prism-coldark-cold'},
    {label:'coldark dark',value:'prism-coldark-dark'},
    {label:'coy without shadows',value:'prism-coy-without-shadows'},
    {label:'custom',value:'prism-custom'},
    {label:'darcula',value:'prism-darcula'},
    {label:'dracula',value:'prism-dracula'},
    {label:'duotone dark',value:'prism-duotone-dark'},
    {label:'duotone earth',value:'prism-duotone-earth'},
    {label:'duotone forest',value:'prism-duotone-forest'},
    {label:'duotone light',value:'prism-duotone-light'},
    {label:'duotone sea',value:'prism-duotone-sea'},
    {label:'duotone space',value:'prism-duotone-space'},
    {label:'ghcolors',value:'prism-ghcolors'},
    {label:'gruvbox dark',value:'prism-gruvbox-dark'},
    {label:'gruvbox light',value:'prism-gruvbox-light'},
    {label:'holi theme',value:'prism-holi-theme'},
    {label:'hopscotch',value:'prism-hopscotch'},
    {label:'laserwave',value:'prism-laserwave'},
    {label:'lucario',value:'prism-lucario'},
    {label:'material dark',value:'prism-material-dark'},
    {label:'material light',value:'prism-material-light'},
    // {label:'material oceanic',value:'prism-material-oceanic'},
    {label:'night owl',value:'prism-night-owl'},
    {label:'nord',value:'prism-nord'},
    {label:'one dark',value:'prism-one-dark'},
    {label:'one light',value:'prism-one-light'},
    {label:'pojoaque',value:'prism-pojoaque'},
    {label:'shades of purple',value:'prism-shades-of-purple'},
    {label:'solarized dark atom',value:'prism-solarized-dark-atom'},
    // {label:'synthwave84',value:'prism-synthwave84'},
    {label:'vs',value:'prism-vs'},
    {label:'vsc dark plus',value:'prism-vsc-dark-plus'},
    {label:'xonokai',value:'prism-xonokai'},
    {label:'z touch',value:'prism-z-touch'},
];

export {ThemeList,FontFamilyList,PaddingList,ProgrammingLanguages,WidthList,FormatList};