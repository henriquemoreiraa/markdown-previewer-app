import {ReactComponent as Bold} from '../../svgs/bold.svg'
import {ReactComponent as CodeSlash} from '../../svgs/code-slash.svg'
import {ReactComponent as Img} from '../../svgs/image.svg'
import {ReactComponent as Italic} from '../../svgs/italic.svg'
import {ReactComponent as Line} from '../../svgs/line-dashed.svg'
import {ReactComponent as List} from '../../svgs/list.svg'
import {ReactComponent as ListNum} from '../../svgs/list-numbers.svg'
import {ReactComponent as Header} from '../../svgs/heading.svg'
import {ReactComponent as Check} from '../../svgs/square-check.svg'
import {ReactComponent as Table} from '../../svgs/table.svg'
import {ReactComponent as Strike} from '../../svgs/strikethrough.svg'
import * as C from './styles'

export const ItemsHeader = ({previewerUpdate , themeSwitcher}) => {
  return (
        <C.Container isDark={themeSwitcher}>         

            <div className='svg'>
                
                <p>Editor</p>
                
                <Header 
                    className='svgs' 
                    onClick={() => previewerUpdate('# ')}>
                </Header>

                <Strike 
                    className='svgs' 
                    onClick={() => previewerUpdate('~~')}>
                </Strike>

                <Italic 
                    className='svgs' 
                    onClick={() => previewerUpdate('**')}>
                </Italic>

                <Bold 
                    className='svgs' 
                    onClick={() => previewerUpdate('****')}>
                </Bold>

                <Img 
                    className='svgs' 
                    onClick={() => previewerUpdate('![Image](http://)')}>
                </Img>

                <Table 
                    className='svgs' 
                    onClick={() => previewerUpdate('|||')}>
                </Table>

                <List 
                    className='svgs' 
                    onClick={() => previewerUpdate('- ')}>
                </List>

                <ListNum 
                    className='svgs' 
                    onClick={() => previewerUpdate('1. ')}>
                </ListNum>

                <Check 
                    className='svgs' 
                    onClick={() => previewerUpdate('* [ ]')}>
                </Check>

                <CodeSlash 
                    className='svgs' 
                    onClick={() => previewerUpdate('``` ```')}>
                </CodeSlash>

                <Line 
                    className='svgs' 
                    onClick={() => previewerUpdate('---')}>              
                </Line>
                
            </div>
            
        </C.Container>
    );
}