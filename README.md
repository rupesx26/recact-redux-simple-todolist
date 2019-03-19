# React redux simple todolist

This is example of an todolist using react and redux 

# To run
```npm install```
```npm start```

# Brifing

1. You need to setup package.json with following packages and config's
    a. Dependancies :- react react-dom react-redux redux webpack with npm install
    b. DevDependancies :- webpack-cli @babel/cli @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin path babel-loader webpack-dev-server
    c. Create .gitignore, webpack.config.js, .babelrc 


| | Presentational Components | Container Components | 
--- | --- | --- | 
Purpose | How things look (markup, styles) | How things work (data fetching, state updates) | 
Aware of Redux | No	| Yes |
To read data	| Read data from props |	Subscribe to Redux state|
To change data |	Invoke callbacks from props	| Dispatch Redux actions|
Are written	| By hand |	Usually generated by React Redux |

2. Implementing Presentational Components
    Todo.js