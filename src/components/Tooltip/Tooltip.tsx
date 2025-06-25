import Tippy from '@tippyjs/react';
import 'tippy.js/themes/translucent.css';
import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/fade.css';

export function Tooltip() {
    return (
        <Tippy
            content={
                <>
                    <em>“Don’t tell me the moon is shining; show me the glint of light on broken glass.”</em>
                    <br />
                    — Anton Chekhov
                </>
            }
            theme="translucent"
            animation="fade"
            trigger="mouseenter focus click"
            interactive={true}
        >
            <span style={{
                cursor: 'pointer', display:'inline-flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white', borderRadius: '50%', width: '20px', height: '20px'
            }}>
                i
            </span>
        </Tippy>
    );
}