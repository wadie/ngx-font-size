import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxFontSizeComponent } from './ngx-font-size.component';

describe('NgxFontsizeComponent', () => {
    let component: NgxFontSizeComponent;
    let fixture: ComponentFixture<NgxFontSizeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxFontSizeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxFontSizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
