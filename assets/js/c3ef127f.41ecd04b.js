"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[6539],{3884:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=a(2004);const i={sidebar_position:11},s="getchaintxstats",o={unversionedId:"wallet/cli-wallet/commands/blockchain/getchaintxstats",id:"wallet/cli-wallet/commands/blockchain/getchaintxstats",title:"getchaintxstats",description:"",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getchaintxstats.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getchaintxstats",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getchaintxstats",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getchaintxstats.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sidebarWallet",previous:{title:"getchaintips",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getchaintips"},next:{title:"getdifficulty",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/blockchain/getdifficulty"}},c={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function u(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getchaintxstats"},"getchaintxstats"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"getchaintxstats ( nblocks blockhash )")),(0,l.kt)("p",null,"Compute statistics about the total number and rate of transactions in the chain."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"raptoreum-cli getchaintxstats ")),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(1962).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nblocks"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of the window in number of blocks (default: one month).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"blockhash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The hash of the block that ends the window.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. nblocks      (numeric, optional) Size of the window in number of blocks (default: one month).\n2. "blockhash"  (string, optional) The hash of the block that ends the window.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"time"'),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp for the statistics in UNIX format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"txcount"'),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of transactions in the chain up to that point.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"txrate"'),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The average rate of transactions per second in the window.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "time": xxxxx,        (numeric) The timestamp for the statistics in UNIX format.\n  "txcount": xxxxx,     (numeric) The total number of transactions in the chain up to that point.\n  "txrate": x.xx,       (numeric) The average rate of transactions per second in the window.\n}\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getchaintxstats", "params": [2016] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},1962:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/medias/getchaintxstats-ee6d65518b08550aecfb7eb6c3785726.webm"}}]);