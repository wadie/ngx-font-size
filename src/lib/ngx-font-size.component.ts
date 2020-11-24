import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-font-size',
    templateUrl: './ngx-font-size.component.html',
    styleUrls: ['./ngx-font-size.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NgxFontSizeComponent implements OnInit {

    public selectedFont = 'md';
    public fontSize: string;
    public lgSize: string;
    public mdSize: string;
    public smSize: string;
    public iconColor: string;
    public selectedColor: string;

    ngOnInit() {
        this.toggleFontIcon(this.selectedFont);
        this.setStyling(this.iconColor, this.selectedColor, this.fontSize); // Set default settings
    }

    setStyling(iconColor: string, selectedColor: string, fontSize: string) {
        document.documentElement.style.setProperty('--icon-color', iconColor);
        document.documentElement.style.setProperty('--selected-color', selectedColor);
        document.documentElement.style.setProperty('--font-size', fontSize);
    }

    @Input('iconColor')
    public set seticonColor(iconColor: string) {
        this.iconColor = iconColor;
    }

    @Input('selectedColor')
    public set setselectedColor(selectedColor: string) {
        this.selectedColor = selectedColor;
    }

    @Input('lgSize')
    public set setlgSize(lgSize: string) {
        this.lgSize = lgSize;
    }

    @Input('mdSize')
    public set setmdSize(mdSize: string) {
        this.mdSize = mdSize;
    }

    @Input('smSize')
    public set setsmSize(smSize: string) {
        this.smSize = smSize;
    }

    toggleFontIcon(size) {
        switch (size) {
            case 'lg': {
                this.selectedFont = 'lg';
                this.fontSize = this.lgSize;
                break;
            }
            case 'md': {
                this.selectedFont = 'md';
                this.fontSize = this.mdSize;
                break;
            }
            case 'sm': {
                this.selectedFont = 'sm';
                this.fontSize = this.smSize;
                break;
            }
            default: {
                this.selectedFont = 'md';
                this.fontSize = this.mdSize;
            }
        }
        this.setStyling(this.iconColor, this.selectedColor, this.fontSize);
    }
}
