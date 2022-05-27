import {ReactComponent as Bold} from '../../svgs/bold.svg'
import {ReactComponent as CodeSlash} from '../../svgs/code-slash.svg'
import {ReactComponent as Code} from '../../svgs/code.svg'
import {ReactComponent as Img} from '../../svgs/image.svg'
import {ReactComponent as Italic} from '../../svgs/italic.svg'
import {ReactComponent as Line} from '../../svgs/line-dashed.svg'
import {ReactComponent as Link} from '../../svgs/link.svg'
import {ReactComponent as List} from '../../svgs/list.svg'
import {ReactComponent as ListNum} from '../../svgs/list-numbers.svg'
import { ReactComponent as Header } from '../../svgs/heading.svg'
import {ReactComponent as Check} from '../../svgs/square-check.svg'
import {ReactComponent as Table} from '../../svgs/table.svg'
import {ReactComponent as Strike} from '../../svgs/strikethrough.svg'

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
            <C.Editor>
                <div className='svg'>
                    <p>Editor</p>
                    <Header className='svgs' onClick={() => setPreviewer(Previewer + '# ')}></Header>
                    <Strike className='svgs' onClick={() => setPreviewer(Previewer + '~~')}></Strike>
                    <Italic className='svgs' onClick={() => setPreviewer(Previewer + '**')}></Italic>
                    <Bold className='svgs' onClick={() => setPreviewer(Previewer + '****')}></Bold>
                    <Img className='svgs' onClick={() => setPreviewer(Previewer + '![Image](http://)')}></Img>
                    <Table className='svgs' onClick={() => setPreviewer(Previewer + '|||')}></Table>
                    <List className='svgs' onClick={() => setPreviewer(Previewer + '- ')}></List>
                    <ListNum className='svgs' onClick={() => setPreviewer(Previewer + '1. ')}></ListNum>
                    <Check className='svgs' onClick={() => setPreviewer(Previewer + '* [ ]')}></Check>
                    <CodeSlash className='svgs' onClick={() => setPreviewer(Previewer + '``` ```')}></CodeSlash>
                    <Line className='svgs' onClick={() => setPreviewer(Previewer + '---')}></Line>
                </div>
                <textarea autoFocus value={Previewer} onChange={(e) => setPreviewer(e.target.value)}></textarea>
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