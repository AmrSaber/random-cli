# Random Generator CLI

<p>
  <!-- NPM version badge -->
  <a href="https://www.npmjs.com/package/random-generator-cli">
    <img src="https://img.shields.io/npm/v/random-generator-cli" alt="version"/>
  </a>

  <!-- Github "Test Main" workflow status -->
  <a href="https://github.com/AmrSaber/random-cli/actions">
    <img src="https://github.com/AmrSaber/random-cli/workflows/Test%20Master/badge.svg" alt="Test Master Status"/>
  </a>

  <!-- Github "Test Dev" workflow status -->
  <a href="https://github.com/AmrSaber/random-cli/actions">
    <img src="https://github.com/AmrSaber/random-cli/workflows/Test%20Dev/badge.svg" alt="Test Dev Status"/>
  </a>

  <!-- NPM weekly downloads -->
  <a href="https://www.npmjs.com/package/random-generator-cli">
    <img src="https://img.shields.io/npm/dw/random-generator-cli" alt="weekly downloads"/>
  </a>

  <!-- License -->
  <a href="https://github.com/AmrSaber/random-cli/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/random-generator-cli" alt="license"/>
  </a>
</p>

Generates and prints a random string (and other types) to terminal.

## Install
Install the package globally to be able to use it in the terminal.

```bash
npm i -g random-generator-cli
```

## Examples
```
$ random string
LQQF5iTLVEawRGKqs4BN

$ random array
3 7 10 1 2 4 6 8 5 9

$ random number 1 10
9

$ random float
0.4114482629

$ random boolean
true

$ random pick a b c d e
d
```

## Usage
After installation, use `random <command>`, you can use `random <command> -h` to show help message related to that command, or use `random -h` to list all the available commands and options.

### Commands
Available commands are [`string`, `array`, `number`, `float`, `boolean`, `pick`], each of theses commands will be explained next.

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

$ random str -t extendedarray 15 --pad
14 11 12 15 13 03 08 07 05 06 02 01 09 04 10
zrk+MQP$_j5pWUWxBV!m
```

#### `array [length]`
Prints a shuffled array that starts at 1 by default, also accepts optional length argument that defaults to 10, and has the alias `arr`.

Note: the flag `-0` can be used to indicate that the array should start at 0.

Array options:
| Option    | Alias | Type   | Default   | Description                                                  |
|-----------|-------|--------|-----------|--------------------------------------------------------------|
| start     | s     | Number | `1`       | Array starting position, overrides `-0` if both are provided |
| end       | e     | Number | -         | Array ending, overrides `length`                             |
| delimiter | d     | String | `' '`     | The delimiter that is printed between array numbers          |

Array flags:
| Flag        | Alias | Default   | Description                                                          |
|-------------|-------|-----------|----------------------------------------------------------------------|
| startAtZero | 0     | `false`   | Array elements start at 0, equivalent to `-s 0`                      |
| pad         | -     | `false`   | Add zero-padding to small number, so all number have the same length |

Examples:
```
$ random array
3 9 2 6 4 1 10 7 8 5

$ random array 5
4 1 5 3 2

$ random array 5 -0
2 0 4 1 3

$ random arr 5 -s 5
5 6 8 9 7

$ random arr -s 5 -e 10
5 9 6 10 7 8

$ random arr 5 -d ', '
4, 2, 5, 3, 1

$ random array 15 --pad
14 11 12 15 13 03 08 07 05 06 02 01 09 04 10

$ random array 5 --pad
1 2 5 4 3
```

#### `number <min> <max>`
Prints a random number between `min` and `max`, also has the aliases: [`num`, `integer`, `int`].

Example
```
$ random number 1 20
17

$ random num 0 5
3

$ random int 100 1000
240
```

#### `float`
Prints a float number between 0 (inclusive) and 1 (exclusive).

Float options:
| Option    | Alias | Type   | Default   | Description                                        |
|-----------|-------|--------|-----------|----------------------------------------------------|
| precision | p     | Number | `10`      | The desired precision of the floating point number |

Example
```
$ random float
0.2067463883

$ random float -p 5
0.62194
```

#### `boolean`
Prints a random boolean, has the alias `bool`.

Boolean options:
| Option | Alias | Type   | Default      | Description                                       |
|--------|-------|--------|--------------|---------------------------------------------------|
| type   | t     | String | `true-false` | Boolean type, types are listed in the table below |

Boolean types:
| Type                 | Possible values   | Example |
|----------------------|-------------------|---------|
| true-false (default) | [`true`, `false`] | true    |
| yes-no               | [`yes`, `no`]     | no      |
| numeric              | [`1`, `0`]        | 1       |

Example
```
$ random boolean
false

$ random boolean
true
```

#### `pick <items..>`
Prints a random item(s) from the given items

Boolean options:
| Option    | Alias | Type   | Default | Description                                      |
|-----------|-------|--------|---------|--------------------------------------------------|
| number    | n     | Number | `1`     | The number of items to chose, without repetition |
| delimiter | d     | String | `' '`   | Delimiter that separates the chosen items        |

Example
```
$ random pick a1 a2 a3 a4
a3

$ random pick a1 a2 a3 a4 -n 2
a4 a2

$ random pick a1 a2 a3 a4 -n 2 -d ', '
a2, a3
```

### Global Options

| Option  | Alias | Type   | Default | Description                 |
|---------|-------|--------|---------|-----------------------------|
| help    | h     | -      | -       | Show help message           |
| version | v     | -      | -       | Show package version        |
| count   | c     | Number | 1       | Number of generated strings |


## Feature requests and bug reports
If you have a bug or have a goode idea for a new feature, please [open an issue](https://github.com/AmrSaber/rand-string/issues).