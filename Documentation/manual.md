# easyAnim function manual

This is a list of all functions in current version of the library:

*function easy.slide(obj, action, time)*
```
This function allows you to slide an object.
```
*action* - **0** **1** or **2**


*function easy.fade(obj, action, time)*
```
This function allows you to hide or show an object.
```
*action* - **in** or **out**


*function easy.Zindex(obj, indx)*
```
This function allows you to change an object's position in z coord..
```

*function easy.pos(obj, x, y, time)*
```
This function allows you to move an object.
```

*function easy.scale(obj, width, height, time)*
```
This function allows you to scale an object.
```

*function easy.rotate(obj, deg, time)*
```
This function allows you to rotate an object.
```

*function easy.color(obj, color1, action, secondPar, thirdPar, time)*
```
This function allows you to fade color of an object or make it glow.
```
*color1* - at what color will the function start fading or glowing.

*action* - **fade** or **glow**

*secondPar* - **if action is glow**: at what color should the function change an object.

*secondPar* - **if action is fade**: **foreground** or **background** , foreground or background color.

*thirdPar* - used only by glow parameter. **foreground** or **background** , foreground or background color.


Written by https://github.com/fgRuslan

rusikisaev@list.ru
