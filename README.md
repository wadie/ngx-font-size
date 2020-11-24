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

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { NgxFontSizeModule } from 'ngx-font-size';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFontSizeModule // <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its component in your Angular application:

```xml
<!-- You can now use NgxFontSize component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-font-size
    [iconColor]=iconColor
    [selectedColor]="'#247AFD'"
    [lgSize]="'1.15rem'"
    [mdSize]="'1.05rem'"
    [smSize]="'15px'"
></ngx-font-size>
```

[StackBlitz Demo](https://stackblitz.com/edit/ngx-font-size)

## License

MIT © [Wadie](https://github.com/wadie)
