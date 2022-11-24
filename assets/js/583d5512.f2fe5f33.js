"use strict";(self.webpackChunkraptoreum_docs=self.webpackChunkraptoreum_docs||[]).push([[8903],{3944:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>A,toc:()=>s});var l=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},p="Encrypt & Backup",A={unversionedId:"wallet/gui-wallet/guiwalletguide/encryptbackup",id:"wallet/gui-wallet/guiwalletguide/encryptbackup",title:"Encrypt & Backup",description:"Encrypting and backing up your wallet is highly recommended. Encrypting your wallet will also ensure no other user may perform wallet operations without the appropriate password.",source:"@site/docs/wallet/gui-wallet/guiwalletguide/encryptbackup.md",sourceDirName:"wallet/gui-wallet/guiwalletguide",slug:"/wallet/gui-wallet/guiwalletguide/encryptbackup",permalink:"/raptoreum-docs/docs/wallet/gui-wallet/guiwalletguide/encryptbackup",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/gui-wallet/guiwalletguide/encryptbackup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"Syncing",permalink:"/raptoreum-docs/docs/wallet/gui-wallet/guiwalletguide/syncing"},next:{title:"Send",permalink:"/raptoreum-docs/docs/wallet/gui-wallet/guiwalletguide/send"}},o={},s=[{value:"Encrypting",id:"encrypting",level:2},{value:"Backup",id:"backup",level:2}],r={toc:s};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},r,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"encrypt--backup"},"Encrypt & Backup"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Encrypting and backing up your wallet is highly recommended. Encrypting your wallet will also ensure no other user may perform wallet operations without the appropriate password.")),(0,n.kt)("h2",{id:"encrypting"},"Encrypting"),(0,n.kt)("p",null,"Private keys are stored in your wallet. When you first load the wallet there is no password and it is NOT encrypted. To encrypt the wallet, go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings")," menu dropdown and select ",(0,n.kt)("inlineCode",{parentName:"p"},"Encrypt Wallet")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Encrypt Menu Item",src:a(2199).Z,width:"260",height:"151"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"SAVE THIS PASSWORD")," - Losing this password means you lose access to all of your Raptoreum funds!")),(0,n.kt)("p",null,"The wallet will now restart with the encrypted file."),(0,n.kt)("h2",{id:"backup"},"Backup"),(0,n.kt)("p",null,"Backup the following items:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Wallet File"),": Your wallet keeps backup files from the last 10 successful closes of the application. It also keeps a single current version that it uses when loading. You can find the file that holds your private keys in the Raptoreum core data folder that you installed the wallet to. By default it is named ",(0,n.kt)("inlineCode",{parentName:"p"},"wallet.dat")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Private Keys"),": When in the wallet, go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Tools")," dropdown and select ",(0,n.kt)("inlineCode",{parentName:"p"},"Debug Console"),". Enter the following to retrieve your keys:"),(0,n.kt)("p",null,"Single Address Private Key:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dumpprivkey ADDRESS\n")),(0,n.kt)("p",null,"Entire Wallet All Keys"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dumpwallet FILENAME\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This will dump all your keys to a txt file in your qt .exe folder")))}d.isMDXComponent=!0},2199:(e,t,a)=>{a.d(t,{Z:()=>l});const l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACXCAMAAADEU9VhAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAA8MBxsLBhsTAhwcHToAACAWAzQjBTUoADksDwAAOjoAOiIiIi0qJycnKCoqKzMsIDUwJz81ITQxLTs2Kj45Ki8vMDs3MTIyMzc3OTk5O0UVC0cbEWYAAEAwBlc+AGglCGckCHAoCXssCWYnFm43EGYAOkU9L0k+JkQ5O0k+O1Q5O2Y6Omw5O1dJAFxGAlxMAGpOA2RFAGBMAGNUAG5aAH5XAHJfAH9pAE5EO2ZmOjs7Qjk+Sjk5VQAAZjoAZgA6Zjk5bVQ5VWYAZlQ5bTlETz5JTz5JUwBmZkJCRE5JQEdHSERJSkpKS1NJQFhORVhTSlhYT0RJU0ROWElTWE5YWFJSU1VaVlhYU1dXWFNYWFhYWGxYWH9YWFhYbFhYf39Yf2JlY21tbW9vcHNzc3d3eHx8fYIuCo8zC5A6AJg2DIw1HqM6DK09DbE/Dpo6IZA6OqQ+I7dBDpB3AJR8AJ9yCLZmAKR2BIRUO69CJbZFJ7ZPM71VOZtsO7ZmOr9aQJFsWK9lUqR/WIRUbcVrU8t6ZUz/ALmGAa6SALaQOsKIAM6XAMmYANWaANigANyuAeWjAOqqAOy8AOS2Aey2APGyANuQOu7EAO/IAPPFAPrCAPTKAPnOAP/SAJuEVbGEVbGEbbWRbLWRf86CbsebbdONe8ekf/+2ZgA6kDo6kGY6kDlUhTpmkDlsnABmtjpmtlRUhVhskVRsnH9/gFh/pH9/pFSEnGyEhWaQkGybnFSEsWyRpGyRtX+kpDqQ22ybx3+kx2a2/4KCg4eHiIuLi5SUlZeXmJubm6Cbmp+foISEsZG1taWlpaqqqrS0tLu7u9aXhsebnMexhd2nmce1kcexnOK1qbLAssfHnP/bkMfHpMfHs+jEu///toybx4Sxx5uxx5G1x7Gxx5C2/5vHx6THx7LHx5Db/7b//8fHx8zMzM7cwcDczs7cztTU1Nvb2+vMw+3RyvHa1Nfl1+Dh3///29Xx49v//+Xl5evr6/bp5fXx7/T09PH/8f///wAAAOxmsLAAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAN60lEQVR4Xu2cD5wUZRnHt9Qsw7tMu/am6K9ZYaZpZbqcdZnSdq1aByqsQidHhqlZKRlKWGH2X8oCTYgs7LTrSIT+XcSBKETd3RKYcSJdJJzsaosaxK5nZ7/neZ93Zvbv7czu3S278/vs7rzzzjvPvM93nvd9Z2f2Xd8Lnl7wIEAaQmJwqHqlIAxWMwKBUN0IFIRqZ+BBIAFCQpLVK0DIGgjPPCKJahAgSErr2ce2bbn5xgXV1EZSITy3bcFc0he/PDgYl7wqUAqELUxg7qdfO2t/S0sVhYIdwt1E4LPHv9iIbqj5k+TtHO/z+dbLigsdmO3z3XNQVrJqDqzvPOGJoaG2FSoDK7w+erJBeA4IPvMan9ET3dBjhgFVp+2svbKm5KCKfUfAxb7HZS2ryPe+I9YODS3Cm2SHMDo0bBAemTv3eF8oMpTSDqgW6TUpvGYHZg8fRH33Hhxa9LtfDR24xnLcPELhhypGNghb5r6lJY4vUimDI9WiDfE8x+dbgZX/HOFbSy1kBU4eNZOdJ5x51l4kz9pLBbn6KLJ+kc/Hp7Xv/RJD6aVVLgvOH7jmv2fv3Xn2Xn0UhkDlXuBDjbjsEG6IDoZ9kaGbZZ2lPOYU6jb+noN9L+cq7hy/foiS49fShqG2tZypirSBgGpCdJZ53/TSnCuas37nLw5+6QnVJZAJ/RKrIy8bhG3PDIV8vsTTqRBOeIJPZ5vPdxRXjOqMBWdKEmfZt4JSeMuC31YkZJSmPB0RbSvg/6K11CXoo+BlWR152SAMDiXqanoG52c0B1QPXiBsaQXNnBZ2t9hTSuEtC4Gg+4SM0nb13fsNxMkv0SWYR8HLsjryskHgHvGx+fOzdYzoFiScUTnOowDXSYpu8rdNBYt+Q200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"}}]);