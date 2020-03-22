# Random String CLI
Generates and prints a random string to terminal.

## Install
```bash
npm i @amrsaber/rand-string
```

## Usage
After installation, use command `rand-string` and it will print a random string (see options below)

```
$ rand-string
nTxVfjxuF7AFuDVNJqn2
```

## Options

| Option  | Alias | Type   | Default | Description                                                 |
|---------|-------|--------|---------|-------------------------------------------------------------|
| help    | h     | -      | -       | Show help message                                           |
| version | v     | -      | -       | Show package version                                        |
| type    | t     | String | ascii   | The type of the generated string (see types in table below) |
| length  | l     | Number | 20      | Length of the generated random string                       |
| count   | c     | Number | 1       | Number of generated strings                                 |

### Types
The supported types are as following
| Type            | Description                                          | Example              |
|-----------------|------------------------------------------------------|----------------------|
| ascii (default) | Uppercase letters, lowercase letters, and numbers    | 8AlB9IUu7ptWqkp3tbeQ |
| letters         | Uppercase letters and lowercase letters              | pPOzEvraFpVFJgCXPdXR |
| numbers         | Numbers (each character from 0 to 9)                 | 71110932458602457566 |
| extended        | Same as ascii plus the characters `+-_$#/@!`         | fX#InRyripY@+f!Q7o7R |
| base64          | Base 64 string                                       | XU0tg2OW43GJCh5IrrX= |
| hex             | Hex number (with uppercase and lowercase characters) | 7bCCB51BEb9bDd61f6af |

## Examples
```
$ rand-string -l 20 -c 3 -t numbers
14877546087255815315
31545868498635262292
55412969142358473770

$ rand-string -l 15 -t base64
r28VRgeGSPZf6X0=

$ rand-string -l 20 -t extended
zrk+MQP$_j5pWUWxBV!m
```

## Feature requests and bug reports
If you have a bug or have a goode idea for a new feature, please [open an issue](https://github.com/AmrSaber/rand-string/issues).

