Echo Server Provisioner for CodeZero

The provisioner needs to be published to npm.

Make sure you have specified what files are to be published. For a cloud provisioner, the following directoreis
should be published:

```
./k8s
./lib
```
These contain the compiled javascript and the kubernetes configuration templates that the provisioner
uses to create your application. You don't need to publish the source typescript files or any
packaging or test files.

Make sure you have this specified in the npm package.json file:
```
  "files": [
    "lib",
    "k8s"
  ],
```
To make sure everything will be packaged up correctly, use the `npm pack` command. This will create a
`[package-name]-[version].tgz` sip file with the files that will be published:
```
> npm pack
npm notice 
npm notice 📦  echo-server-provisioner@1.0.3
npm notice === Tarball Contents === 
npm notice 260B  lib/config.js                  
npm notice 2.0kB lib/mixins/createApply.js      
npm notice 256B  lib/mixins/createInquire.js    
npm notice 434B  lib/index.js                   
npm notice 722B  lib/mixins/index.js            
npm notice 1.6kB lib/ui/index.js                
npm notice 797B  package.json                   
npm notice 204B  lib/config.js.map              
npm notice 1.6kB lib/mixins/createApply.js.map  
npm notice 245B  lib/mixins/createInquire.js.map
npm notice 240B  lib/index.js.map               
npm notice 148B  lib/mixins/index.js.map        
npm notice 751B  lib/ui/index.js.map            
npm notice 3.2kB README.md                      
npm notice 125B  lib/config.d.ts                
npm notice 2.0kB lib/mixins/createApply.d.ts    
npm notice 1.6kB lib/mixins/createInquire.d.ts  
npm notice 259B  lib/index.d.ts                 
npm notice 64B   lib/mixins/index.d.ts          
npm notice 373B  lib/ui/index.d.ts              
npm notice 554B  k8s/deployment.yaml            
npm notice 267B  k8s/service.yaml               
npm notice === Tarball Details === 
npm notice name:          echo-server-provisioner                 
npm notice version:       1.0.3                                   
npm notice package size:  5.7 kB                                  
npm notice unpacked size: 17.7 kB                                 
npm notice shasum:        5bfdfc873844c949f24e168b17b5ab731a971f2c
npm notice integrity:     sha512-LtmdOBzDsOakS[...]zY9EgB8i7R0rg==
npm notice total files:   22                                      
npm notice 
+ echo-server-provisioner@1.0.3
```
You can look at the contents in your o/s or use the tar command to look at the contents like so:
```
> tar -tvf echo-server-provisioner-1.0.3.tgz 
-rw-r--r--  0 0      0         260 Oct 26  1985 package/lib/config.js
-rw-r--r--  0 0      0        1996 Oct 26  1985 package/lib/mixins/createApply.js
-rw-r--r--  0 0      0         256 Oct 26  1985 package/lib/mixins/createInquire.js
-rw-r--r--  0 0      0         434 Oct 26  1985 package/lib/index.js
-rw-r--r--  0 0      0         722 Oct 26  1985 package/lib/mixins/index.js
-rw-r--r--  0 0      0        1642 Oct 26  1985 package/lib/ui/index.js
-rw-r--r--  0 0      0         797 Oct 26  1985 package/package.json
-rw-r--r--  0 0      0         204 Oct 26  1985 package/lib/config.js.map
-rw-r--r--  0 0      0        1586 Oct 26  1985 package/lib/mixins/createApply.js.map
-rw-r--r--  0 0      0         245 Oct 26  1985 package/lib/mixins/createInquire.js.map
-rw-r--r--  0 0      0         240 Oct 26  1985 package/lib/index.js.map
-rw-r--r--  0 0      0         148 Oct 26  1985 package/lib/mixins/index.js.map
-rw-r--r--  0 0      0         751 Oct 26  1985 package/lib/ui/index.js.map
-rw-r--r--  0 0      0        3239 Oct 26  1985 package/README.md
-rw-r--r--  0 0      0         125 Oct 26  1985 package/lib/config.d.ts
-rw-r--r--  0 0      0        1994 Oct 26  1985 package/lib/mixins/createApply.d.ts
-rw-r--r--  0 0      0        1592 Oct 26  1985 package/lib/mixins/createInquire.d.ts
-rw-r--r--  0 0      0         259 Oct 26  1985 package/lib/index.d.ts
-rw-r--r--  0 0      0          64 Oct 26  1985 package/lib/mixins/index.d.ts
-rw-r--r--  0 0      0         373 Oct 26  1985 package/lib/ui/index.d.ts
-rw-r--r--  0 0      0         554 Oct 26  1985 package/k8s/deployment.yaml
-rw-r--r--  0 0      0         267 Oct 26  1985 package/k8s/service.yaml
```
Now, log into npm and publish the package. 
```
> npm login
Username: robbelovell
Password: 
Email: (this IS public) robblovell@gamil.com
Logged in as robbelovell on https://registry.npmjs.org/.
```
Now it's time to publish. Make sure you update the package version:
```
npm version
```
`npm version` will make sure that you have checked everything in GIT version control and 
increment the patch version number (1.0.x) in your package.json. It will also check in the change
and tag the branc with the version.

