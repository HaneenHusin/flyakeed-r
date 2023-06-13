import React, {useRef, useState} from 'react';
import {Toolbar} from 'primereact/toolbar';
import {Button} from 'primereact/button';
import {Menu} from 'primereact/menu';
import {Image} from 'primereact/image';

function MyAppBar() {
    const menu = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const items = [
        {
            id: 'SAR',
            template: (
                <React.Fragment>
                    <div style={{display: 'inline-block', padding: '8px', verticalAlign: 'middle'}}>
                        <Image src="/SAR.png" alt="SAR" width="24" height="24"/>
                    </div>
                    <div style={{display: 'inline-block', padding: '8px', verticalAlign: 'middle'}}>
                        <span>SAR</span>
                    </div>
                </React.Fragment>
            ),
            command: (event) => {
                setSelectedItem('SAR');
                console.log('SAR selected');
            }
        },
        {
            id: 'USA',
            template: (
                <React.Fragment>
                    <div style={{display: 'inline-block', padding: '8px', verticalAlign: 'middle'}}>
                        <Image src="/USA.png" alt="USA" width="24" height="24"/>
                    </div>
                    <div style={{display: 'inline-block', padding: '8px', verticalAlign: 'middle'}}>
                        <span>USA</span>
                    </div>
                </React.Fragment>
            ),
            command: (event) => {
                setSelectedItem('USA');
                console.log('USA selected');
            }
        }
    ];
    const handleClick = (event) => {
        menu.current.toggle(event);
    };

    const startContent = (
        <React.Fragment>
            {/*<h2 style={{color: '#ffffff'}}>FlyAkeed</h2>*/}
            <Image src="/logo.png" alt="USA" width="100%" height="50" className="zoomin animation-duration-1000"/>
        </React.Fragment>
    );
    const centerContent = (
        <React.Fragment className="fadeoutright   animation-duration-3000">
            <Button
                label="العربية"
                style={{background: 'transparent', color: '#ffffff', marginRight: '10px', border: 'none'}}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#40a9ff')}
                onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            />
            <Button label={selectedItem || 'Menu'} icon="pi pi-bars" className="p-button-rounded p-button-transparent"
                    onClick={handleClick}/>
            <Menu model={items} popup ref={menu} style={{backgroundColor: '#ffffff', border: 'none'}}/>
        </React.Fragment>
    );
    const endContent = (
        <React.Fragment>
            <Button label="Corporate" className="mr-2" style={{background: '#196dfb', marginRight: '10px'}}/>
            <Button label="login" style={{background: '#ffffff', color: '#196dfb'}}/>
        </React.Fragment>
    );
    return (
        <Toolbar pt={{root: {style: {background: 'linear-gradient(to right, #1a1f71, #5c60bd)'}}}} start={startContent}
                 center={centerContent} end={endContent}/>
    );
}

export default MyAppBar;