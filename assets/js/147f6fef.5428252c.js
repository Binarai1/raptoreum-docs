"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[8786],{7484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=a(7462),l=(a(7294),a(3905)),n=a(2004);const r={sidebar_position:48},m="signmessage",i={unversionedId:"wallet/cli-wallet/commands/wallet/signmessage",id:"wallet/cli-wallet/commands/wallet/signmessage",title:"signmessage",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/signmessage.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/signmessage",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/signmessage",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/signmessage.mdx",tags:[],version:"current",sidebarPosition:48,frontMatter:{sidebar_position:48},sidebar:"sidebarWallet",previous:{title:"settxfee",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/settxfee"},next:{title:"walletlock",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/walletlock"}},o={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p};function g(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"signmessage"},"signmessage"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'signmessage "address" "message"')),(0,l.kt)("p",null,"Sign a message with the private key of an address"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Unlock the wallet for 30 seconds\nraptoreum-cli walletpassphrase "mypassphrase" 30\n\n# Create the signature\nraptoreum-cli signmessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "my message"\n\n# Verify the signature\nraptoreum-cli verifymessage "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" "signature" "my message"\n')),(0,l.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${a(583).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The raptoreum address to use for the private key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"message"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to create a signature of.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "address"         (string, required) The raptoreum address to use for the private key.\n2. "message"         (string, required) The message to create a signature of.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"signature"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The signature of the message encoded in base 64")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"signature"          (string) The signature of the message encoded in base 64\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "signmessage", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", "my message"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}g.isMDXComponent=!0},583:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/medias/signmessage-b032af1aea37667928f99bd543b7c529.webm"}}]);