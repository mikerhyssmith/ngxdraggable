import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';
import { Draggable } from '@shopify/draggable';
import { DraggableContainer } from 'container/draggable-container.directive';

@Component({
    selector: 'draggable-container',
    templateUrl: 'draggable-container.component.html'
})

export class DraggableComponent implements OnInit {
    
    @ViewChildren(DraggableContainer)
    private containers: Array<ElementRef>;

    private draggable: Draggable;
   

    constructor(private options: DraggableOptions) { }

    ngOnInit() {
        const containerElements = this.containers.map(container => container.nativeElement);
        this.draggable = new Draggable(containerElements, this.options);
    }

    ngOnDestroy() {
        this.draggable.destroy();
    }
}