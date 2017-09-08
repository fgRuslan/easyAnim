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

function easy.Zindex(obj, indx)
-

| argument | description |
| ------ | ------ |
| obj | object |
| indx | index in z coordinate |

![z coordinate](http://i.imgur.com/Zai7O0j.png)

```
This function allows you to change an object's position in z coord..
```

function easy.pos(obj, x, y, time)
-

| argument | description |
| ------ | ------ |
| obj | object |
| x | x coordinate of the place where to move |
| y | y coordinate of the place where to move |
| time | time in ms when the action should finish |

```
This function allows you to move an object.
```

function easy.scale(obj, width, height, time)
-

| argument | description |
| ------ | ------ |
| obj | object |
| width | width |
| height | height |
| time | time in ms when the action should finish |

```
This function allows you to scale an object.
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

function easy.color(obj, action, secondPar, thirdPar, color1, time)

| argument | description |
| ------ | ------ |
| obj | object |
| action | **fade** or **glow** |
| secondPar | **foreground** or **background** |
| thirdPar | at what color should the function change an object. Can be null if *action* is **fade** |
| color1 | at what color will the function start fading or glowing |
| time | time in ms when the action should finish |

```
This function allows you to fade color of an object or make it glow.
```