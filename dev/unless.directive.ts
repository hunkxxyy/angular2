import {Directive, TemplateRef, ViewContainerRef} from 'angular2/core';
@Directive({
    selector:'[myUnless]',
    inputs:['myUnless']
})
export class UnlessDirective{
    constructor(private _teemplateRef:TemplateRef, private _viewContainerRef:ViewContainerRef){}
    set myUnless(condition:boolean){
        if(!condition){
            this._viewContainerRef.createEmbeddedView(this._teemplateRef);
        }else{
            this._viewContainerRef.clear();

        }
    }
}