Once you have successfully incremented the semantic version, you can publish:

```
> npm publish
npm notice 
npm notice 📦  echo-server-provisioner@1.0.3
npm notice === Tarball Contents === 
npm notice 176B  .gitmodules                
npm notice 754B  package.json               
npm notice 647B  src/ui/rtsconfig.json      
npm notice 542B  tsconfig.json              
npm notice 85B   README.md                  
npm notice 127B  src/config.ts              
npm notice 2.0kB src/mixins/createApply.ts  
npm notice 176B  src/mixins/createInquire.ts
npm notice 414B  src/index.ts               
npm notice 155B  src/mixins/index.ts        
npm notice 897B  src/ui/index.ts            
npm notice 553B  k8s/deployment.yaml        
npm notice 267B  k8s/service.yaml           
npm notice === Tarball Details === 
npm notice name:          echo-server-provisioner                 
npm notice version:       1.0.3                                   
npm notice package size:  2.6 kB                                  
npm notice unpacked size: 6.8 kB                                  
npm notice shasum:        68d2793feb46c2c1e86c60c8df325e9cd39226db
npm notice integrity:     sha512-lWrZkU5QggIIK[...]7iiHPao+oxNDA==
npm notice total files:   13                                      
npm notice 
+ echo-server-provisioner@1.0.3
```

Go to the codezero hub and create an application. Use the name of this package as the 
provisioner name.

Now add an edition to the application...

once an edition is added, you should be able to find it in the marketplace. 
You can also set a category in the metadata section.

### Launching

To launch your app in your own cloud, you need to go to the My Clouds and add a cloud. 

Right now, you need to have a digital ocean account. You will be asked to setup an account.

You will be lead thorugh to create a digital ocean account and add a credit card. 
Don't do any other things in Digital Ocean because everything you need to do is in CodeZero.

Now, back in CodeZero, create your own personal view onto your digital ocean cloud. 
This is your "Marina" or desktop view of your CodeZero Cloud (like an operating system view
into your cloud)

Goto the MarketPlace and find your application. Hi

#### Troubleshooting

This error occurs if you haven't given your credit card:

incident id:01EHZ9ZSD9469JBYHNZ83TF5EY scope: iaas.afterCreateHook message: Data does not match schema stack: 
BadRequest: Data does not match schema at new BadRequest (/usr/traxitt/server/node_modules/@feathersjs/errors/lib/index.js:86:17) 
at Object.<anonymous> (/usr/traxitt/server/node_modules/feathers-hooks-common/lib/services/validate-schema.js:50:13) 
at /usr/traxitt/server/node_modules/@feathersjs/commons/src/hooks.ts:132:47 
at runMicrotasks (<anonymous>) at processTicksAndRejections (internal/process/task_queues.js:97:5) 
at Object.exports.<computed> (/usr/traxitt/server/lib/services/clusters/iaas.js:1:9162)

#### Debugging provisioning

node --inspect-brk ../node-monorepo/packages/tools/cli/lib/index.js provision ./c6o/application.yaml --local -n myspace7