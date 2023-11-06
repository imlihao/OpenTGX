import { _decorator, Component, Input, input, instantiate, Node, Prefab } from 'cc';
import { ArrowBullet } from './ArrowBullet';
const { ccclass, property } = _decorator;

@ccclass('arrowPlayer')
export class arrowPlayer extends Component {
    
    @property(Prefab)
    arrow:Prefab;
    
    start() {
        input.on(Input.EventType.MOUSE_DOWN, this.onArrowShoot, this);
    }

    onArrowShoot(){
        console.error("arrow shoot");
        let shot = instantiate(this.arrow);
        shot.getComponent(ArrowBullet).shot(this.node);
    }

    update(deltaTime: number) {
        
    }
}

