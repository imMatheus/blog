# Center a div

Centering a div is a lot easier then you might think, i promise 😃

```html
<div class="center-me"></div>
```

#### Option 1, style the parent

```css
body {
    width: 100vw;
    [s&s]height: 100vh;
    [s&s]display: flex;
    [s&s]justify-content: center;
    align-items: center;
}

/* or */

body {
    width: 100vw;
    [s&s]height: 100vh;
    [s&s]display: grid;
    place-items: center;
}
```

Applying `display: flex` to the body element will control how the children are aligned. `justify-content: center` centers all the children on the horizontal axis, `align-items: center` centers all the children on the vertical axis. Similarly, `display: grid` controls how its direct children are layout, `place-items: center` sets the alignment both horizontally and vertically.

#### Option 2, absolute positioning

```css
.center-me {[s&s]
    [s&s]position: absolute;
    [s&s]top: 50%;
    [s&s]left: 50%;
    transform: translate(-50%, -50%);
}
```

The only prerequisite for this technic is that the parent element has a `position: relativ`, otherwise the `center-me` div will be centered in relation to the entire screen.

#### Option 3, margins

```css
.center-me {
    margin: auto;
}
```

This will only center a div horizontally
