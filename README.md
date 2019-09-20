## HASHARD
###### Easy tool for generate random text or encrypt some text
---

#### INSTALLATION
Install using ***npm***:
`npm install --save hashard`  
  
Install using ***yarn***:
`yarn add hashard`

---

#### USAGE
Import package:
```javascript
const { random, encrypt, md5 } = require('hashard');
```

Generate random string:
```javascript
const x = random();
console.log(x);

// Output: 6e117916678edbfbd6dada7cb81564b7f5703e3dc20c07e5ab5b1d2d5ada0746
```

Generate md5 hash:
```javascript
const x = md5('Some string');
console.log(md5);

// Output: 80f855e731cc0c9aa336ca4d25f990be
```

Encrypt string (***v1***):
```javascript
const x = encrypt.v1('Some string', 'secret');
console.log(x);

// Output: 7e61ff8daca085259d2909148a31e0a3
```

Encrypt string (***v2***):
```javascript
const x = encrypt.v2('Some string', 'secret');
console.log(x);

// Output: 173024ab4b79bdefd7bdd4f867ce1ddf7bcb80c0
```

Encrypt string (***v3***):
```javascript
const x = encrypt.v3('Some string', 'secret');
console.log(x);

// Output: 9666041cd4daf399c52e1d52e65fc44f12636ab033754a9b7df40f44ebd63226
```

Encrypt string (***v4***):
```javascript
const x = encrypt.v4('Some string', 'secret');
console.log(x);

// Output: b753dbe5e3841f7d2b98ae74014f856314d91e4634fcb7f60b1a9bb0267dc1a2bedafbd4fcf67dda9b586814b87cfc02b7f31b9cd50f3a75bfd7f657b73d315b
```
---
##### LICENSE [ MIT ]