[![Build Status](https://dev.azure.com/dv-github-repos/passphrase-generator/_apis/build/status/deanilvincent.passphrase-generator?branchName=main)](https://dev.azure.com/dv-github-repos/passphrase-generator/_build/latest?definitionId=7&branchName=main)

# Overview

NPM package that generates passphrase.

# Installation

`npm i passphrase-generator --save`

# Setup & Basic Usage

```
const { generatePassPhrase } = require('passphrase-generator')
// OR
import { generatePassPhrase } from 'passphrase-generator'

console.log(generatePassPhrase(5))
// ['acceptable', 'wilderness', 'carsick', 'bypass', 'crossly']

console.log(generatePassPhrase(5, 'a'))
// ['aback', 'abaft', 'abandoned', 'abashed', 'aberrant']
```

## Additional Info

### Options

| Property   | Desc.                                          |
| ---------- | ---------------------------------------------- |
| length     | word(s) that will return as array              |
| startsWith | return words that start with the given letter |

### Contribute

Feel free to clone or fork this project: `https://github.com/deanilvincent/passphrase-generator.git`

Contributions & pull requests are welcome!

I'll be glad if you give this project a ★ on [Github](https://github.com/deanilvincent/passphrase-generator) :))

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/deanilvincent/passphrase-generator/blob/master/LICENSE) file for details.
