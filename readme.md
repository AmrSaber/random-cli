# Random Generator CLI
Generates and prints a random string (and other types) to terminal.

## Install
Install the package globally to be able to use it in the terminal.

```bash
npm i -g @amrsaber/rand-string
```

## Examples
```
$ random string
LQQF5iTLVEawRGKqs4BN

$ random array
3 7 10 1 2 4 6 8 5 9

$ random number 1 10
9

$ random boolean
true
```

## Usage
After installation, use `random <command>`, You can use `random <command> -h` to show help message related to that command, or use `random -h` to list all the available commands and options.

### Commands
Available commands are [`string`, `array`, `number`, `boolean`], each of theses commands will be explained next.

#### `string`
Prints a random string with given length and type, also has the alias `str`.

String options:
| Option  | Alias | Type   | Default   | Description                     |
|---------|-------|--------|-----------|---------------------------------|
| length  | l     | Number | `20`      | String length                   |
| type    | t     | Number | `ascii`   | String type (see table below)   |

And the supported types are:
| Type            | Description                                          | Example              |
|-----------------|------------------------------------------------------|----------------------|
| ascii (default) | Uppercase letters, lowercase letters, and numbers    | 8AlB9IUu7ptWqkp3tbeQ |
| letters         | Uppercase letters and lowercase letters              | pPOzEvraFpVFJgCXPdXR |
| numbers         | Numbers (each character from 0 to 9)                 | 71110932458602457566 |
| extended        | Same as ascii plus the characters `+-_$#/@!`         | fX#InRyripY@+f!Q7o7R |
| base64          | Base 64 string                                       | XU0tg2OW43GJCh5IrrX= |
| hex             | Hex number (with uppercase and lowercase characters) | 7bCCB51BEb9bDd61f6af |

Examples
```
$ random string -c 2
vDboPtnabvsuEztusNAl
YMasHVICXbbQxCLVMMuF

$ random string -l 15 -c 3 -t numbers
366208018712690
991841686515201
575580372097167

$ random str -t extended
zrk+MQP$_j5pWUWxBV!m
```

### `array [length]`
Prints a shuffled array that starts at 1 by default, also accepts optional length argument that defaults to 10, and has the alias `arr`.

Note: the flag `-0` can be used to indicate that the array should start at 0.

Array options:
| Option    | Alias | Type   | Default   | Description                                                  |
|-----------|-------|--------|-----------|--------------------------------------------------------------|
| start     | s     | Number | `1`       | Array starting position, overrides `-0` if both are provided |
| end       | e     | Number | -         | Array ending, overrides `length`                             |
| delimiter | d     | String | `' '`     | The delimiter that is printed between array numbers          |

Examples:
```
$ random array
3 9 2 6 4 1 10 7 8 5

$ random array 5
4 1 5 3 2

$ random arr 5 -s 5
5 6 8 9 7

$ random arr -s 5 -e 10
5 9 6 10 7 8

$ random arr 5 -d ', '
4, 2, 5, 3, 1
```

### `number <min> <max>`
Print a random number between `min` and `max`, also has the aliases: [`num`, `integer`, `int`].

Example
```
$ random number 1 20
17

$ random num 0 5
3

$ random int 100 1000
240
```

### `boolean`
Prints a random boolean.

Example
```
$ random boolean
false

$ random boolean
true
```

## Global Options

| Option  | Alias | Type   | Default | Description                 |
|---------|-------|--------|---------|-----------------------------|
| help    | h     | -      | -       | Show help message           |
| version | v     | -      | -       | Show package version        |
| count   | c     | Number | 1       | Number of generated strings |


## Feature requests and bug reports
If you have a bug or have a goode idea for a new feature, please [open an issue](https://github.com/AmrSaber/rand-string/issues).