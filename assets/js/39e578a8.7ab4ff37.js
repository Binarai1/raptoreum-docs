"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[6272],{9538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=a(7462),n=(a(7294),a(3905)),s=a(2004);const r={sidebar_position:50},p="walletpassphrase",o={unversionedId:"wallet/cli-wallet/commands/wallet/walletpassphrase",id:"wallet/cli-wallet/commands/wallet/walletpassphrase",title:"walletpassphrase",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/walletpassphrase.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/walletpassphrase",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/walletpassphrase",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/walletpassphrase.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"sidebarWallet",previous:{title:"walletlock",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/walletlock"},next:{title:"walletpassphrasechange",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/walletpassphrasechange"}},i={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"walletpassphrase"},"walletpassphrase"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'walletpassphrase "passphrase" timeout ( mixingonly )')),(0,n.kt)("p",null,"Stores the wallet decryption key in memory for 'timeout' seconds.\nThis is needed prior to performing transactions related to private keys such as sending raptoreums"),(0,n.kt)("p",null,"Note:\nIssuing the walletpassphrase command while the wallet is already unlocked will set a new unlock\ntime that overrides the old one."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Unlock the wallet for 60 seconds\nraptoreum-cli walletpassphrase "my pass phrase" 60\n\n# Unlock the wallet for 60 seconds but allow PrivateSend mixing only\nraptoreum-cli walletpassphrase "my pass phrase" 60 true\n\n# Lock the wallet again (before 60 seconds)\nraptoreum-cli walletlock\n')),(0,n.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(6213).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"passphrase"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The wallet passphrase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,n.kt)("td",{parentName:"tr",align:null},"The time to keep the decryption key in seconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mixingonly"),(0,n.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,n.kt)("td",{parentName:"tr",align:null},"If is true sending functions are disabled")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "passphrase"        (string, required) The wallet passphrase\n2. timeout             (numeric, required) The time to keep the decryption key in seconds.\n3. mixingonly          (boolean, optional, default=false) If is true sending functions are disabled.\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"...")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "walletpassphrase", "params": ["my pass phrase", 60] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},6213:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/medias/walletlock-b55fab3db11a3eeafcb7e50d1ea09566.webm"}}]);