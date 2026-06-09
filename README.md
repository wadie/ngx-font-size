# ngx-font-size [![npm version](http://img.shields.io/npm/v/ngx-font-size.svg)](https://npmjs.org/package/ngx-font-size) [![StackBlitz](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://stackblitz.com/edit/ngx-font-size)

> An Angular component for web accessibility that allows the visitor to toggle between font sizes on the app. 

## Available options

`mdSize` is set to be the default font size.

Option | Description
:---:|---
iconColor | The color of the toggle icons.
selectedColor | The color of the selected icon.
lgSize | A string that represents the *large* font size in px/rem/...
mdSize | A string that represents the *medium* font size in px/rem/...
smSize | A string that represents the *small* font size in px/rem/...

## Install

```bash
$ npm install ngx-font-size --save
```

## Usage

`NgxFontSizeComponent` is a standalone component. Import it directly into whichever
component (or `NgModule`) needs it:

```typescript
import { Component } from '@angular/core';

// Import the library
import { NgxFontSizeComponent } from 'ngx-font-size';

@Component({
  selector: 'app-root',
  imports: [
    NgxFontSizeComponent // <-- Add this line
  ],
  templateUrl: './app.component.html'
})
export class AppComponent { }
```

Once the component is imported, you can use it in your Angular application:

```html
<!-- You can now use NgxFontSize component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-font-size
    [iconColor]="iconColor"
    [selectedColor]="'#247AFD'"
    [lgSize]="'1.15rem'"
    [mdSize]="'1.05rem'"
    [smSize]="'15px'"
></ngx-font-size>
```

[StackBlitz Demo](https://stackblitz.com/edit/ngx-font-size)

## License

MIT © [Wadie](https://github.com/wadie)
