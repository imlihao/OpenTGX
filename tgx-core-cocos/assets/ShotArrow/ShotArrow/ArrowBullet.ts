import { _decorator, Component, director, Node, RigidBody } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ArrowBullet')
export class ArrowBullet extends Component {
        
    
    public shot(shooter:Node){
        console.error("an arrow has been shoot");
        director.getScene().addChild(this.node);
        this.node.setPosition(shooter.getPosition());
        this.node.setRotation(shooter.getRotation());
        this.node.getComponent(RigidBody).applyForce(shooter.forward.multiplyScalar(1000));
    }

    update(deltaTime: number) {
        
    }
}

