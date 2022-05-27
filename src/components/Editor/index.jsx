import { ItemsHeader } from '../ItemsHeader'
import {ReactComponent as Sun} from '../../svgs/sun.svg'
import {ReactComponent as Moon} from '../../svgs/moon.svg'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react';
import * as C from './styles'

export const Editor = () => {
    const [Previewer, setPreviewer] = useState('')
    const [themeSwitcher, setThemeSwitcher] = useState(true)

    return (
        <C.Container isDark={themeSwitcher}>
            <C.Editor isDark={themeSwitcher}>
                <div>
                    <ItemsHeader 
                        previewerUpdate={(e) => setPreviewer(Previewer + e)}
                        themeSwitcher={themeSwitcher}
                    />
                </div>

                <textarea 
                    autoFocus 
                    value={Previewer} 
                    onChange={(e) => setPreviewer(e.target.value)}>
                </textarea>

            </C.Editor>

            <C.Previewer isDark={themeSwitcher}>

                <div className='svg'>
                    <p className='PreviwerName'>Previewer</p> 
                    
                    <button onClick={() => setThemeSwitcher(!themeSwitcher)}>    {themeSwitcher ? <Moon className='svgs'/> : <Sun className='svgs'/>} 
                    </button>
                </div>

                <div className='Previewer-div'>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {Previewer}
                    </ReactMarkdown>
                </div>
                
            </C.Previewer>
        </C.Container>
    );
}