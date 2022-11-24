"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[6271],{4472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),l=n(2004);const r={sidebar_position:17},s="getrawmempool",i={unversionedId:"wallet/cli-wallet/commands/blockchain/getrawmempool",id:"wallet/cli-wallet/commands/blockchain/getrawmempool",title:"getrawmempool",description:"",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getrawmempool.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getrawmempool",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getrawmempool",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getrawmempool.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"sidebarWallet",previous:{title:"getmerkleblocks",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getmerkleblocks"},next:{title:"getspecialtxes",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getspecialtxes"}},c={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getrawmempool"},"getrawmempool"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"getrawmempool ( verbose )")),(0,o.kt)("p",null,"Returns all transaction ids in memory pool as a json array of string transaction ids."),(0,o.kt)("p",null,"Hint: use getmempoolentry to fetch a specific transaction from the mempool."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"raptoreum-cli getrawmempool true")),(0,o.kt)(l.Z,{playing:!0,controls:!0,url:[{src:`${n(239).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"verbose"),(0,o.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,o.kt)("td",{parentName:"tr",align:null},"True for a json object, false for array of transaction ids")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Arguments:\n1. verbose (boolean, optional, default=false) True for a json object, false for array of transaction ids\n")),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"transactionid"'),(0,o.kt)("td",{parentName:"tr",align:null},"(string)"),(0,o.kt)("td",{parentName:"tr",align:null},"The transaction id")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Result: (for verbose = false):\n[                     (json array of string)\n  "transactionid"     (string) The transaction id\n  ,...\n]\n\nResult: (for verbose = true):\n{                           (json object)\n  "transactionid" : {       (json object)\n    "size" : n,                 (numeric) transaction size in bytes\n    "fee" : n,                  (numeric) transaction fee in RTM\n    "modifiedfee" : n,          (numeric) transaction fee with fee deltas used for mining priority\n    "time" : n,                 (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT\n    "height" : n,               (numeric) block height when transaction entered pool\n    "descendantcount" : n,      (numeric) number of in-mempool descendant transactions (including this one)\n    "descendantsize" : n,       (numeric) size of in-mempool descendants (including this one)\n    "descendantfees" : n,       (numeric) modified fees (see above) of in-mempool descendants (including this one)\n    "ancestorcount" : n,        (numeric) number of in-mempool ancestor transactions (including this one)\n    "ancestorsize" : n,         (numeric) size of in-mempool ancestors (including this one)\n    "ancestorfees" : n,         (numeric) modified fees (see above) of in-mempool ancestors (including this one)\n    "depends" : [               (array) unconfirmed transactions used as inputs for this transaction\n        "transactionid",        (string) parent transaction id\n       ... ],\n    "instantlock" : true|false  (boolean) True if this transaction was locked via InstantSend\n  }, ...\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getrawmempool", "params": [true] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},239:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/getrawmempool-bd49dfcca54ec3a1432a96f42186f49a.webm"}}]);