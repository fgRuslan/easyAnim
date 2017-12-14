# easyAnim function manual

This is a list of all functions in current version of the library:

function easy.slide(obj, action, time)
-

| argument | description |
| ------ | ------ |
| obj | object |
| action | can be 0 - up,1 - down or 2 - toggle |

```
This function allows you to slide an object.
```

function easy.fade(obj, action, time)
-

| argument | description |
| ------ | ------ |
| obj | object |
| action | opacity or **hide** |
| time | time in ms when the action should finish |

```
This function allows you to hide or show an object.
```

function easy.rotate(obj, deg, time)
-

| argument | description |
| ------ | ------ |
| obj | object |
| deg | how much will the object rotate |
| time | time in ms when the action should finish |

```
This function allows you to rotate an object.
```

function easy.color(obj, action, secondPar, thirdPar, clr, time)

| argument | description |
| ------ | ------ |
| obj | object |
| action | **fade** or **glow** |
| secondPar | **foreground** or **background** |
| thirdPar | at what color should the function change an object. Can be null if *action* is **fade** |
| clr | at what color will the function start fading or glowing |
| time | time in ms when the action should finish |

```
This function allows you to fade color of an object or make it glow.
```
