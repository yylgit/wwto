function convert(n){return n.replace(/['"](\/\/\w+\.\w+)/g,(n,t)=>n.replace(t,["https:",t].join(""))).replace(/\.option\.transition\.delay/g,".delay").replace(/\.option\.transition\.duration/g,".duration").replace(/\.option\.transition\.timingFunction/g,".duration")}module.exports=convert;