"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[6952],{7171:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=a(7462),l=(a(7294),a(3905)),s=a(2004);const r={sidebar_position:42},o="sendmany",d={unversionedId:"wallet/cli-wallet/commands/wallet/sendmany",id:"wallet/cli-wallet/commands/wallet/sendmany",title:"sendmany",description:"",source:"@site/docs/wallet/cli-wallet/commands/wallet/sendmany.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/sendmany",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/sendmany",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/sendmany.mdx",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42},sidebar:"sidebarWallet",previous:{title:"sendfrom",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/sendfrom"},next:{title:"sendtoaddress",permalink:"/raptoreum-docs/docs/wallet/cli-wallet/commands/wallet/sendtoaddress"}},m={},i=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:i};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sendmany"},"sendmany"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'sendmany "fromaccount" {"address":amount,...} ( minconf addlocked "comment" ','["address",...]',' subtractfeefrom use_is use_ps conf_target "estimate_mode")')),(0,l.kt)("p",null,"Send multiple times. Amounts are double-precision floating point numbers."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Send two amounts to two different addresses:\nraptoreum-cli sendmany "tabby" "{\\"XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG\\":0.01,\\"XuQQkwA4FYkq2XERzMY2CiAZhJTEDAbtcG\\":0.02}"\n\n# Send two amounts to two different addresses setting the confirmation and comment:\nraptoreum-cli sendmany "tabby" "{\\"XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG\\":0.01,\\"XuQQkwA4FYkq2XERzMY2CiAZhJTEDAbtcG\\":0.02}" 6 false "testing"\n')),(0,l.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(1189).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"fromaccount"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},'The name of the account to send funds from. May be the default account using "".')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "fromaccount"           (string, required) DEPRECATED. The account to send the funds from. Should be "" for the default account\n2. "amounts"               (string, required) A json object with addresses and amounts\n    {\n      "address":amount     (numeric or string) The raptoreum address is the key, the numeric amount (can be string) in RTM is the value\n      ,...\n    }\n3. minconf                 (numeric, optional, default=1) Only use the balance confirmed at least this many times.\n4. addlocked               (bool, optional, default=false) Whether to include transactions locked via InstantSend.\n5. "comment"               (string, optional) A comment\n6. subtractfeefrom         (array, optional) A json array with addresses.\n                           The fee will be equally deducted from the amount of each selected address.\n                           Those recipients will receive less raptoreums than you enter in their corresponding amount field.\n                           If no addresses are specified here, the sender pays the fee.\n    [\n      "address"          (string) Subtract fee from this address\n      ,...\n    ]\n7. "use_is"                (bool, optional, default=false) Deprecated and ignored\n8. "use_ps"                (bool, optional, default=false) Use PrivateSend funds only\n9. conf_target            (numeric, optional) Confirmation target (in blocks)\n10. "estimate_mode"      (string, optional, default=UNSET) The fee estimate mode, must be one of:\n       "UNSET"\n       "ECONOMICAL"\n       "CONSERVATIVE"\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the command was successful or not")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"txid"                   (string) The transaction id for the send. Only 1 transaction is created  regardless of the number of addresses.\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "sendmany", "params": ["tabby", "{\\"XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG\\":0.01,\\"XuQQkwA4FYkq2XERzMY2CiAZhJTEDAbtcG\\":0.02}", 6, false, "testing"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}c.isMDXComponent=!0},1189:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/sendmany-516bdd0661317a9dd28dcde21c32628e.webm"}}]);