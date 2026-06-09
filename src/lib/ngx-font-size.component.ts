import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ngx-font-size',
    templateUrl: './ngx-font-size.component.html',
    styleUrls: ['./ngx-font-size.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NgxFontSizeComponent implements OnInit {

    @Input() iconColor = '';
    @Input() selectedColor = '';
    @Input() lgSize = '';
    @Input() mdSize = '';
    @Input() smSize = '';

    selectedFont = 'md';
    fontSize = '';

    ngOnInit(): void {
        this.toggleFontIcon(this.selectedFont); // Set default settings
    }

    setStyling(iconColor: string, selectedColor: string, fontSize: string): void {
        document.documentElement.style.setProperty('--icon-color', iconColor);
        document.documentElement.style.setProperty('--selected-color', selectedColor);
        document.documentElement.style.setProperty('--font-size', fontSize);
    }

    toggleFontIcon(size: string): void {
        switch (size) {
            case 'lg': {
                this.selectedFont = 'lg';
                this.fontSize = this.lgSize;
                break;
            }
            case 'sm': {
                this.selectedFont = 'sm';
                this.fontSize = this.smSize;
                break;
            }
            case 'md':
            default: {
                this.selectedFont = 'md';
                this.fontSize = this.mdSize;
            }
        }
        this.setStyling(this.iconColor, this.selectedColor, this.fontSize);
    }
}
