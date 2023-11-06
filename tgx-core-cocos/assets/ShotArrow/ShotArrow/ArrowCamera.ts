import { _decorator, Camera, Component, EventMouse, Input, input, Node, sys, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FPSCamera')
export class FPSCamera extends Component {
    start() {
        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);   
        this.curLookPos = new Vec3();
        this.curLookPos.z= -100;
        this.cam = this.node.getComponent(Camera);
    }
    cam:Camera;
    private curLookPos:Vec3;
    onMouseMove(evt: EventMouse){
        console.log("mouse move", evt.movementX, evt.movementY);
        const curLocation = evt.getLocation();
        const curUILocation = evt.getUILocation();
        console.log("curLocation", curLocation.toString());
        console.log("curUILocation", curUILocation.toString());
        console.log("-----------------------");
        this.curLookPos.x = curUILocation.x - screen.width / 2;
        this.curLookPos.y = curUILocation.y - screen.height / 2;
        this.node.lookAt(this.curLookPos);
    }

    update(deltaTime: number) {
        
    }
}

