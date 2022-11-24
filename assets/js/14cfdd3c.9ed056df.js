"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[6618],{2645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));n(2004);const l={sidebar_position:1},r="addnode",d={unversionedId:"wallet/cli-wallet/commands/network/addnode",id:"wallet/cli-wallet/commands/network/addnode",title:"addnode",description:"",source:"@site/docs/wallet/cli-wallet/commands/network/addnode.mdx",sourceDirName:"wallet/cli-wallet/commands/network",slug:"/wallet/cli-wallet/commands/network/addnode",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/network/addnode",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/network/addnode.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"submitblock",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/mining/submitblock"},next:{title:"clearbanned",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/network/clearbanned"}},m={},s=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],i={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"addnode"},"addnode"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'addnode "node" "add|remove|onetry"')),(0,o.kt)("p",null,"Attempts to add or remove a node from the addnode list. Or try a connection to a node once.\nNodes added using addnode (or -connect) are protected from DoS disconnection and are not required to be\nfull nodes as other outbound peers are (though such peers will not be synced from)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'raptoreum-cli addnode "192.168.0.6:9999" "onetry"')),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"node"'),(0,o.kt)("td",{parentName:"tr",align:null},"(string)"),(0,o.kt)("td",{parentName:"tr",align:null},"The node (see getpeerinfo for nodes)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"command"'),(0,o.kt)("td",{parentName:"tr",align:null},"(string)"),(0,o.kt)("td",{parentName:"tr",align:null},"'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nArguments:\n1. \"node\"     (string, required) The node (see getpeerinfo for nodes)\n2. \"command\"  (string, required) 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once\n")),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"..."),(0,o.kt)("td",{parentName:"tr",align:null},"..."),(0,o.kt)("td",{parentName:"tr",align:null},"...")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "addnode", "params": ["192.168.0.6:9999", "onetry"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0}}]);