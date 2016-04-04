import {Renderer, Directive, ElementRef} from 'angular2/core';


@Directive({
    selector: '[myHighLight]',
    inputs:['highlightColor:myHighLight'],
    host:{
        '(mouseenter)':'egerEnter()',
        '(mouseleave)':'onMouseLeave()'
    }
})
export class HighLightDirective{
  private _defaultColor='green';
    highlightColor:string;
    constructor(private _elRef: ElementRef, private _renderer: Renderer){}
    egerEnter(){
        this.highlight(this.highlightColor ||  this._defaultColor);

    }
    onMouseLeave(){
        this.highlight(null);
    }
    private highlight(color:string){
        this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',color);
    }
/*
    ngOnInit() {
       console.log(this._elRef);
        //this._elRef.nativeElement.style.backgroundColor=this._defaultColor;
        /!* ez jobb biztonságosabb*!/this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',this._defaultColor);
      //  this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',this.highlightColor ||  this._defaultColor);
/!*
        ez itt egy feltétel ha van nincs highlight color akkor deffault
        this.highlightColor ||  this._defaultColor
*!/

    }*/
}